def grade(score):
    if score < 0 or score > 100:
        return "Invalid score"
    if score >= 90:
        return "A"
    elif score >= 80:
        return "B"
    elif score >= 70:
        return "C"
    elif score >= 60:
        return "D"
    else:
        return "F"

print(grade(95))  # 輸出：A
print(grade(73))  # 輸出：C
print(grade(58))  # 輸出：F
print(grade(110)) # 輸出：Invalid score
