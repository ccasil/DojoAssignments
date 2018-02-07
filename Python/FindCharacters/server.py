word_list = ['hello','world','my','name','is','Anna']
char = 'o'

def findchar(lis,ch):
	new_list = []
	for i in range(0, len(word_list)):
		if word_list[i].find(char) > 0:
			new_list.append(word_list[i])
	print new_list

findchar(word_list,char)