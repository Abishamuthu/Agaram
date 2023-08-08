email=input("enter your email")
passward=int(input("enter your passward"))
if email=="abisha@gmail.com" and passward==12345678:
    print("you are logged in successfully")
elif email!="abisha@gmail.com"and passward==12345678:
    print("wrong email")
elif passward!=12345678 and email=="abisha@gmail.com":
    print("wrong passward")
else:
    print("email and Passward are wrong")
