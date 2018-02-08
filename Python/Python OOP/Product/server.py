animal1class Product(object):
	def __init__(self, price, name, weight, brand):
		self.price = price
		self.name = name
		self.weight = weight
		self.brand = brand
		self.status = "for sale"
	def  sell(self):
		self.status = "sold"
		return self
	def addtax(self,tax):
		self.price = self.price*tax
		return self.price
	def returns(self,reason):
		if reason == "defective":
			self.status = "defective"
			self.price = 0
		if reason == "unopened":
			self.status = "for sale"
		if reason == "opened":
			self.status = "used"
			self.price = self.price + (self.price * 20)/100
		return self
	def displayinfo(self):
		print self.price
		print self.name
		print self.weight
		print self.brand
		print self.status
		return self

item1 = Product(100, "notebook", "5lbs", "Moleskin")
item1.displayinfo()