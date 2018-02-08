def draw_stars(lis):
	for z in lis:
		if type(z) == int or type(z) == float:
			newstr = ""
			for v in range(0,z):
				newstr += "*"
			print newstr
		if type(z) == str:
			newstr = ""
			for v in range(0,len(z)):
				newstr += z[0].lower()
			print newstr

x = [4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"]
y = [4,6,1,3,5,7,25]
draw_stars(x)