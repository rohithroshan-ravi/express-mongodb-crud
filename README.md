# 🧩 Express + MongoDB CRUD API

A simple and clean CRUD (Create, Read, Update, Delete) API built using **Express.js** and **MongoDB (Mongoose)**.

---

## 🚀 Features

- Create new users  
- Read all users or a single user by ID  
- Update user details  
- Delete a user  
- Uses `.env` for configuration  
- Handles async/await cleanly with proper error responses  

---

## 🧠 Tech Stack

- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [Nodemon](https://www.npmjs.com/package/nodemon) (for development)

---

## ⚙️ Installation

1. **Clone the repo**
   ```bash
   git clone https://github.com/your-username/express-mongodb-crud.git
   cd express-mongodb-crud



Install dependencies

npm install


Create a .env file

DATABASE_URL="mongodb+srv://<username>:<password>@<cluster-name>.mongodb.net/<database-name>?retryWrites=true&w=majority"


Start the server

npm run dev


(or if using plain Node)

node index.js


Server Running

Server Started at 3000
Database Connected

📡 API Endpoints
Method	Endpoint	Description
POST	/api/v1/post	Create a new user
GET	/api/v1/get-all	Get all users
PATCH	/api/v1/update-user/:id	Update user by ID
DELETE	/api/v1/delete/:id	Delete user by ID
📦 Example Payload (POST /api/v1/post)
{
  "name": "Cho2",
  "age": 25
}

🧾 Example Response
{
  "_id": "6723d12c0f4eab12bc7f2a4d",
  "name": "Cho2",
  "age": 25,
  "__v": 0
}

express-mongodb-crud/
│
├── .env
├── package.json
├── index.js
│
├── model/
│   └── model.js            # Mongoose schema/model
│
├── routes/
│   └── routes.js           # Express route definitions
│
└── handler/
    └── handler.js      # Controller logic for CRUD operations


🤝 Contributing

Pull requests are welcome!
For major changes, please open an issue first to discuss what you’d like to change.
