class MathDojo(object):
	def __init__(self):
		self.num = 0
	def add(self, *num):
		for element in num:
			if type(element) == list or type(element) == tuple:
				for value in element:
					self.num += value
			elif type(element) == int:
				self.num += element
		return self
	def subtract(self, *num):
		for element in num:
			if type(element) == list or type(element) == tuple:
				for value in element:
					self.num -= value
			elif type(element) == int:
				self.num -= element
		return self
		# temp = 0
		# for element in num:
		# 	temp += element
		# self.num -= temp
		# return self
	def result(self):
		print self.num

md = MathDojo()
# md.add(2).add(2,5).subtract(3,2).result()
# md.add([1], 3,4).add([3,5,7,8], [2,4.3,1.25]).result()
# md.subtract(2, [2,3], [1.1,2.3]).result()
md.add([1], 3,4).add([3,5,7,8], [2,4.3,1.25]).subtract(2, [2,3], [1.1,2.3]).result()