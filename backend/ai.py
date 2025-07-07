# models.py
from huggingface_hub import InferenceClient
import os
from dotenv import load_dotenv
load_dotenv()


class PlanGenerator:
    def __init__(self, data):
        self.data = data
        self.client = InferenceClient(
            provider = "nebius",
            api_key = os.getenv("API_KEY"),
        )

    def __str__(self):
        return {self.data}
        
    def generate_plan(self):
        input = f"""Create a weekly workout plan for someone with the following biodata and goals:
        {self.data.age} year old {self.data.sex}, workout level is {self.data.experience}, target workout frequency is {self.data.frequency} with a focus on {self.data.focus}
        """
        if self.data.mode == "imperial":
            inputTwo = f", persons weight is {self.data.lbs} pounds and height is {self.data.feet} feet {self.data.inches} inches"
            input += inputTwo
        else:
            inputTwo = f", persons weight is {self.data.kgs} kgs and height is {self.data.meters} meters"
            input += inputTwo
        completion = self.client.chat.completions.create(
            model="deepseek-ai/DeepSeek-R1",
            messages=[{
                    "role": "user",
                    "content": input
            }],
        )
        self.data = completion.choices[0].message
