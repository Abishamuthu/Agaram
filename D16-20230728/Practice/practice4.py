# user_list=[{"name":"Dhivya",
#                "email":"dhivya@gmail.com",
#                "password":"dhivya@123",
#                "Hobbies":["Reading","watering plants","scrolling internet"],
#                "friends_name":["Ashmitha","Abisha","Kumari"]},
#               {"name":"Ashmitha",
#                "email":"ashmi@gmail.com",
#                "password":"ashmi@123",
#                "Hobbies":["Drawing","Watering plants","Scrolling internet"],
#                "friends_name":["Dhivya","Abisha","Kumari"]},
#               {"name":"Priya",
#                "email":"priya@gmail.com",
#                "password":"priya@123",
#                "Hobbies":["Drawing","craft work","watering plants"],
#                "friends_name":["Abisha","Kani","Dharshini"]},
#               {"name":"Abisha",
#                "email":"abisha@gmail.com",
#                "password":"abisha@123",
#                "Hobbies":["Reading","Aari","watering plants"],
#                "friends_name":["Priya","Dhivya","Delma"]}]

# email_id=input("enter your email")
# u_password=input("Enter your password")
# def login(details):
#     user_list["login"]=False
#     for details in user_list:
#         details["login"]=False
#         email=details["email"]
#         password=details["password"]
#         if email_id==email and u_password==password:
#             details["login"]=True
#             print(details["name"],email,"your hobbies are:",details["hobbies"],"your friends are:",details["friends_name"])
#         elif email_id!=email and u_password==password:
#             print("Invalid email")
#         elif email_id==email and u_password!=password:
#             print("Invalid password")
#         else:
#             print("invalid user")
        
# login(user_list) 

# print (user_list) 

# sentence=input("Enter the sentence:")
# longest = max(sentence.split(), key=len)
# print("Longest word is:",longest)


"""sentence=input("Enter the sentence:")

def longestword(sen):
    length=0
    w=""
    for word in sen.split():
        if len(word)>length:
            length=len(word)
            w=word
    return(w)
        
letter=longestword(sentence)
print("Longest word is:",letter)"""

list=[2,3,4,5,6,7,8]
sum=9
def pair_value(num):
    for x in range(len(num)):
        for y in range(x+1, len(num)):
            if num[x]+num[y]==sum:
                print(num[x],num[y])
pair_value(list)

sentence=input("Enter the sentence")

def count_vowels(word):

    vowels = "aeiouAEIOU"
    vowel_count = 0

    for letter in word:
        if letter in vowels:
            vowel_count += 1

    return vowel_count

def find_max_vowels_word(sen):
    vowels = "aeiouAEIOU"
    max_vowel_count = 0
    max_vowel_word = ""

    for word in sen.split():
        vowel_count = count_vowels(word)
        if vowel_count > max_vowel_count:
            max_vowel_count = vowel_count
            max_vowel_word = word
            print("max vowel count  ",max_vowel_count)

    return max_vowel_word
max_vowels_word=find_max_vowels_word(sentence)
print("Maximum vowel word =",max_vowels_word)

