const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });

// Import models (thêm model của bạn vào đây)
// const User = require('./models/User');
// const Product = require('./models/Product');

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ Connected to MongoDB');

    // Xóa data cũ trước khi seed
    // await User.deleteMany({});
    // await Product.deleteMany({});

    // Thêm data mẫu
    // await User.insertMany([
    //   { name: 'Admin', email: 'admin@hipama.com', password: '123456' },
    //   { name: 'User 1', email: 'user1@hipama.com', password: '123456' },
    // ]);

    console.log('🌱 Seed data inserted successfully!');
    process.exit(0);
  } catch (err) {
    console.error('❌ Seed failed:', err.message);
    process.exit(1);
  }
};

seedData();
