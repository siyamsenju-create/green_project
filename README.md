<img width="1320" height="795" alt="Screenshot 2026-05-01 at 4 05 23 AM" src="https://github.com/user-attachments/assets/fe28eece-8456-4d4a-8b3c-91c776b52207" />
<img width="1323" height="742" alt="Screenshot 2026-05-01 at 4 06 03 AM" src="https://github.com/user-attachments/assets/a643f08e-cb44-44aa-8545-ae0b7e976391" />
<img width="1324" height="744" alt="Screenshot 2026-05-01 at 4 06 34 AM" src="https://github.com/user-attachments/assets/bf47c58f-bf1e-4a82-b5c8-217fa0cb9a0c" />
<img width="1321" height="677" alt="Screenshot 2026-05-01 at 4 06 58 AM" src="https://github.com/user-attachments/assets/a7bc8de6-ba67-43a2-ba41-f5ca170e3687" />
<img width="1318" height="742" alt="Screenshot 2026-05-01 at 4 07 23 AM" src="https://github.com/user-attachments/assets/84d5a91f-54dd-4bc8-bdfd-0deb31c1aaad" />

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
