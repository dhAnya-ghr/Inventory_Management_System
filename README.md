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

## 📸 Screenshots
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/5b2b839f-21ed-4848-ad54-fa64a1cba864" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/c678b7ca-180c-44f5-9b29-21b24195ed48" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/b206b52b-715f-409d-984f-d7f34ab6f88e" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/aac87021-2ebc-44ed-ae27-03d07fc8f441" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/fe7509de-5c5c-42d3-b938-0a3daaee4227" />

## 🔮 Future Enhancements

- User Authentication
- Product Images
- Dashboard Analytics
- Export Inventory Reports
- Pagination
- Dark Mode

---

## 👩‍💻 Author

**Dhanyashree H**

Demo video link : https://drive.google.com/file/d/18e9zPXjKQSucbeNRm1_c8aNxTIRUKiOK/view?usp=sharing
GitHub: https://github.com/dhAnya-ghr


