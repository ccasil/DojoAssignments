import random

def score():
	print "Scores and Grades"
	for count in range(0,10):
		n = random.randint(60,100)
		if n > 89 and n < 101:
			print "Score:", n, "Your grade is A"
		if n > 79 and n < 90:
			print "Score:", n, "Your grade is B"
		if n > 69 and n < 80:
			print "Score:", n, "Your grade is C"
		if n > 59 and n < 70:
			print "Score:", n, "Your grade is D"
	print "End of the program. Bye!"
score()