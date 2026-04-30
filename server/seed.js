require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const Service = require('./models/Service');
const Project = require('./models/Project');

const services = [
  { title: "Terrace Garden Setup", description: "Convert your roof into a green oasis.", icon: "leaf", image: "https://images.unsplash.com/photo-1628102491629-778571d893a3?auto=format&fit=crop&q=80&w=800", category: "garden", order: 1 },
  { title: "Garden Service", description: "Comprehensive care for your home garden.", icon: "flower", image: "https://images.unsplash.com/photo-1590483868612-4f30fdb74b21?auto=format&fit=crop&q=80&w=800", category: "garden", order: 2 },
  { title: "Artificial Grass", description: "Lush, green artificial turf installation.", icon: "grass", image: "https://images.unsplash.com/photo-1616893699388-3488afb4fdb0?auto=format&fit=crop&q=80&w=800", category: "landscape", order: 3 },
  { title: "Compound Wall Mesh", description: "Durable fencing and wall mesh solutions.", icon: "fence", image: "https://images.unsplash.com/photo-1598551719736-2ee235ecbca7?auto=format&fit=crop&q=80&w=800", category: "landscape", order: 4 },
  { title: "Vegetables Garden", description: "Grow your own organic vegetables at home.", icon: "carrot", image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&q=80&w=800", category: "garden", order: 5 },
  { title: "Landscape Work", description: "Professional landscaping for aesthetic appeal.", icon: "landscape", image: "https://images.unsplash.com/photo-1558904541-efa843a96f0f?auto=format&fit=crop&q=80&w=800", category: "landscape", order: 6 },
  { title: "Green House", description: "Custom greenhouse design and construction.", icon: "home", image: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&q=80&w=800", category: "garden", order: 7 },
  { title: "Hardscaping Natural Stone", description: "Elegant stone pathways and structures.", icon: "stone", image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=800", category: "landscape", order: 8 }
];

const projects = [
  { title: "Modern Villa Garden", description: "Complete landscape redesign with exotic plants.", category: "landscape", image: "https://images.unsplash.com/photo-1628102491629-778571d893a3?auto=format&fit=crop&q=80&w=800", location: "Chennai", featured: true },
  { title: "Urban Terrace Oasis", description: "A beautiful rooftop garden with seating.", category: "terrace", image: "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&q=80&w=800", location: "Bangalore", featured: true },
  { title: "Corporate Campus Maintenance", description: "Ongoing maintenance for a 10-acre campus.", category: "maintenance", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800", location: "Hyderabad", featured: false },
  { title: "Organic Veggie Patch", description: "Backyard setup for organic farming.", category: "garden", image: "https://images.unsplash.com/photo-1592424042858-a5796248c8b6?auto=format&fit=crop&q=80&w=800", location: "Coimbatore", featured: true },
  { title: "Stone Pathway & Lawn", description: "Artificial grass with natural stone hardscaping.", category: "landscape", image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=800", location: "Chennai", featured: false },
  { title: "Balcony Makeover", description: "Small space garden design.", category: "terrace", image: "https://images.unsplash.com/photo-1534073828943-f801091bb18c?auto=format&fit=crop&q=80&w=800", location: "Pune", featured: false },
  { title: "Resort Landscaping", description: "Lush tropical landscape for a luxury resort.", category: "landscape", image: "https://images.unsplash.com/photo-1585320806297-9794b3e4ce88?auto=format&fit=crop&q=80&w=800", location: "Goa", featured: true },
  { title: "Vertical Wall Garden", description: "Space-saving vertical garden installation.", category: "garden", image: "https://images.unsplash.com/photo-1528310263305-e110c7e2b10a?auto=format&fit=crop&q=80&w=800", location: "Mumbai", featured: false },
  { title: "Front Yard Revamp", description: "Enhancing curb appeal with fresh turf and shrubs.", category: "garden", image: "https://images.unsplash.com/photo-1558904541-efa843a96f0f?auto=format&fit=crop&q=80&w=800", location: "Delhi", featured: false },
  { title: "School Playground Turf", description: "Safe artificial grass for kids' play area.", category: "landscape", image: "https://images.unsplash.com/photo-1621274220336-398d8eeab6aa?auto=format&fit=crop&q=80&w=800", location: "Chennai", featured: false },
  { title: "Luxury Poolside Landscape", description: "Elegant poolside greenery and lighting.", category: "landscape", image: "https://images.unsplash.com/photo-1576013551627-14dd86b461f0?auto=format&fit=crop&q=80&w=800", location: "Kochi", featured: true },
  { title: "Community Park Maintenance", description: "Regular upkeep of a large residential park.", category: "maintenance", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800", location: "Chennai", featured: false }
];

const importData = async () => {
  try {
    await connectDB();
    await Service.deleteMany();
    await Project.deleteMany();
    
    await Service.insertMany(services);
    await Project.insertMany(projects);
    
    console.log('Data Imported!');
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

importData();
