from fastapi import FastAPI, APIRouter
from fastapi.middleware.cors import CORSMiddleware
from schemas import WorkoutInput
from ai import PlanGenerator
import uvicorn

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/submit")
async def submit_workout(data: WorkoutInput):
    plan = PlanGenerator(data)
    plan.generate_plan()

if __name__ == "__main__":
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)