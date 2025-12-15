Perfect — you want **this exact content converted into a clean, GitHub-ready `README.md` with proper Markdown formatting and real code blocks** so it renders correctly on GitHub.

Below is your **fully formatted README**.
You can **copy-paste this directly into `README.md`** and GitHub will render it perfectly.

---

```md
# Online Exam Monitoring System

## Overview

This project implements a **full-stack platform for creating, delivering, and proctoring online examinations**. It provides separate interfaces for administrators (teachers) and candidates (students), backed by a REST API and **AI-powered monitoring**.

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

### Application Domains

| Domain      | Frontend                 | Backend                     | Key Libraries & Tools |
|------------|--------------------------|-----------------------------|----------------------|
| Admin      | React 18 + Vite (JS)      | Node.js + Express           | Express, Mongoose, JWT, bcrypt, dotenv |
| Candidate  | React + Vite (JS)         | Python 3.9 + Flask          | Flask, Flask-JWT-Extended, Flask-CORS |
| Database   | —                        | MongoDB Atlas               | Mongoose (Node), PyMongo (Python) |

---

## AI & Proctoring Models

- **YOLOv5s (Ultralytics)**  
  Detects mobile phones and multiple people in webcam frames.

- **MediaPipe FaceMesh**  
  Estimates head pose and flags left/right head movement beyond ±10°.

- **Face Recognition (dlib-based)**  
  Verifies that the registered candidate is the one present during the exam.

Cheating events are logged with timestamps and usernames in the `cheating_logs` collection.

---

## Features

## Administrator Features

### Registration & Authentication
- Admins register with username, password, and subject
- Passwords hashed using **bcrypt**
- Permanent JWT issued on registration and login

### Exam Creation
- Create exams with title, date, subject
- Dynamic MCQ creation with variable options
- Validation ensures correct answers match options
- Exams stored in MongoDB under admin records

### Dashboard
- View created exams
- View question logs
- View cheating logs
- View candidate scores

### Scores & Logs
- Fetch scores by subject:
```

GET /api/scores/subject/:subject

```
- Fetch cheating logs:
```

GET /api/scores/cheating-logs

```

### Security
- JWT-protected routes
- CORS enabled
- Environment-based configuration

---

## Candidate Features

### Registration with Face Image
- Candidate uploads profile photo
- Face encoding generated and stored
- Image saved in `face_images/`

### Secure Sign-In
- Password verified using bcrypt
- JWT returned on successful login
- Username stored in Flask session

### Live Exam with AI Monitoring

Each webcam frame undergoes:

#### Face Verification
- Confirms logged-in user remains present

#### Head Pose Estimation
- Warns if user looks left/right beyond threshold

#### Object Detection
- Detects mobile phones
- Detects multiple people
- Automatically logs cheating events

Snapshots and logs are saved when violations occur.

### Answer Submission
- Answers submitted via:
```

POST /api/submit_answers

```
- Stored in MongoDB submissions collection
- Score calculated and saved

### Real-Time Feedback
- Live warnings shown on UI
- Encourages compliance during exam

---

## Project Structure

```

Online-Exam-Monitoring-System/
├── admin
│   ├── backend
│   │   ├── models
│   │   ├── routes
│   │   └── server.js
│   └── frontend
│       ├── src/components
│       ├── src/context
│       └── package.json
├── user
│   ├── backend
│   │   ├── app.py
│   │   ├── onlineproctor.py
│   │   └── requirements.txt
│   └── frontend
│       └── package.json
└── README.md

````

---

## Prerequisites

- **Node.js (v18+)**
- **Python 3.9**
- **MongoDB Atlas or Local MongoDB**
- **Visual Studio Community 2022**
  - Desktop Development with C++
  - MSVC & Windows 10 SDK
- **Webcam**

---

## Setup & Installation

### Clone Repository

```bash
git clone https://github.com/your-username/Online-Exam-Monitoring-System.git
cd Online-Exam-Monitoring-System
````

---

### Admin Frontend

```bash
cd admin/frontend
npm install
npm run dev
```

---

### Admin Backend

```bash
cd admin/backend
npm install
npm run dev
```

Runs on:

```
http://localhost:5001
```

---

### Candidate Frontend

```bash
cd user/frontend
npm install
npm run dev
```

---

### Candidate Backend (AI Proctoring)

```bash
cd user/backend
python -m venv Exam
```

Activate virtual environment:

**Windows (PowerShell):**

```bash
.\Exam\Scripts\Activate.ps1
```

**macOS / Linux:**

```bash
source Exam/bin/activate
```

Install dependencies:

```bash
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

## Usage Notes

* All data stored in **MongoDB**
* Admin uses **Mongoose**
* Candidate backend uses **PyMongo**
* Use HTTPS and environment variables in production
* Camera access is mandatory for candidates

---

## Extensibility

* Eye-gaze tracking
* Audio analysis
* Screen capture detection
* Advanced behaviour analytics
* Additional exam types

---

## Contributing

Pull requests are welcome.
Please open an issue first to discuss major changes.

---

## License

No license is currently specified.
Add an open-source license (e.g., MIT) before public distribution.

---

**Author:** Avi Chauhan

