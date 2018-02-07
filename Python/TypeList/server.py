a = ['magical unicorns',19,'hello',98.98,'world']
b = [2,3,1,7,4,12]
c = ['magical','unicorns']

def server(p):
	total = 0
	sentence = ""
	intcount = 0
	strcount = 0
	for element in p: #iterating through array for elements
		if type(element) == int or type(element) == float:
			intcount = intcount + 1 #check number of integers = number of items in list
			total = total + element #sum of integers in list
		if type(element) == str:
			strcount = strcount + 1 #check number of strings = number of strings in list
			sentence = sentence + " " + element #strings in list
	if intcount == len(p):
		print "The list you entered is of integer type"
		print "Sum:", total		
	elif strcount == len(p):
		print "The list you entered is of string type"
		print "String:", sentence
	else:
		print "The list you entered is of mixed type"
		print "String:", sentence
		print "Sum:", total	
			
server(a)