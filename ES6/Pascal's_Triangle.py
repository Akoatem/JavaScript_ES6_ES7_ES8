
# Step one

#n is the number of row 
# store n as input variable
def pascal_triangle(n):
    n = int(input("Enter the number of row: "))
    # this convert string to intergal
    
# step two, get the number of pascal triangle using nested list
# nested list is a matrix represented by column value
# store the value in an empty list of array
    list1 = []
# go to each row and store the value in the list using for range
    for i in range(n):
# To get the inner list create a temporal list
        temp_list = []
# add value to the temp_list, and we need for loop colunm for i and j
        for j in range(i + 1):
# insert the value in the temp_list using if statement
            if j == 0 or j == i: # for the begining and end value
                temp_list.append(1)
            else:  # for the inbetween value, we add the value for the previouse 
                temp_list.append(list1[i - 1][j -1] + list1[i - 1][j])
    list1.append(temp_list)
    
   # print(list1)

    # To print the triangle shape use for loop
    # this method can be used to print stars in the pyramid
    
    for i in range(n):
        for j in range(n-i-1):
            print(format(" ", "<2"), end="")
        for j in range(i + 1):
            print(format(list1[i][j], "<3"), end=" ")
                
        print() # print newline to go to next
    
            
        
                
                
                
                
                
            



    
    
    