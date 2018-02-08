class Animal(object):
	def __init__(self, name):
		self.name = name
		self.health = 100
	def walk(self,z):
		for element in range (0,z):
			self.health -= 1
		return self
	def run(self,z):
		for element in range (0,z):
			self.health -= 5
		return self
	def displayhealth(self):
		print self.health
		return self

animal1 = Animal("Kyle")
animal1.walk(3).run(2).displayhealth()

class Dog(Animal):
	def __init__(self):
		super(Animal, self).__init__()
		self.health = 150
	def pet(self,z):
		for element in range (0,z):
			self.health += 5
		return self

dog1 = Dog()
dog1.walk(3).run(2).pet(1).displayhealth()

class Dragon(Animal):
	def __init__(self):
		super(Animal, self).__init__()
		self.health = 170
	def fly(self,z):
		for element in range(0,z):
			self.health -= 10
		return self
	def displayhealth(self):
		print "this is a dragon!"
		print self.health
		return self

dragon1 = Dragon()
dragon1.fly(5).displayhealth()

animal2 = Animal("Wiseman")
animal2.displayhealth()