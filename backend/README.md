# Inventory Management System Backend

## Setup

1. Copy `.env.example` to `.env` and update with your MongoDB URI
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`

## API Endpoints

- POST `/products` - Create a new product
- GET `/products` - Get all products
- PUT `/products/:id` - Update a product
- DELETE `/products/:id` - Delete a product
- GET `/products/low-stock` - Get products with low stock

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose