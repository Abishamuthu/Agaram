"""numberlist=[1,2,3,4,5,6,7,8,9,10]
even=[]
odd=[]
for a in numberlist:
    if a%2==0:
        even.append(a)
    else:
        odd.append(a)
print("Even number=",even)
print("odd number=",odd)"""

"""monthly_gold_rate=[{"month":"january",
                    "gold_rate":2000,
                    "jwel_list":[{"name":"chain",
                                  "making_charge":3},
                                  {"name":"ring",
                                   "making_charge":2}]},
                    {"month":"march",
                     "gold_rate":1500,
                     "jwel_list":[{"name":"bangle",
                                   "making_charge":2},
                                   {"name":"neck chain",
                                    "making_charge":4}]},
                     {"month":"may",
                    "gold_rate":2600,
                    "jwel_list":[{"name":"chain",
                                  "making_charge":3},
                                  {"name":}]},
                    {"month":"june",
                     "gold_rate":900},
                     {"month":"August",
                      "gold_rate":1800}]
"minimum_value=monthly_gold_rate[0]["gold_rate"]
minimum_month=0
maximum_value=0
maximum_month=0
for rate in monthly_gold_rate:
    if rate["gold_rate"]< minimum_value:
        minimum_value=rate["gold_rate"]
        minimum_month=rate["month"]
    elif rate["gold_rate"] > maximum_value:
        maximum_value=rate["gold_rate"]
        maximum_month=rate["month"]
print("gold rate is cheaper in",minimum_month, minimum_value)
print("gold rate is maximum in",maximum_month,maximum_value)
    
    print( "Gold rate is " + str(rate["gold_rate"]))
    jewls_list = rate["jewls_list"]
    
    for j in jewls_list:
                        # 2000 * 13 / 100
        cal_mak_charge = rate["gold_rate"] * (j['making_charge'] / 100)
        final_charge = rate["gold_rate"] + cal_mak_charge
        print( j['name'] + " rate is "+ str(final_charge))"""
    

user_details = [
                
                {
                    "name" : "ajay",
                    "marks" : [80,90,70,40,60]
                },
                {
                    "name" : "manimala",
                    "marks" : [100,80,40,90,70]
                },
                {
                    "name" : "abarna",
                    "marks" : [72,65,68,89,86]
                }
        ]
        
        
        
for student in user_details:
    print(student['marks'])
    total = 0
    for x in student['marks']: 
        total = total + x
    print(total)



