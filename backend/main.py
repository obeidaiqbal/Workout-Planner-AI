from fastapi import FastAPI, APIRouter
from fastapi.middleware.cors import CORSMiddleware
from schemas import WorkoutInput
from ai import PlanGenerator

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/submit")
async def submit_workout(data: WorkoutInput):
    print(f"Workout Data Received: ({data})")
    plan = PlanGenerator(data)
    print(f"Workout Plan Generated: ({plan})")