# GreenScape - Gardening & Landscaping Website

A complete, fully animated MERN stack gardening website.

## Tech Stack
- Frontend: React (Vite), Tailwind CSS, Framer Motion, React Router DOM, React Hook Form, Swiper.js, CountUp.js
- Backend: Node.js, Express.js, MongoDB, Mongoose

## Setup Instructions

### 1. Backend Setup
1. Open a terminal and navigate to the `server` directory:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Ensure MongoDB is running locally on `mongodb://localhost:27017` or update the `MONGO_URI` in `server/.env`.
4. Seed the database with initial data:
   ```bash
   npm run seed
   ```
5. Start the backend server:
   ```bash
   npm run dev
   ```
   The server will run on `http://localhost:5000`.

### 2. Frontend Setup
1. Open a new terminal and navigate to the `client` directory:
   ```bash
   cd client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
   The frontend will run on `http://localhost:5173`.

## Features
- Fully responsive modern design with Framer Motion animations
- Dynamic Services and Projects fetched from the database
- Contact Form with React Hook Form and Toastify notifications
- Animated stats counter and scroll progress
- Image lightbox for project gallery
- Admin APIs to manage services and projects
