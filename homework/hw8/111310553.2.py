def average(nums):
    if not nums:
        return None  
    avg = sum(nums) / len(nums)
    return round(avg, 1)

print(average([10, 20, 30]))  
print(average([3, 5, 7]))  
