# function input
my_dict = {
  "Speros": "(555) 555-5555",
  "Michael": "(999) 999-9999",
  "Jay": "(777) 777-7777"
}
#[("Speros", "(555) 555-5555"), ("Michael", "(999) 999-9999"), ("Jay", "(777) 777-7777")]

def tup(dic):
	lis1 = []
	lis2 = []
	for value in dic.iterkeys():
		lis1.append(value)
	for value in dic.itervalues():
		lis2.append(value)
	final = zip(lis1,lis2)
	print final

tup(my_dict)