<img width="1320" height="795" alt="Screenshot 2026-05-01 at 4 05 23 AM" src="https://github.com/user-attachments/assets/fe28eece-8456-4d4a-8b3c-91c776b52207" />
<img width="1323" height="742" alt="Screenshot 2026-05-01 at 4 06 03 AM" src="https://github.com/user-attachments/assets/a643f08e-cb44-44aa-8545-ae0b7e976391" />
<img width="1324" height="744" alt="Screenshot 2026-05-01 at 4 06 34 AM" src="https://github.com/user-attachments/assets/bf47c58f-bf1e-4a82-b5c8-217fa0cb9a0c" />
<img width="1321" height="677" alt="Screenshot 2026-05-01 at 4 06 58 AM" src="https://github.com/user-attachments/assets/a7bc8de6-ba67-43a2-ba41-f5ca170e3687" />
<img width="1318" height="742" alt="Screenshot 2026-05-01 at 4 07 23 AM" src="https://github.com/user-attachments/assets/84d5a91f-54dd-4bc8-bdfd-0deb31c1aaad" />
# 🌿 GreenScape – Gardening & Landscaping Platform

![GreenScape Banner](https://via.placeholder.com/1200x400?text=GreenScape)

A modern, fully responsive **Gardening & Landscaping Web Application** built using the **MERN Stack**. GreenScape helps landscaping businesses showcase their services, completed projects, customer testimonials, and allows potential customers to contact the business through an interactive website experience.

---

## 🚀 Live Demo

🔗 **Frontend:** Add your deployment URL here

🔗 **Backend API:** Add your API URL here

---

## 📸 Screenshots

### Home Page

<img src="./screenshots/home.png" alt="Home Page" width="100%">

### Services Section

<img src="./screenshots/services.png" alt="Services Page" width="100%">

### Projects Gallery

<img src="./screenshots/projects.png" alt="Projects Page" width="100%">

### Contact Page

<img src="./screenshots/contact.png" alt="Contact Page" width="100%">

---

# ✨ Features

### 🌱 Customer Features

* Responsive modern UI
* Beautiful Framer Motion animations
* Service showcase section
* Dynamic project gallery
* Customer testimonials
* Contact form with validation
* Interactive image gallery
* Animated statistics counters
* Mobile-friendly design

### ⚙️ Admin Features

* Manage Services
* Manage Projects
* MongoDB-powered content storage
* RESTful API architecture
* Easy scalability

---

# 🛠️ Tech Stack

## Frontend

* React.js (Vite)
* Tailwind CSS
* Framer Motion
* React Router DOM
* React Hook Form
* Swiper.js
* React Toastify
* CountUp.js

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

## Database

* MongoDB Atlas / Local MongoDB

---

# 📂 Project Structure

```bash
GreenScape/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── assets/
│   │   ├── hooks/
│   │   └── services/
│   │
│   └── public/
│
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   ├── seed/
│   └── server.js
│
└── README.md
```

---

# 🔧 Installation & Setup

## Prerequisites

Before getting started, ensure you have:

* Node.js (v18+)
* npm or yarn
* MongoDB
* Git

---

## 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/greenscape.git

cd greenscape
```

---

## 2️⃣ Backend Setup

Navigate to the backend directory:

```bash
cd server
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
PORT=5000

MONGO_URI=mongodb://localhost:27017/greenscape

NODE_ENV=development
```

Seed initial data:

```bash
npm run seed
```

Start server:

```bash
npm run dev
```

Backend runs at:

```bash
http://localhost:5000
```

---

## 3️⃣ Frontend Setup

Open another terminal:

```bash
cd client
```

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Frontend runs at:

```bash
http://localhost:5173
```

---

# 📡 API Endpoints

## Services

```http
GET    /api/services
POST   /api/services
PUT    /api/services/:id
DELETE /api/services/:id
```

## Projects

```http
GET    /api/projects
POST   /api/projects
PUT    /api/projects/:id
DELETE /api/projects/:id
```

---

# 🎨 UI Highlights

* Smooth Page Transitions
* Animated Scroll Effects
* Responsive Navigation
* Interactive Gallery Lightbox
* Dynamic Data Rendering
* Modern Landscaping Theme

---

# 📈 Performance Optimizations

* Vite Fast Bundling
* Lazy Loading Components
* Optimized Image Rendering
* MongoDB Query Optimization
* Efficient API Architecture

---

# 🚀 Deployment

## Frontend Deployment

Recommended platforms:

* Vercel
* Netlify
* Firebase Hosting

## Backend Deployment

Recommended platforms:

* Render
* Railway
* VPS Hosting
* AWS EC2

## Database

* MongoDB Atlas

---

# 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a feature branch

```bash
git checkout -b feature/new-feature
```

3. Commit your changes

```bash
git commit -m "Add new feature"
```

4. Push to branch

```bash
git push origin feature/new-feature
```

5. Open a Pull Request

---

# 📝 License

This project is licensed under the MIT License.

---

# 👨‍💻 Author

Developed with ❤️ using the MERN Stack.

If you like this project, don't forget to ⭐ the repository.
