# Task Management System

## Overview
The **Task Management System** is a full-stack web application built using the **MERN (MongoDB, Express.js, React.js, and Node.js) stack**. This system allows users to create, manage, and track tasks efficiently. It provides authentication, authorization, and CRUD functionalities for task management.

## Features
- User Authentication (Login/Register)
- Role-based access control (Admin/User)
- Task creation, updating, deletion, and assignment
- Task status management (Pending, In Progress, Completed)
- Real-time updates
- User-friendly dashboard

## Technologies Used
### Frontend:
- React.js
- Axios (for API management)
- React Router (for navigation)
- React Bootstrap CSS (for styling)

### Backend:
- Node.js
- Express.js
- MongoDB (with Mongoose ORM)
- JSON Web Token (JWT) for authentication
- bcrypt for password hashing

### Deployment:
- Frontend: Vercel / Netlify
- Backend: Render / Heroku
- Database: MongoDB Atlas

## Installation
### Prerequisites:
Ensure you have the following installed on your system:
- Node.js
- MongoDB
- Git

### Steps:
#### 1. Clone the repository:
```sh
git clone https://github.com/yourusername/task-management-system.git
cd task-management-system
```

#### 2. Install dependencies:
##### Backend:
```sh
cd server
npm install
```
##### Frontend:
```sh
cd client
npm install
```

#### 3. Configure environment variables:
Create a `.env` file in the `backend` directory and add:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

#### 4. Run the application:
##### Start the backend server:
```sh
cd backend
npm start
```
##### Start the frontend server:
```sh
cd frontend
npm start
```

The application will be available at `http://localhost:8000`.

## API Endpoints
| Method | Endpoint           | Description          |
|--------|-------------------|----------------------|
| POST   | /api/auth/register | Register a user     |
| POST   | /api/auth/login    | User login          |
| GET    | /api/tasks         | Fetch all tasks     |
| POST   | /api/tasks         | Create a new task   |
| PUT    | /api/tasks/:id     | Update a task       |
| DELETE | /api/tasks/:id     | Delete a task       |

## Folder Structure
```
/task-management-system
│── frontend/          # React.js frontend
│── backend/           # Express.js backend
│── README.md          # Project documentation
```

## Future Enhancements
- Implement notifications for task updates
- Add drag-and-drop feature for task organization
- Integration with third-party services (e.g., Google Calendar)

## Contributing
Contributions are welcome! Feel free to submit a pull request.

## License
This project is licensed under the MIT License.

