def odd_even():
	for count in range(0,21):
		if count % 2 == 0:
			print "Number is", count, ". This is an even number"
		elif count % 2 == 1:
			print "Number is", count, ". This is an odd number"
odd_even()

a=[2,4,10,16]
def multiply(name, mult):
	for a in range(0, len(name)):
		name[a] *= mult
	return name

b = multiply(a, 5)
print b

def layered_multiples(arr):
	newnew = []
	for z in arr:
		temp = []
		for x in range(0, z):
			temp.append(1)
		newnew.append(temp) 
	return newnew
x = layered_multiples(multiply([1,2,3],2)) #[2,4,6]
print x