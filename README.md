# 🎫 Ticket Management System (Backend API)

A RESTful API for managing support tickets using **Node.js**, **Express**, and **MongoDB**.  
It includes **JWT-based authentication** and **Role-Based Access Control (RBAC)** for users and agents.

---

## 🚀 Features

- User registration & login (with JWT auth)
- Role-based access (`user` vs `agent`)
- Users can create and manage their own tickets
- Agents can view and manage all tickets
- Full CRUD operations on tickets
- Secure password hashing with `bcryptjs`

---

## 🧰 Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Authentication:** JWT, bcryptjs
- **Others:** dotenv, cors

---

## 🔐 Roles & Permissions

| Role   | Access Description                         |
|--------|---------------------------------------------|
| User   | Can manage only their own tickets           |
| Agent  | Can view and manage all users' tickets      |

---

## 🔗 API Endpoints

### ✅ Authentication

| Method | Endpoint         | Description               |
|--------|------------------|---------------------------|
| POST   | `/auth/register` | Register new user/agent   |
| POST   | `/auth/login`    | Login & receive JWT token |

### 🎫 Ticket Management

| Method | Endpoint             | Description                       | Auth Required | Role      |
|--------|----------------------|-----------------------------------|---------------|-----------|
| POST   | `/tickets`           | Create a new ticket               | Yes            | user      |
| GET    | `/tickets`           | Get all tickets                   | Yes            | agent     |
| GET    | `/tickets/my`        | Get logged-in user's tickets      | Yes            | user      |
| GET    | `/tickets/:id`       | Get ticket by ID                  | Yes            | owner/agent |
| PUT    | `/tickets/:id`       | Update a ticket                   | Yes            | owner/agent |
| DELETE | `/tickets/:id`       | Delete a ticket                   | Yes            | owner/agent |

---

## ⚙️ Setup Instructions

```bash
# 1. Clone the repo
git clone https://github.com/sujal-khatke/Ticket-Management-System.git
cd ticket-management-system

# 2. Install dependencies
npm install

# 3. Run Command
npm run dev

# API documentation 🔗 
https://documenter.getpostman.com/view/38645507/2sB2cd6Jf9



