from fastapi import APIRouter
from schemas import WorkoutInput

router = APIRouter()

@router.post("/submit")
async def submit_workout(data: WorkoutInput):
    print("Workout Data Received:", data.dict())
    return {
        "message": "Workout data received.",
        "data": data.dict()
    }