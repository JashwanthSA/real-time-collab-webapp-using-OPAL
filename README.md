# Real-Time Collaboration Project using OPAL

This project demonstrates a real-time collaboration application using React and OPAL (Open Policy Administration Layer). It includes dynamic policy management, a backend service, and integrates with OPAL for policy enforcement.

## Project Structure 📚

- `opal-server`: OPAL server setup using Docker Compose.
- `data-source-service`: Node.js service providing user data.
- `notification-service`: Node.js service handling notifications.
- `backend`: Node.js service interacting with OPAL to enforce policies.
- `real-time-collab`: React frontend for the application.

## Features ✨

- User Management: Add, edit, delete, and view users with different roles.
- Task Management: Create, update, delete, and view tasks.
- Real-Time Collaboration: Multiple users can interact with the tasks simultaneously.
- Dynamic Policy Management: Uses OPAL to enforce real-time policies based on user roles and permissions.
- Notification Service: Users get notifications for any changes in tasks.

## Prerequisites 🤖

- Docker
- Node.js
- npm

## Getting Started ☀️

1. Clone the repository
```bash
git clone https://github.com/JashwanthSA/real-time-collab-webapp-using-OPAL.git
```

2. Setup the opal server
- Navigate into the opal-server directory and download the docker compose configuration to run OPAL
```bash
curl -L https://raw.githubusercontent.com/permitio/opal/master/docker/docker-compose-example.yml > docker-compose.yml
docker-compose up
```
3. Setup the data source service
```bash
cd opal-server/data-source-service
npm install
node index.js
```
4. Setup the notification service
```bash
cd notification-service
npm install
node index.js
```
5. Setup the backend
```bash
cd backend
npm install @opal/client
node index.js
```
6. Setup the frontend
```bash
cd ../real-time-collab
npm install
npm start
```
7. Run and access the application!


