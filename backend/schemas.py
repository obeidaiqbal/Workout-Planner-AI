from pydantic import BaseModel
from typing import Optional

class WorkoutInput(BaseModel):
    age: int
    sex: str
    experience: str
    frequency: str
    focus: str
    mode: str
    meters: str
    feet: str
    inches: str
    kgs: str
    lbs: str