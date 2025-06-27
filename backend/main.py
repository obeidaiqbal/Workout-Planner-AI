from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes import router as workout_router

app = FastAPI()

# CORS setup
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register routes
app.include_router(workout_router)