def dict_to_string(d):
    return ', '.join(f"{key}:{d[key]}" for key in sorted(d))

d = {'a': 1, 'b': 2, 'c': 3}
print(dict_to_string(d))  # 輸出：a:1, b:2, c:3
