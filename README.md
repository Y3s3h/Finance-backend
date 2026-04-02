# Finance Dashboard Backend


Live API: https://finance-backend.onrender.com

“The backend is designed with separation of concerns and scalable architecture in mind.”


## Overview

This project is a backend system for a finance dashboard application. It provides APIs to manage users, financial records, and summary analytics while enforcing role-based access control.

The system is designed to demonstrate backend architecture, clean API design, and handling of real-world scenarios such as authentication, authorization, and data aggregation.

---

## Features

- User authentication using JWT
- Role-based access control (Viewer, Analyst, Admin)
- Financial record management (CRUD operations)
- Filtering records by type, category, and date
- Dashboard analytics (income, expense, balance, breakdowns)
- Secure password storage using hashing
- Rate limiting to prevent API abuse
- Request logging for monitoring
- Security headers for safer API usage

---

## Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)
- JSON Web Tokens (JWT)
- bcryptjs
- Morgan (logging)
- Helmet (security)
- express-rate-limit

---

## Project Structure

```
finance-backend/
│
├── config/
├── models/
├── controllers/
├── routes/
├── middleware/
├── app.js
├── server.js
├── .env
└── README.md
```

---

## Setup Instructions

1. Clone the repository

```
git clone <your-repo-link>
cd finance-backend
```

2. Install dependencies

```
npm install
```

3. Create a `.env` file in the root directory and add:

```
PORT=8080
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

4. Run the server

```
npm run dev
```

Server will start on:

```
http://localhost:8080
```

---

## API Endpoints

### Authentication

- POST `/api/auth/register`
- POST `/api/auth/login`

### Financial Records

- POST `/api/records` (Admin only)
- GET `/api/records` (All roles)
- PUT `/api/records/:id` (Admin only)
- DELETE `/api/records/:id` (Admin only)

### Dashboard

- GET `/api/dashboard/summary` (Analyst, Admin)
- GET `/api/dashboard/categories` (Analyst, Admin)
- GET `/api/dashboard/recent` (Analyst, Admin)

---

## Role-Based Access Control

- **Viewer**
  - Can view records only

- **Analyst**
  - Can view records
  - Can access dashboard analytics

- **Admin**
  - Full access
  - Can manage records and users

---

## Assumptions

- Each record is associated with the authenticated user
- Basic validation is implemented for required fields
- MongoDB is used as the primary database
- Authentication is token-based (JWT)

---

## Error Handling

- Proper HTTP status codes are used
- Standard error response format:

```
{
  "success": false,
  "message": "Error description"
}
```

---

## Additional Enhancements

- Rate limiting applied to prevent excessive requests
- Request logging using Morgan
- Security headers using Helmet
- Pagination support for record listing (if implemented)

---

## Future Improvements

- Unit and integration testing
- Refresh token mechanism
- Advanced analytics (monthly trends, charts)
- API documentation using Swagger

---

## Conclusion

This project focuses on building a clean, maintainable backend system with proper separation of concerns, secure authentication, and role-based access control. It demonstrates how backend services can be structured to support real-world applications such as financial dashboards.

---
