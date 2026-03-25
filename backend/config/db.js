const mongoose = require('mongoose');
const dns = require('dns');

const connectDB = async () => {
  // Fix for querySrv ECONNREFUSED on Windows: Force use of Google DNS
  try {
    dns.setServers(['8.8.8.8', '8.8.4.4']);
  } catch (e) {
    console.warn('DNS setServers failed, continuing with default resolver...');
  }

  try {
    const uri = process.env.MONGO_URI;
    if (!uri) {
      throw new Error('MONGO_URI is not defined');
    }

    // SANITY CHECK: If SRV is failing, we provide more context
    console.log('Connecting to MongoDB...');

    await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 5000,
    });
    console.log('✅ MongoDB Connected Successfully');
  } catch (error) {
    console.error(`❌ Connection Error: ${error.message}`);
    
    // Provide help for specific errors
    if (error.message.includes('querySrv ECONNREFUSED')) {
      console.log('\n--- DNS SRV RESOLUTION FAILED ---');
      console.log('Node.js is unable to resolve the _mongodb._tcp SRV record.');
      console.log('Common fixes:');
      console.log('1. Use a more stable DNS like 8.8.8.8');
      console.log('2. Switch to the standard mongodb:// connection string');
      console.log('3. Ensure your IP is whitelisted in MongoDB Atlas');
    }
    
    process.exit(1);
  }
};

module.exports = connectDB;
