/**
 * Input validation utilities for production security
 */

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[0-9]{10,13}$/;
const aadharRegex = /^[0-9]{12}$/;
const pincodeRegex = /^[0-9]{6}$/;

exports.validateEmail = (email) => {
  if (!email || typeof email !== 'string') return false;
  return emailRegex.test(email.trim());
};

exports.validatePhone = (phone) => {
  if (!phone || typeof phone !== 'string') return false;
  return phoneRegex.test(phone.replace(/\D/g, ''));
};

exports.validateAadhar = (aadhar) => {
  if (!aadhar || typeof aadhar !== 'string') return false;
  return aadharRegex.test(aadhar.trim());
};

exports.validatePincode = (pincode) => {
  if (!pincode || typeof pincode !== 'string') return false;
  return pincodeRegex.test(pincode.trim());
};

exports.validatePassword = (password) => {
  // Min 8 chars, at least 1 uppercase, 1 lowercase, 1 number
  if (!password || typeof password !== 'string') return false;
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(password);
};

exports.validateDateOfBirth = (dateString) => {
  if (!dateString || typeof dateString !== 'string') return false;
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return false;
  // Age must be between 5 and 120 years
  const today = new Date();
  const age = today.getFullYear() - date.getFullYear();
  return age >= 5 && age <= 120;
};

exports.sanitizeString = (str) => {
  if (typeof str !== 'string') return '';
  return str.trim().replace(/[<>]/g, '').slice(0, 500); // XSS prevention
};

exports.validateGrade = (grade) => {
  const validGrades = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
  return validGrades.includes(String(grade));
};

exports.validateBloodGroup = (bg) => {
  const valid = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'];
  return valid.includes(String(bg).toUpperCase());
};

exports.validateGender = (gender) => {
  const valid = ['Male', 'Female', 'Other'];
  return valid.includes(String(gender).trim());
};
