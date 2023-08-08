# n=input("number:")
# for i in range(n):
#      for j in range(n):
#         print("*",end="")
#      print('')
        

n=5
# for i in range(n):
#     for j in range(n):
#         print(j+1,end='')
#     print("")

# for i in range(1,(n*n)+1):
#     print(i," ",end="")
#     if i%n==0:
#         print("\n")

# count=(n*n)+1
# for i in range(n):
#     for j in range(n):
#         count-=1
#         print(count," ",end="")
#     print("")

# for i in range((n*n),0,-1):
    
#     if i%n==0:
#         print("\n")
#     print(i," ",end="")

for i in range(n):
    for j in range(i+1):
        print("*",end="")
    print("")

for i in range(n):
    for j in range(n,i,-1):
        print("*",end="")
    print("")

    
    