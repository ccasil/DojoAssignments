# list_one = [1,2,5,6,2]
# list_two = [1,2,5,6,2]

# list_one = [1,2,5,6,5]
# list_two = [1,2,5,6,5,3]

# list_one = [1,2,5,6,5,16]
# list_two = [1,2,5,6,5]

list_one = ['celery','carrots','bread','milk']
list_two = ['celery','carrots','bread','cream']

def server (list_one, list_two):
	count = 0
	if len(list_one) == len(list_two):
		for x in list_one:
			if x in list_two:
				count = count + 1
				if count == len(list_one) and count == len(list_two):
					print "The lists are the same"
			else:
				print "The lists are not the same"
	else:
		print "The lists are not the same"

server(list_one, list_two)