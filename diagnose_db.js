const mongoose = require('mongoose');
require('dotenv').config({ path: './backend/.env' });
const Admin = require('./backend/models/Admin');

async function diagnose() {
  console.log('--- Diagnostic Log ---');
  console.log('Environment:', process.env.NODE_ENV);
  console.log('Client URL:', process.env.CLIENT_URL);
  
  const uri = process.env.MONGO_URI;
  if (!uri) {
    console.error('❌ MONGO_URI missing');
    process.exit(1);
  }

  console.log('Attempting to connect to MongoDB...');
  try {
    // Force standard connection if SRV is suspected to fail (simulated)
    await mongoose.connect(uri, { 
      serverSelectionTimeoutMS: 5000,
    });
    console.log('✅ MongoDB Connected Successfully');

    const admin = await Admin.findOne({ email: 'superadmin@1.com' });
    if (admin) {
      console.log('✅ Found admin superadmin@1.com');
      console.log('Role:', admin.role);
    } else {
      console.log('❌ Admin superadmin@1.com NOT found in database.');
      console.log('Available admins:', await Admin.find({}, 'email role'));
    }

    process.exit(0);
  } catch (err) {
    console.error('❌ Connection Error:', err.message);
    if (err.message.includes('ECONNREFUSED')) {
      console.log('\n SUGGESTION: This is usually a DNS or IP Whitelist issue.');
      console.log('1. Go to MongoDB Atlas -> Network Access');
      console.log('2. Add "0.0.0.0/0" to allow access from everywhere (temporary).');
      console.log('3. Or, use a standard connection string without "srv".');
    }
    process.exit(1);
  }
}

diagnose();
