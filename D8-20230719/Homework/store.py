user_food={"milk":1.02,
           "popcorn":2.5,
           "bread":2.5}
food_1=input("Enter the user_food")
food_2=input("Enter the user_food")
if food_1=="milk" and food_2=="bread":
    print(user_food["milk"]+user_food["bread"])
elif food_1=="milk"and food_2=="popcorn":
        print(user_food["milk"]+user_food["popcorn"])
elif food_1=="bread" and food_2=="popcorn":
     print(user_food["bread"]+user_food["popcorn"])
else:
    print("The item is not available")