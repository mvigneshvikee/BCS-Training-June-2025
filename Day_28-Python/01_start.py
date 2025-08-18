print("hello")
a = 38
b = 34
c = a + b
d = [34, 1, 54, 98]
# print(d[1])
# print(c)


# name = input("Tell me Your name: ")
# year = input("Tell me Your Birth year: ")
# age = 2025 - int(year)
# print(age)
# print(f"Hi, {name} you are {age} years old.")
# print("Hi," + name + " you are " + str(age) + "years old.")

# fahrenheit = input("Please provide your Fahrenheit: ")
# celcious = (float(fahrenheit) - 32) * 5 / 9
# print(f"The {fahrenheit}°F is {celcious}°C ")4.2

# Task 2.1

# radius = float(input("Provide the radius of the circle: "))
# area = radius**2 * 3.14
# print(area)

# Task 2.2

# border = int(input("Enter a Border value: "))
# borderlen = border // 10
# loader = "=" * borderlen
# space = " " * (10 - borderlen)
# print(f"Output: [{loader}{space}] {border}%")

fav_movie = "John Wick"
print(fav_movie[-4], fav_movie[-3], fav_movie[-2], fav_movie[-1])
# Sllice Operator ( : )
print(fav_movie[5:9])
print(fav_movie[-4:])
print(fav_movie[1:6:2])  # Steps  -> onW  // Default value = 1
print(fav_movie[:])  # Copy String
