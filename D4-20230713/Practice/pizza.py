one_veg_pizza=500
extra_toppings=80
soft_drinks=45
delivery_charge=50
gst=(one_veg_pizza+extra_toppings+soft_drinks+delivery_charge)*0.18
Total=one_veg_pizza+extra_toppings+soft_drinks+delivery_charge+gst
print(Total)

one_veg_pizza=500
Two_veg_pizza=2*one_veg_pizza
extra_toppings=80
soft_drinks=45
three_soft_drinks=3*soft_drinks
delivery_charge=50
exclude_gst=(Two_veg_pizza+extra_toppings+three_soft_drinks+delivery_charge)
gst=exclude_gst*0.18
Total=exclude_gst+gst
print(Total)

two_veg_pizza=500*2
extra_toppings=80
three_soft_drinks=45*3
delivery_charge=50
exclude_gst=two_veg_pizza+extra_toppings+three_soft_drinks+delivery_charge
gst=exclude_gst*0.18
total=exclude_gst+gst
print(total)


