dictionary = {"Name": "Kyle", "Age": "23", "Country": "The United States", "Language": "bay area slang"}

def me(dic):
	# for keys, data in dic.items():
	# 	for value in data:
	# 		print value["Name"]
	
	for value in dic:
		print "My name is", dic["Name"]
		print "My age is", dic["Age"]
		print "My country of birth is", dic["Country"]
		print "My favorite language is", dic["Language"]
		

me(dictionary)

# for i in dicti:
# 	print i #keys
# 	print dicti[i] #value

# for i in dicti:
# 	print i #key
# 	for x in range (0, len(dicti[i])):
# 		print dict[i][x]

# for i in dicti:
# 	print i
# 	for x in dicti[i]
# 	print x
