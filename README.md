# 🛒 Week 9 Capstone – E-Commerce Backend API  
### Node.js | Express.js | JWT | RESTful APIs

This project is a **complete production-ready backend REST API** built for the **Week 8 React E-Commerce Frontend Application**.  
It provides secure authentication, product management, order processing and protected API endpoints.

This backend demonstrates real-world server-side development concepts including API security, middleware, authentication, validation and modular architecture.

---

## 🎯 Project Objectives

• Build a secure RESTful backend  
• Implement JWT authentication  
• Create Product & Order APIs  
• Connect backend with React frontend  
• Follow clean MVC architecture  
• Prepare API for deployment  

---

## 🧱 Technology Stack

| Technology | Usage |
|-----------|------|
| Node.js | Server runtime |
| Express.js | Backend framework |
| JWT | Authentication |
| dotenv | Environment variables |
| CORS | Cross-origin support |
| Postman | API testing |

---
## Home Page
<img width="1897" height="739" alt="image" src="https://github.com/user-attachments/assets/eab05946-5d8f-49ec-ad8f-4128a517d91b" />


## 🗂 Folder Structure

```text
backend/
│
├── server.js
├── package.json
├── .env
│
└── src/
├── routes/
│ ├── productRoutes.js
│ ├── authRoutes.js
│ └── orderRoutes.js
│
├── controllers/
│ ├── productController.js
│ ├── authController.js
│ └── orderController.js
│
└── middleware/
└── auth.js
---
```

## 🔐 Authentication APIs

| Method | Endpoint | Description |
|------|---------|-------------|
| POST | /api/auth/register | Register user |
| POST | /api/auth/login | Login user & return JWT |

---

## 📦 Product APIs

| Method | Endpoint | Description |
|------|---------|-------------|
| GET | /api/products | Fetch all products |
| POST | /api/products | Create product |
| PUT | /api/products/:id | Update product |
| DELETE | /api/products/:id | Delete product |

---

## 🧾 Order APIs

| Method | Endpoint | Description |
|------|---------|-------------|
| GET | /api/orders | View all orders |
| POST | /api/orders | Place new order |
