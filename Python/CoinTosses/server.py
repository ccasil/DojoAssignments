import random
def coin():
	attempt = 0
	counth = 0
	countt = 0
	print "Starting the program..."
	for count in range(0,50):
		n = random.randint(0,1)
		if n == 0:
			counth += 1
			attempt += 1
			print "Attempt #", attempt, ":Throwing a coin... It's a head! ... Got", counth, "head(s) so far and ", countt," tail(s) so far"
		if n == 1:
			countt += 1
			attempt += 1
			print "Attempt #", attempt, ":Throwing a coin... It's a tail! ... Got", counth, "head(s) so far and ", countt," tail(s) so far"

coin()