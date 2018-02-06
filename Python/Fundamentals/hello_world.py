a = "hello"
print a.capitalize() #capitalizes first letter
a = "hello"
print a.upper() #caps lock
a = "hello"
print a.lower() #lowercase first letter
a = "hello"
print a.count("l") # counts # of l's in string a
a = "hello"
print a.find("l") #finds first index where "l" appears
a = "hello"
print a.index("l")
a = "h1e1l1l1o"
print a.split("1") #split string a where "1" occurs, default is " "
b = ['h', 'e', 'l', 'l', 'o']
a = "*"
print a.join(b) #joins list b with string a in between
a = "hello"
print a.replace("o","a") #replaces o with a 
a = "hello"
b = "world"
print "My first program was {} {}".format(a,b) #inputs objects into {}
a = ["cat", "dog", "rooster"]
print len(a) #number of items in list
a = ["cat", "dog", "rooster", "hippopatormasss", "anteater", "zebra", "zzebra"]
print max(a) #greatest value in list (alphabetical order (z is greatest value) numbers<letters)
a = ["cat", "dog", -9, 7, "rooster", 10, False]
print min(a) #smallest value
a = ["cat", "dog", -9, 7, "rooster", 10, False]
print a.index(10) #index where 10 ocurs
a = ["cat", "dog", -9, 7, "rooster", 10, False]
a.append("push") #adds "push" to end of list
print a
a = ["cat", "dog", -9, 7, "rooster", 10, False]
y = a.pop(1) #pop at end of list (or index parameter)
print y
a = ["cat", "dog", -9, 7, "rooster", 10, False, "rooster"]
a.remove("rooster") #removes first occurrence of parameter
print a
a = ["cat", "dog", -9, 7, "rooster", 10, False]
a.insert(2,"tea") #insert "tea" into index 2
print a
a = ["cat", 4, 8, 3, "dog", "rooster", "hippopatormasss", 10, "anteater", "zebra", "zzebra"]
a.sort() #sort from smallest to largest (numbers<alphabet)
print a
a = [1,2,3,4,5]
a.reverse() #reverse list
print a
a = [1,2,3,4,5]
b = ['h', 'e', 'l', 'l', 'o']
b.extend(a) #extends list b by adding list a to end
print b
a = (1,2,3)
b = list(a) #changes tuple into list
print b
print hello + world