a = ['magical unicorns',19,'hello',98.98,'world']
b = [2,3,1,7,4,12]
c = ['magical','unicorns']

def server(p):
	total = 0
	sentence = ""
	intcount = 0
	strcount = 0
	for element in p:
		if type(element) == int or type(element) == float:
			intcount = intcount + 1
			total = total + element
		if type(element) == str:
			strcount = strcount + 1
			sentence = sentence + " " + element
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