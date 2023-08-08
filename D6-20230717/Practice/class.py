
my_resume={"name":"Abisha",
            "email":"abishamuthukrishnan2003@gmail.com",
            "mobile no":"8220085277",
            "objective":" To succeed in an environment of growth and excellence and earn a job which provide me job satisfaction",
            "softskills":["communication","Time management"],
            "hardskills":["Microsoft office",],
            "Educational qualification":[{"level":"SSLC","institute_name":"Nirmala Matric hr.sec school","passed_year":2018,
                                          "mark_percentage":91,"place":"Ariyalur"},
                                         {"level":"HSC","institute_name":"Nirmala Matric hr.sec school","passed_year":2020,
                                          "mark_percentage":69,"place":"Ariyalur"},
                                          {"level":"BA","institute_name":"Holy cross college","passed_year":2023,
                                           "mark_percentage":79,"Place":"Nagercoil"}],
            "project":[],
            "experience":[],
            "hobbies":["Reading","Watering plants",],
            "personal details":{"father name":"Muthukrishnan",
                                 "father occupation":"Mason",
                                 "Language known":["Tamil","English"],
                                 "DOB":"17/03/2003",
                                 "Gender":"Female",
                                 "Marital Status":"Unmarried",
                                "Address":{"door_no":"35/177","street":"Amman kovil street","city":"Nagercoil"},
             "Declaration":"I hereby declare that all the information given above are true to my knowledge"}
}
#print(my_resume["Educational qualification"][2])
#print(my_resume["personal details"]["Address"]["door_no"])
#print(my_resume)

"""gender=input("Enter gender")
if gender=="male":
    print("Blue")
elif gender=="female":
    print("Pink")
elif gender=="Transgender":
    print("Lavender")
else:
    print("invalid input")"""

total_mark=int(input("Enter the total_mark"))
if total_mark>92:
    print("you are elligble for MBBS")
elif total_mark>85 and total_mark<=92:
    print("you are eligible for BDS")
elif total_mark>75 and total_mark<=85:
    print("you are eligible for Agri")
else:
    print("you are eligible for engineering")



