words = "It's thanksgiving day. It's my birthday,too!"
print words.find("day")
newwords = words.replace("day", "month")
print newwords

x = [2,54,-2,7,12,98]
print min(x)
print max(x)

z = ["hello",2,54,-2,7,12,98,"world"]
y = z[0]
y += z[len(z)-1]
print y

a = [19,2,54,-2,7,12,98,32,10,-3,6]
a.sort()
b = a[0:len(a)/2]
print b
c = a[len(a)/2:len(a)]
print c
c.insert(0, b)
print c