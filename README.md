# 🛒 A-PROJECT — E-Commerce Web App

A full-stack e-commerce web application with user authentication, built using **React** (frontend) and **Node.js/Express** (backend) with **MongoDB** as the database.

---

## 📁 Project Structure

```
A-PROJECT/
├── BackEnd/
│   ├── config/           # Database and environment configuration
│   ├── Controllers/      # Route handler logic
│   ├── middleware/       # Auth middleware (e.g., JWT verification)
│   ├── models/           # Mongoose schemas (User, Product, etc.)
│   ├── router/           # Express route definitions
│   ├── .env              # Environment variables (not committed to git)
│   ├── constants.js      # App-wide constants
│   ├── server.js         # Entry point — Express app setup
│   └── package.json
│
└── FrontEnd/project/
    ├── public/           # Static assets
    ├── src/
    │   ├── api/          # Axios/fetch API call functions
    │   ├── assets/       # Images and static files
    │   ├── Pages/
    │   │   ├── Dashboard.jsx   # Main dashboard (post-login)
    │   │   ├── Login.jsx       # Login page
    │   │   └── Signup.jsx      # Registration page
    │   ├── App.jsx       # Root component with routing
    │   ├── App.css
    │   ├── main.jsx      # React entry point
    │   └── index.css
    ├── index.html
    └── package.json
```

---

## ✨ Features

- **User Registration** — Sign up with name, email, and password
- **User Login** — Authenticate and receive a session/token
- **MongoDB Storage** — User data persisted in MongoDB Atlas or local instance
- **Protected Routes** — Dashboard accessible only after login
- **React Router** — Client-side navigation between Login, Signup, and Dashboard

---

## 🛠️ Tech Stack

| Layer      | Technology                        |
|------------|-----------------------------------|
| Frontend   | React (Vite), React Router, Axios |
| Backend    | Node.js, Express.js               |
| Database   | MongoDB, Mongoose                 |
| Auth       | JWT / bcrypt                      |
| Styling    | CSS (App.css, index.css)          |

---

## ⚙️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+
- [MongoDB](https://www.mongodb.com/) (local or Atlas URI)
- npm or yarn

---

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/a-project.git
cd a-project
```

---

### 2. Backend Setup

```bash
cd BackEnd
npm install
```

Create a `.env` file in the `BackEnd/` directory:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/a-project
JWT_SECRET=your_super_secret_key
```

Start the backend server:

```bash
node server.js
```

The API will run at `http://localhost:5000`.

---

### 3. Frontend Setup

```bash
cd FrontEnd/project
npm install
npm run dev
```

The React app will run at `http://localhost:5173`.

---

## 🔌 API Endpoints

| Method | Endpoint            | Description              |
|--------|---------------------|--------------------------|
| POST   | `/api/auth/signup`  | Register a new user      |
| POST   | `/api/auth/login`   | Login and receive token  |
| GET    | `/api/user/profile` | Get logged-in user info  |

---

## 🗃️ MongoDB User Schema (Example)

```js
const UserSchema = new mongoose.Schema({
  name:      { type: String, required: true },
  email:     { type: String, required: true, unique: true },
  password:  { type: String, required: true },  // hashed with bcrypt
}, { timestamps: true });
```

---

## 🔐 Authentication Flow

1. User fills in the **Signup** form → POST to `/api/auth/signup` → password hashed → saved to MongoDB
2. User fills in the **Login** form → POST to `/api/auth/login` → credentials verified → JWT issued
3. JWT stored in `localStorage` on the frontend
4. Protected routes check for valid JWT before rendering **Dashboard**

---

## 📌 Environment Variables

| Variable     | Description                        |
|--------------|------------------------------------|
| `PORT`       | Port for the Express server        |
| `MONGO_URI`  | MongoDB connection string          |
| `JWT_SECRET` | Secret key for signing JWT tokens  |

> ⚠️ Never commit your `.env` file. It is listed in `.gitignore`.

---

## 🚀 Future Improvements

- [ ] Product listing and search
- [ ] Shopping cart functionality
- [ ] Order management system
- [ ] Admin panel
- [ ] Payment gateway integration

---

## 📄 License

This project is for educational purposes.
