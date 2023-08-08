"""number_a=int(input("Enter the number"))
number_b=number_a%2
if number_b==0:
    print("Even number")
else:
    print("odd number")


number_a=int(input("Enter the number"))
number_b=int(input("Enter the number"))
number_c=number_a%number_b
if number_c==0:
    print("It is divisible")
else:
    print("It is not divisible")"""

year=int(input("Enter the year"))
year=(year%400 and year%100) or (year%4 and not year%100)
if year==0:
    print("It is leap year")
else:
    print("It is not leap year")


           

