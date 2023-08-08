#fruits_1=["apple","mango","grapes"]
"""fruits.append("pineapple")
fruits[0]="orange"
fruits.insert(1,"banana")
print(fruits)
fruits_2=["banana","pineapple","orange"]
fruits=fruits_1+fruits_2
print(fruits)

details={"name":"Abisha",
         "place":"Ramanputhoor"}
details["mobile"]= 8220085277
details["place"]= "Nagercoil"
details.update({"email":"abisha2003@gmail.com",
                "qualification":"BA"})
                print(details)"""
details=[{"name":"Dhivya",
               "place":"Kottar",
               "Hobbies":["Reading","watering plants","scrolling internet"]},
              {"name":"Arun",
               "place":"Chathanvillai",
               "Hobbies":["Running","Kabadi","Gym"]},
              {"name":"Ashmitha",
               "place":"parakai",
               "Hobbies":["Drawing","Watering plants","Scrolling internet"]},
              {"name":"Evanjalin",
               "place":"Krishnankovil",
               "Hobbies":["Drawing","craft work","watering plants"]},
              {"name":"Aneesh",
               "place":"Amandivillai",
               "Hobbies":["Movies","Volly ball","Tution"]},
              {"name":"Ajay",
               "place":"Kaniyakumari",
               "Hobbies":["Tavel","Shuttal","movies"]},
              {"name":"Krish",
               "place":"Krishnankovil",
               "Hobbies":["Cricket","Football","pubg"]},
              {"name":"Ashok",
               "place":"Osaravillai",
               "Hobbies":["Roaming","Games", "Movies"]},
              {"name":"Abisha",
               "place":"Ramanputhoor",
               "Hobbies":["Reading","Aari","watering plants"]},
               {"name":"Jefrin",
                "place":"thakkalai",
                "Hobbies":["Drawing","craftwork","listening music"]}]
# names=[]
# choice=input("Enter your hobbies")
# for friend_details in details:
#     hobbies =friend_details["Hobbies"]
#     hobbies.append("codings")

#     for hob in friend_details["Hobbies"]:
#         if choice==hob:
#             names.append(friend_details["name"])
# print(names)
for x in details:
    for hobby in x["hobbies"]:
        if hobby=="drawing":
            x.update({"eligible":True})
            break
        else:
            x.update({"eligible":False})
print(details)       


    

    


