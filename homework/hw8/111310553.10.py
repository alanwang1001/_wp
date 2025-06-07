def summary(data):
    for student in data:
        name = student.get("name", "Unknown")
        scores = [score for key, score in student.items() if key != "name"]
        total = sum(scores)
        average = round(total / len(scores), 1) if scores else 0
        print(f"{name} - 總分: {total}, 平均: {average}")



data = [
    {"name": "Alice", "math": 90, "english": 85, "science": 88},
    {"name": "Bob", "math": 75, "english": 80, "science": 70},
]

summary(data)
