choice=input("Enter the palindrome word")
letter=""
for l in choice:
    letter=l+letter
if letter==choice:
    print("palindrome")
else:
    print("invalid")
    