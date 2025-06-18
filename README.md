# 🧩 Fullstack Form Submission App (Node.js + Flask + Docker)

This is a simple full-stack web application using **Node.js (Express)** for the frontend and **Flask** for the backend. The frontend form collects user input and submits it to the backend API. Both services are containerized and connected using **Docker Compose**.

---

## 📁 Folder Structure

flaskp/
├── backend/ # Flask backend
│ ├── app.py
│ ├── requirements.txt
│ └── Dockerfile
│
├── frontend/ # Node.js frontend
│ ├── app.js
│ ├── package.json
│ └── Dockerfile
│
├── docker-compose.yml # Connects both services
├── .gitignore
└── README.md

---

## 🚀 Technologies Used

- Node.js + Express (Frontend)
- Python + Flask (Backend)
- Docker & Docker Compose
- Axios (for API request)
- Git + GitHub
- Docker Hub

---

## 🧪 How It Works

1. **Frontend** displays a form to the user.
2. On form submission, data is sent to the **Flask backend** using Axios.
3. Backend prints/returns the submitted data.
4. Both frontend and backend are run as Docker containers on the same network.

---

## 🛠️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Toto3107/flaskp.git
cd flaskp

Build and Run with Docker Compose
docker-compose up --build

Frontend: http://localhost:3000
Backend: http://localhost:5000
