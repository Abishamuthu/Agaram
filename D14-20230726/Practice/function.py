# def function_name():
#     print("I'm Abisha")
# function_name()
# a="Abisha"
# b="muthukrishnan"
# def addition():
#    print(a+' '+b)
# addition()

# def combine_name(a,b):
#     print(a+' '+b)
# combine_name("Abisha","Muthukrishnan")
# combine_name("Abisha","BA")

# a=input("")
# b=input("")
# def combine_name(a,b):
#     print(a+' '+b)
# combine_name(a,b)

# gender=input("")
# def dec_colour(gender):
#     if gender=="male":
#         print("Blue")
#     elif gender=="female":
#         print("Pink")
# dec_colour(gender)

a=int(input("enter the number"))
b=int(input("Enter the number"))

def even_num(num):
    if a%2==0:
        print(num,"even number")
    else:
        print(num,"odd number")
def max_num(num_1,num_2):
    if a>b:
        print(a,"maximum")
        even_num(a)
    elif b>a:
        print(b,"maximum")
        even_num(b)
    else:
        print("both are equal ")

max_num(a,b)