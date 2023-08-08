numbers=[1,2,3,4,5,6,7,8,9]
odd_count=0
even_count=0
for x in numbers:
    if x%2==0:
        even_count+=1
    elif x%2!=0:
        odd_count+=1
print("Number of even numbers:",even_count)
print("number of odd numbers:",odd_count)



mixedlist=[1,2,"hai","@",5,6,"&",8,9]
integer_count=0
for x in mixedlist:
    if type(x)==int:
        integer_count=integer_count+1
print("Real number=",integer_count)

