for count in range(0, 10):
	if count % 2 == 1:
		print count

for counter in range(5, 101, 5):
	print counter

a = [1, 2, 5, 10, 255, 3]
z = 0
for element in a:
	z = z + element
print z

a = [1, 2, 5, 10, 255, 3]
z = 0
for element in a:
	z = z + element
x = z/len(a)
print x