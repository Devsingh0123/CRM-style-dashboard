import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { faker } from '@faker-js/faker';
import Lead from './models/Lead.model.js';
import connectDB from './config/db.js';

dotenv.config();


connectDB()

const seedLeads = async () => {
  try {
    
    // Clear existing leads
    const deleteResult = await Lead.deleteMany({});
    console.log(`Deleted ${deleteResult.deletedCount} existing leads`);

    const leads = [];
    const status = ['new', 'connected', 'qualified', 'converted', 'lost'];

    // Generate 300 dummy leads 
    const totalLeads = 300;

    for (let i = 0; i < totalLeads; i++) {
      leads.push({
        name: faker.person.fullName(),
        email: faker.internet.email(),
       
        status: status[Math.floor(Math.random() * status.length)],
        
       
        createdAt: faker.date.past({ years: 1 }),
        updatedAt: faker.date.recent()
      });
      
  
    }

    // Insert leads into database
    const insertResult = await Lead.insertMany(leads);
    console.log(`✅ ${insertResult.length} leads inserted into "leads" collection`);
    
    
    // Close connection
    await mongoose.disconnect();
    console.log(' MongoDB connection closed');
    console.log('Seed completed successfully!');
    
    process.exit(0);
    
  } catch (error) {
    console.error('Error seeding leads:', error.message);
    process.exit(1);
  }

};
seedLeads()