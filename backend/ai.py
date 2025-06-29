# models.py


class PlanGenerator:
    def __init__(self, data):
        self.data = data

    def __str__(self):
        return f"data: {self.data}"
        
    def generate_plan(self):
        input = f"{self.data.age} year old {self.data.sex}, workout level is {self.data.experience}, target workout frequency is {self.data.frequency} with a focus on {self.data.focus}"
        if self.data.mode == "imperial":
            inputTwo = f", persons weight is {self.data.lbs} pounds and height is {self.data.feet} feet {self.data.inches} inches"
            input += inputTwo
        else:
            inputTwo = f", persons weight is {self.data.kgs} kgs and height is {self.data.meters} meters"
            input += inputTwo
        print(input)
