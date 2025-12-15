# Online Exam Monitoring System

## Overview

This project implements a **full-stack platform for creating, delivering, and proctoring online examinations**. It provides separate interfaces for administrators (teachers) and candidates (students), backed by REST APIs and **AI-powered monitoring**.

Administrators can:
- Register for a subject
- Create exams with multiple-choice questions
- View candidate scores
- Audit exam and cheating logs

Candidates can:
- Register with a photo
- Sign in securely
- Join assigned exams
- Answer questions while a **live webcam stream is analysed** to detect cheating

The system records suspicious behaviour (e.g., looking away, mobile phone usage) and stores it in a database for later review.

---

## System Architecture

```
Admin Frontend (React + Vite)
        |
        v
Admin Backend (Node.js + Express)
        |
     MongoDB Atlas
        |
Candidate Backend (Python + Flask)
        |
Candidate Frontend (React + Vite)
        |
AI Proctoring (YOLOv5 + Face Recognition + Head Pose)
```

---

## Technology Stack

| Domain     | Frontend               | Backend              | Key Libraries & Tools |
|------------|------------------------|----------------------|----------------------|
| Admin      | React 18 + Vite (JS)    | Node.js + Express    | Express, Mongoose, JWT, bcrypt, dotenv |
| Candidate  | React + Vite (JS)       | Python 3.9 + Flask   | Flask, Flask-JWT-Extended, Flask-CORS |
| Database   | —                      | MongoDB Atlas        | Mongoose, PyMongo |

---

## AI & Proctoring Models

- **YOLOv5s (Ultralytics)**  
  Detects mobile phones and multiple people in webcam frames.

- **MediaPipe FaceMesh**  
  Estimates head pose and flags left/right head movement beyond ±10°.

- **Face Recognition (dlib-based)**  
  Verifies that the registered candidate is the one present during the exam.

All cheating events are logged with timestamps and usernames.

---

## Features

### Administrator Features
- Secure registration and login (JWT + bcrypt)
- Subject-wise exam creation
- Dynamic MCQ management
- Dashboard for exams, scores, and logs
- Cheating log review

### Candidate Features
- Registration with face image
- Secure login
- Live exam interface
- AI-based webcam monitoring
- Automatic cheating detection
- Answer submission and scoring

---

## Project Structure

```
Online-Exam-Monitoring-System/
├── admin/
│   ├── backend/
│   │   ├── models/
│   │   │   └── Admin.js
│   │   ├── routes/
│   │   │   ├── auth.js
│   │   │   ├── exams.js
│   │   │   └── scores.js
│   │   └── server.js
│   └── frontend/
│       ├── src/
│       │   ├── components/
│       │   └── context/
│       └── package.json
├── user/
│   ├── backend/
│   │   ├── app.py
│   │   ├── onlineproctor.py
│   │   └── requirements.txt
│   └── frontend/
│       └── package.json
└── README.md
```

---

## Prerequisites

- Node.js (v18+)
- Python 3.9
- MongoDB Atlas or Local MongoDB
- Visual Studio Community 2022 (Desktop Development with C++)
- Webcam

---

## Setup & Installation

### Clone Repository
```bash
git clone https://github.com/chauhanavi21/Online-Exam-Monitoring-System.git
cd Online-Exam-Monitoring-System
```

### Admin Frontend
```bash
cd admin/frontend
npm install
npm run dev
```

### Admin Backend
```bash
cd admin/backend
npm install
npm run dev
```

Runs on: http://localhost:5001

### Candidate Frontend
```bash
cd user/frontend
npm install
npm run dev
```

### Candidate Backend (AI Proctoring)
```bash
cd user/backend
python -m venv Exam
# Windows
.\Exam\Scripts\Activate.ps1
# macOS / Linux
source Exam/bin/activate

pip install --upgrade pip
pip install cmake
pip install -r requirements.txt
python -m flask run
```

---

## Running the Application

You need **four terminals**:

### Admin
```bash
cd admin/backend
npm run dev
```

```bash
cd admin/frontend
npm run dev
```

### Candidate
```bash
cd user/backend
python -m flask run
```

```bash
cd user/frontend
npm run dev
```

---

## Notes

- All data is stored in MongoDB
- Admin backend uses Mongoose
- Candidate backend uses PyMongo
- HTTPS and environment variables are recommended for production

---

## Author

**Avi Chauhan**  
GitHub: https://github.com/chauhanavi21

