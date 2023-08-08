userDtails = [{
    "name" : "saravana",
    "e_mail" : "saravana@gmail.com",
    "password" : "saravan@123",
},
{
    "name" : "benish",
    "e_mail" : "benish@gmail.com",
    "password" : "benish@123",
},
{
    "name" : "kabeesh",
    "e_mail" : "kabeesh@gmail.com",
    "password" : "kabeesh@123",
},
{
    "name" : "naathan",
    "e_mail" : "naathan@gmail.com",
    "password" : "naathan@123",
}]


def login(user_validation):

        email=(input("email:"))
        passward=(input("passward:"))
        for details in userDtails:
            if email==details["e_mail"]:
                if passward==details["password"]:
                    print("name:",details["name"],"you loged in sucessfully")
                else:
                    print("invalid")
def register(user_validation):
        
        name=(input("name:"))
        email=(input("e_mail:"))
        passward=(input("passward"))
        conform_passward=(input("conform_passward"))
        if passward==conform_passward:
            details=({"name:":name,"e_mail:":email,"password:":passward})
            user_validation.update(details)
            print(user_validation)

user_validation=input("login or register")
if user_validation=="login":
    login(user_validation)
elif user_validation=="register":
    register(user_validation)
