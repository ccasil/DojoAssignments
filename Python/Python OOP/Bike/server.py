# declare a class and give it name Bike
class Bike(object):
    # the __init__ method is called every time a new object is created
    def __init__(self, price, max_speed):
        # set some instance variables. just like any variable we can call these anything
        self.price = price
        self.max_speed = max_speed
        self.miles = 0
    # this is a method 
    def displayinfo(self):
    	print self.price
    	print self.max_speed
    	print self.miles
    	return self
    def ride(self,z):
    	for element in range(0,z):
    		self.miles += 10
    		# print self.miles
    		print "Riding"
    	return self
    def reverse(self,z):
    	for element in range(0,z):
    		if self.miles > 0:
    			self.miles -= 5
    			# print self.miles
    			print "Reversing"
    		else:
    			print "Can't reverse!"
    	return self

#now create an instance of the class
bike1 = Bike(200,"25mph")
# bike2 = Bike(300,"255mph")
bike1.ride(3).reverse(1).displayinfo()
# bike2.ride(2).reverse(2).displayinfo()
# bike1.ride(0).reverse(3).displayinfo()