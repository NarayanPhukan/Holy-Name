# Database Migration & Setup Guide

## Changes Made to Data Model

### Admin Schema - OTP Field Changes
The OTP fields in the Admin model are now storing **hashed values** instead of plain text.

**No schema changes required** - the same fields are used:
- `otp` - Now stores bcrypt hash instead of plain text
- `otpExpires` - Still stores expiration timestamp
- `newAdminOtp` - Now stores bcrypt hash instead of plain text  
- `newAdminOtpExpires` - Still stores expiration timestamp

**Action Required:** Clear any existing plain-text OTPs from database before deploying
```javascript
db.admins.updateMany({}, {$unset: {otp: 1, otpExpires: 1, newAdminOtp: 1, newAdminOtpExpires: 1}});
```

### Admission Schema - New Indexes
Added performance index for common filtering/sorting:

```javascript
// Already in code - verify it exists:
admissionSchema.index({ status: 1, createdAt: -1 });
```

**New indexes to consider adding:**
```javascript
// For email lookups and submissions
admissionSchema.index({ email: 1 });

// For reference number lookups
admissionSchema.index({ referenceNumber: 1 });

// For getting applications by grade
admissionSchema.index({ gradeApplied: 1 });
```

## Migration Steps for Production Deployment

### Pre-Deployment (Staging/Dev)
1. Run tests with new validation rules
2. Verify OTP hashing works correctly
3. Test pagination on admissions API with 1000+ records
4. Verify email sending still works

### Deployment Steps

```bash
# 1. Backup database (CRITICAL)
mongodump --uri="mongodb+srv://user:pass@cluster.mongodb.net/holynameschool" --out=backup_$(date +%Y%m%d)

# 2. Clear existing OTPs (they're now stored as plain text)
mongosh "mongodb+srv://user:pass@cluster.mongodb.net/holynameschool" <<EOF
db.admins.updateMany({}, {$unset: {otp: 1, otpExpires: 1, newAdminOtp: 1, newAdminOtpExpires: 1}});
db.admins.collection.getStats();
EOF

# 3. Create recommended indexes for performance
mongosh "mongodb+srv://user:pass@cluster.mongodb.net/holynameschool" <<EOF
db.admissions.createIndex({email: 1});
db.admissions.createIndex({referenceNumber: 1});
db.admissions.createIndex({gradeApplied: 1});
EOF

# 4. Deploy new code
git pull origin main
npm install --prefix backend
npm install --prefix frontend
npm run build

# 5. Restart application
# (Method depends on your hosting - Vercel auto-deploys, others use pm2/systemctl)

# 6. Verify deployment
curl https://yourdomain.com/api/health
# Should return: {"status":"ok","environment":"production",...}
```

## Testing After Deployment

### 1. Test OTP Security
```bash
# OTP should be hashed
mongosh "your-connection-string" <<EOF
db.admins.findOne({otp: {$exists: true}})
// Should show hash like: "$2a$10$..."
// NOT plain text
EOF
```

### 2. Test Admission Submission
```bash
curl -X POST https://yourdomain.com/api/admissions \
  -H "Content-Type: application/json" \
  -d '{
    "studentName": "John Doe",
    "dateOfBirth": "2010-01-15",
    "gender": "Male",
    "gradeApplied": "9",
    "contactNumber": "9876543210",
    "email": "parent@example.com",
    "address": "123 Main St"
  }'
# Should return: {"message": "Application submitted successfully", "referenceNumber": "HNS-2026-..."}
```

### 3. Test Pagination
```bash
curl -H "Authorization: Bearer {admin_token}" \
  "https://yourdomain.com/api/admissions?page=1&limit=20"
# Should return:
# {
#   "data": [...20 admissions...],
#   "pagination": {
#     "page": 1,
#     "limit": 20,
#     "total": 245,
#     "pages": 13
#   }
# }
```

### 4. Test Password Strength
```bash
# Weak password should fail
curl -X POST https://yourdomain.com/api/auth/register \
  -H "Authorization: Bearer {admin_token}" \
  -d '{
    "email": "admin@test.com",
    "password": "weak",
    "name": "Test Admin"
  }'
# Should return error about password strength

# Strong password should work
curl -X POST https://yourdomain.com/api/auth/register \
  -H "Authorization: Bearer {admin_token}" \
  -d '{
    "email": "admin@test.com",
    "password": "SecurePass123",
    "name": "Test Admin"
  }'
# Should succeed
```

## Rollback Procedure

If something goes wrong:

```bash
# 1. Restore from backup
mongorestore --uri="mongodb+srv://user:pass@cluster.mongodb.net/holynameschool" backup_20260329/

# 2. Revert code to previous version
git checkout HEAD~1

# 3. Restart application
# (Your hosting provider's method)

# 4. Verify health
curl https://yourdomain.com/api/health
```

## Performance Optimization Completed

✅ Pagination on admissions listing (prevents OOM)  
✅ Indexed queries on status and creation date  
✅ Secure random generation (no performance impact)  
✅ Validation before database calls (fail-fast)

## Monitoring After Deployment

Set up alerts for:
- Failed OTP validations (possible brute force)
- Failed admission submissions (validation issues)
- Auth failures (possible intrusion attempt)
- Email sending failures

Example Datadog monitor:
```python
# Alert if >10 OTP failures in 5 minutes
monitor_type = "metric alert"
query = 'logs("service:holy-name status:error otp").index(day).stats(count).over("host").by()>10'
```

## FAQ

**Q: Will existing admin accounts need to reset their passwords?**  
A: No. Password hashing already in place. Only OTP clearing needed.

**Q: Do I need to ask users to resubmit admission applications?**  
A: No. Data is unchanged, only new submissions go through validation.

**Q: How long does the migration take?**  
A: <5 minutes for database operations. Application restart adds 30-60 seconds.

**Q: What if I have existing admissions with invalid emails?**  
A: They'll remain. New submissions require validation. Consider audit of existing data.

---

**Last Updated:** March 2026  
**Version:** 1.0  
**Status:** Ready for Production
