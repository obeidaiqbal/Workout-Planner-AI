# models.py


class PlanGenerator:
    def __init__(self, data):
        self.data = data

    def __str__(self):
        return f"data: {self.data}"
        
    def generate_plan(self):
        print(f"{self.data.age}")
