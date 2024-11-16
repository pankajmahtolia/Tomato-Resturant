
# 🍅 Tomato Restaurant - Food Ordering Website  
A modern and dynamic food ordering platform that redefines convenience, built with the **MERN Stack**.

## 🌟 Demo  
- **User Panel**: [Visit Here](https://tomato-resturant.onrender.com/)  

## 🚀 Key Features  
- **User-Friendly Interfaces**: A sleek and intuitive platform for seamless navigation.  
- **Comprehensive User Panel**: Browse, filter, and order from a range of delicious meals.  
- **Powerful Admin Panel**: Manage products, orders, and user roles effortlessly.  
- **Secure Authentication**: JWT Authentication and bcrypt-secured passwords.  
- **Stripe Payment Integration**: Reliable and secure payment gateway.  
- **Real-Time Operations**: Add to cart, place orders, and manage accounts in real time.  
- **Alerts & Notifications**: Dynamic, visually appealing alerts for every action.  
- **Role-Based Access Control**: Separate privileges for users and admins.  
- **RESTful APIs**: Authenticated and efficient APIs for all operations.  

---

## 🖼️ Screenshots  
Take a look at some of our stunning UI highlights:

### Hero Section  
![Hero](https://i.ibb.co/59cwY75/food-hero.png)  

### Products Section  
![Products](https://i.ibb.co/JnNQPyQ/food-products.png)  

### Cart Page  
![Cart](https://i.ibb.co/t2LrQ8p/food-cart.png)  

### Login Popup  
![Login](https://i.ibb.co/s6PgwkZ/food-login.png)  

---

## 💻 Run Locally  

### Clone the repository:  
```bash
git clone https://github.com/pankajmahtolia/Tomato-Resturant
```

### Install dependencies for each module:  

#### Frontend:  
```bash
cd frontend  
npm install  
```

#### Admin:  
```bash
cd admin  
npm install  
```

#### Backend:  
```bash
cd backend  
npm install  
```

### Setup Environment Variables:  
Create a `.env` file in the `backend` folder with the following:  
```plaintext
JWT_SECRET = YOUR_SECRET_TEXT  
SALT = YOUR_SALT_VALUE  
MONGO_URL = YOUR_DATABASE_URL  
STRIPE_SECRET_KEY = YOUR_STRIPE_SECRET_KEY  
```

### Configure URLs:  
Update API and frontend URLs in the following files:  
- **Admin**: `App.jsx`  
- **Frontend**: `StoreContext.js`  
- **Backend**: `orderController.js`  

### Start the Servers:  

#### Backend:  
```bash
nodemon server.js  
```

#### Frontend:  
```bash
npm start  
```

#### Admin:  
```bash
npm start  
```

---

## 🛠️ Tech Stack  

| **Technology**        | **Purpose**                                       |  
|------------------------|---------------------------------------------------|  
| **React**             | Frontend framework                                |  
| **Node.js**           | Backend runtime                                   |  
| **Express.js**        | Backend web framework                             |  
| **MongoDB**           | NoSQL database                                   |  
| **Stripe API**        | Payment gateway integration                       |  
| **JWT**               | Authentication                                   |  
| **Multer**            | File upload handler                              |  

---

## 🌐 Deployment  
The project is deployed on **Render** for fast and reliable hosting.  

---

## 🤝 Contributing  
We welcome all contributions to enhance the platform! Feel free to fork this repository and create a pull request.  

---

## 📢 Feedback  
We’d love to hear your feedback!  
Reach out via [LinkedIn](https://www.linkedin.com/in/mahtoliapankaj/).  
