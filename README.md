# 📦 Inventory Management System

A full-stack Inventory Management System built using the MERN stack that enables users to efficiently manage inventory through a modern and responsive web interface. The application provides complete CRUD functionality, allowing users to add, update, delete, search, and filter products while maintaining accurate inventory records in a MongoDB database.

The system also includes low-stock monitoring, category-based filtering, and real-time inventory updates, making it suitable for small businesses, retail stores, and warehouse management.

---

## ✨ Key Features

- ✅ Add new products to the inventory
- ✅ Update existing product details
- ✅ Delete products with confirmation
- ✅ Search products by product name
- ✅ Filter products by category
- ✅ View products with low stock
- ✅ Automatic low-stock status indicator
- ✅ Responsive dashboard built with React and Tailwind CSS
- ✅ RESTful API integration using Express.js
- ✅ MongoDB database for persistent storage
- ✅ Toast notifications for successful operations

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Tailwind CSS
- Axios
- React Icons
- React Toastify
- Vite

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS
- dotenv

---

## 📁 Project Structure

```text
Inventory_Management_System/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.jsx
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation & Setup

### Clone the repository

```bash
git clone https://github.com/dhAnya-ghr/Inventory_Management_System.git
cd Inventory_Management_System
```

### Backend

```bash
cd backend
npm install
```

Create a `.env` file.

```env
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

Start the backend server.

```bash
npm start
```

Backend URL:

```
http://localhost:5000
```

### Frontend

Open another terminal.

```bash
cd frontend
npm install
npm run dev
```

Frontend URL:

```
http://localhost:5173
```

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/products` | Get all products |
| POST | `/products` | Add a product |
| PUT | `/products/:id` | Update a product |
| DELETE | `/products/:id` | Delete a product |
| GET | `/products/low-stock` | Get low-stock products |

---

## 🔮 Future Enhancements

- User Authentication
- Product Images
- Dashboard Analytics
- Export Inventory Reports
- Pagination
- Dark Mode

---

## 👩‍💻 Author

**Dhanya H**

GitHub: https://github.com/dhAnya-ghr
