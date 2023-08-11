# # a=[1,0,2,3,0,4,0,5,0]
# # b=[]

# # for i in a:
# #     if i==0:
# #         b+=[0,0]
# #     else:
# #         b+=[i]
# #     len(b)!>len(a)
# # print(b)

# given  = [1,0,2,3,0,4,0,5,0]
# res = []
# for i in given: 
#     if len(res) < len(given) : 

#         if i == 0 and len(res) < (len(given)-1) :
#                 res+=[i,i]
#         else: 
#             res+=[i]
    
#     else : 
#           break

# print('result', res)

# string=input("")


# w=string.split()
# dic={}
# word_c0unt=1
# for word in w:
#     if word in dic:
#         word_c0unt=1+1
#         dic[word]=word_c0unt
#     else:
#         dic[word]=word_c0unt

# print(dic)


list=[1,3,5,4,9,6,7,8,9]
max_num=0
min_num=3
for x in list:
    if x>max_num:
        max_num=x
        if x<min_num:
            min_num=x
sub=max_num-min_num
print(sub,"(",max_num,"-",min_num,")")


input=["flower","flow","fly"]
for list in input:
    letter= list.split()
    if input==letter:
        print(letter)

