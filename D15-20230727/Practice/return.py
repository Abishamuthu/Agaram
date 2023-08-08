# vowels=['a','e','i','o','u']
# #for x in vowels:
# for index,letter in enumerate(vowels):
#     print(index+1,letter)

def cal_delivery_charge(amount):
    return amount*0.6
item_rate=200
gst=item_rate*0.18
delivery_charge=cal_delivery_charge(item_rate+gst)
total=item_rate+gst+delivery_charge
print(total)
