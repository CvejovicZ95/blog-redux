# Blog

## Project Overview

This project is a classic blog application where users can create, edit, delete, and react to blog posts. Although it is a small project, it serves as a demonstration of Redux basics, with a specific focus on its application in state management. The application allows for easy management of posts and interaction with content, making it ideal for understanding and applying Redux concepts in real-time.

## Features

- **Post Management:**

  - Create Blog: Users can create blogs with title, content, and author.
  - Edit Blogs: Users can modify or remove blogs.
  - Reactions: Users can react to blog posts, expressing their opinions and feedback.

## Technologies Used

- JavaScript
- React.js
- Redux
- Node.js
- Express.js
- MongoDB
- CSS (inspired by ChatGPT)

## Prerequisites / Dependencies

- Node v20.11.1
- npm 10.2.0
- MongoDB: You need a running instance of MongoDB.

## Installation and Setup

- git clone <https://github.com/CvejovicZ95/blog-redux.git>
- Install dependencies for both client and server:
- cd server && npm install
- cd client && npm install

## Environment Variables (Server Folder)

- Make sure to create a .env file with the following variables:

- `DATABASE_URL`: MongoDB connection string  
- `PORT`: Port (e.g., 4500)

## Environment Variables (Client Folder)

- `REACT_APP_API_BASE_URL`: Base URL for API requests

- **Server**:
  - `nodemon server`
- **Client:**
  - `npm start`
