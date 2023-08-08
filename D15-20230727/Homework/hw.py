item_list=[{"name":"Apple","category":"Fruits"},
           {"name":"Onion","category":"Vegetable"},
           {"name":"Carrot","category":"Vegetable"},
           {"name":"Banana","category":"Fruits"},
           {"name":"Grapes","category":"Fruits"}]

# item={}
# Fruits=[]
# Vegetables=[]
# item={"Fruits":Fruits,"Vegetables":Vegetables}

# def category(item):
#     item={}
#     Fruits=[]
#     Vegetables=[]
#     #item={"Fruits":Fruits,"Vegetables":Vegetables}
    
    
#     for grocery in item_list:
#         if grocery["category"]=="Fruits":
#             Fruits.append(grocery["name"])
#         elif grocery["category"]=="Vegetable":
#             Vegetables.append(grocery["name"])
#     item.update({"Fruits":Fruits,"Vegetable":Vegetables})
#     return(item)

    
# final_list=category(item_list)


# print(final_list)

def category(item):
    item={}
    for grocery in item_list:
        name=grocery["name"]
        category=grocery["category"]
        if category in item:
            item[category].append(name)
        else:
            item[category]=[name]
    return(item)

print(category(item_list))