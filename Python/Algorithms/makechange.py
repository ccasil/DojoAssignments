def MakeChange(total):
	change = {}
	quarters = 0
	dimes = 0
	nickels = 0
	pennies = 0
	quarters = total/25
	leftover = total % 25