# Task Management API

## 📌 Description
A RESTful Task Management API built using Node.js, Express, and MongoDB. It supports user authentication, task CRUD operations, caching, and performance optimization using indexing.

---

## 🚀 Features

- User Registration and Login (JWT Authentication)
- Secure password hashing using bcrypt
- Create, Read, Update, Delete tasks
- In-memory caching for GET /tasks
- Cache invalidation on data changes
- Database indexing for optimized queries
- Environment variable configuration
- Deployed on cloud (Render)

---

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- Render (Deployment)

---

## 📡 API Endpoints

### Auth Routes
- POST /register → Register user
- POST /login → Login user

### Task Routes
- GET /tasks → Get all tasks (cached)
- POST /tasks → Create task
- PUT /tasks/:id → Update task
- DELETE /tasks/:id → Delete task

---

## ⚡ Performance Optimization

- Unique index on email (User model)
- Index on userId (Task model)
- Compound index on status + priority
- Reduced query time significantly

---

## 🧠 Caching Strategy

- Cached GET /tasks for 60 seconds
- Reduces repeated database queries
- Cache invalidated on create, update, delete

---

## 🔐 Environment Variables

Create a `.env` file:

MONGO_URI=your_mongodb_uri  
JWT_SECRET=your_secret  
PORT=3000  

---

## ⚙️ Installation

```bash
git clone <your-repo-link>
cd task-api
npm install
npm run dev