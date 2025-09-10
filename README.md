
# Strider Luxe – Limited Edition Sneaker Store 🏁👟

**Strider Luxe** is a full-stack web application designed for selling exclusive, limited-edition sneakers. It offers seamless user experience across frontend and backend, complete with user authentication, product browsing, smart search, cart management, and order processing.

---

## ✨ Features

### 👥 User Authentication
- Signup, login, and logout
- Password reset functionality
- Session management using `sessionStorage`

### 🛍 Product & Search
- Browse limited-edition sneakers from brands like **Nike, Adidas, Jordan, Yeezy**
- Filter by brand/category
- Smart search by product name
- View detailed product information and sizes (EUR, UK, US, CM)

### 🛒 Cart & Checkout
- Add to cart, remove items, update quantity
- Size selection per product
- Real-time total calculation
- Checkout with 3 payment options:
  - Credit Card
  - PayPal
  - Net Banking

### 📦 Orders
- View previous orders
- Complete new orders
- Order history for each logged-in user

### 📱 Responsive UI
- Fully responsive and mobile-friendly
- Dynamic category filtering and search
- Attractive landing and informational pages:
  - Home
  - About Us
  - Contact Us

---

## 🛠 Tech Stack

### Frontend
- React.js
- React Router DOM
- Bootstrap + Custom CSS
- Axios

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- bcrypt.js for password hashing

---

## 📁 Folder Structure

```
strider-luxe/
├── strider_backend/        # Express API
│   ├── index.js
│   ├── controllers/
│   ├── models/
│   └── ...
├── strider_frontend/       # React Frontend
│   ├── App.js
│   ├── components/
│   ├── pages/
│   ├── styles/
│   └── ...
```

---

## 🔑 Sample Credentials

```
Email:    sarperuzun1@gmail.com
Password: 123456
```

Password is hashed using `bcrypt`.

---

## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/yourusername/strider-luxe.git
cd strider-luxe
```

### 2. Backend Setup

```bash
cd strider_backend
npm install
node index.js
```

- Make sure you have a MongoDB instance running
- Update connection URL if needed in `index.js`

### 3. Frontend Setup

```bash
cd strider_frontend
npm install
npm start
```

---

## 👨‍💻 Author

**Umut Sarper Uzun**  
Made with ❤️ for sneaker enthusiasts.

---

## 📄 License

MIT License – Free to use, customize, and build upon.




# Sneaker_Website
