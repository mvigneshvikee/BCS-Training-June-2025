no_of_person = 4
if no_of_person <= 2:
    print("We will take 🛵 to the party")
else:
    print("We will take 🚗 to the party")

# Task 1.1

# person_1 = input("Enter First Person Name: ")
# person_2 = input("Enter Second Person Name: ")
# person_1_hig = int(input("Enter First Person Height: "))
# person_2_hig = int(input("Enter Second Person Height: "))
# difference = abs(person_1_hig - person_2_hig)
# if person_1_hig == person_2_hig:
#     print(f"{person_1} and {person_2} are of the same height")
# elif person_1_hig > person_2_hig:
#     # diff = person_1_hig - person_2_hig
#     print(f"{person_1} is taller than {person_2} by {difference}cm")
# else:
#     # diff = person_2_hig - person_1_hig
#     print(f"{person_2} is taller than {person_1} by {difference}cm")

# stock1 = "vanilla"
# stock2 = "chocolate"
# stock3 = "tin roof"
# stock4 = "cookie dough"

# # Task 1.1
# ice_cream = input("Please enter your fav 🍧?: ").strip().lower()


# if (
#     ice_cream == stock1
#     or ice_cream == stock2
#     or ice_cream == stock3
#     or ice_cream == stock4
# ):
#     print(f"Yes, we have {ice_cream.title()} in stock")
# else:
#     print(f"Sorry, we ran out of {ice_cream.title()}")

# Task 1.2
stocks = ["vanilla", "chocolate", "tin roof", "cookie dough"]

ice_cream = input("Please enter your fav 🍧?: ").strip().lower()

result = (
    f"Yes, we have {ice_cream.title()} in stock"
    if ice_cream in stocks
    else f"Sorry, we ran out of {ice_cream.title()}"
)
print(result)
