## Workout-Planner-AI Project

### Overview

- A full-stack application that generates a custom 3-month workout plan using user input. Built with **React** (frontend) and **FastAPI** (backend)

---

### Structure

`backend/`:
- **FastAPI** app with a `POST /submit` endpoint that accepts workout data
- Configured with **CORS middleware** to allow requests from `http://localhost:3000`
- Integrated **Hugging Face Transformers** API with the `deepseek-ai/DeepSeek-R1` model to generate tailored workout plans

`frontend/`:
- React application built with `create-react-app`
- Displays a form to collect user data (e.g., goals, experience, measurements)
- Sends the collected data as JSON to the FastAPI backend using `fetch`
- Route API requests to the backend thorugh a local host proxy:
  ```json
  "http://localhost:8000"
  ```

---

### Requirements

- Node.js and npm: https://nodejs.org/en
- Python 3.x: https://www.python.org/downloads/

---

### First Time Setup

1. At the command line run the line below to clone the repository
```bash
git clone https://github.com/obeidaiqbal/Workout-Planner-AI.git
```
2. To setup the frontend run the following code to install react dependencies, make sure node.js and npm are installed
```bash
cd frontend
npm install
```
3. To setup the backend virtual enviornment go return to the root folder and run the following code
```bash
cd backend
python3 -m venv venv
source venv/bin/activate         
pip install -r requirements.txt
```

---

### Running the Program

#### Running the Frontend

```bash
cd frontend
npm start
```

#### Running the Backend

```bash
cd backend
source venv/bin/activate
python3 main.py
```

---