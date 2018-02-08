# declare a class and give it name Bike
class Car(object):
    # the __init__ method is called every time a new object is created
    def __init__(self, price, speed, fuel, mileage):
        # set some instance variables. just like any variable we can call these anything
        self.price = price
        self.speed = speed
        self.fuel = fuel
        self.mileage = mileage
    # this is a method 
    def display_all(self):
    	if self.price > 10000:
            self.price = self.price + (self.price * 15)/100
        else:
            self.price = self.price + (self.price * 12)/100
        print "Price:", self.price
    	print "Speed:", self.speed
    	print "Fuel:", self.fuel
    	print "Mileage:", self.mileage
        if self.price > 10000:
            print "Tax: 0.15"
        else:
            print "Tax: 0.12"
        return self


#now create an instance of the class
car1 = Car(2000,"35mph", "Full", "15mpg")
car1.display_all()
car2 = Car(2000,"5mph", " Not Full", "105mpg")
car2.display_all()
car3 = Car(2000,"15mph", "Kind of Full", "95mpg")
car3.display_all()
car4 = Car(2000,"25mph", "Full", "25mpg")
car4.display_all()
car5 = Car(2000,"45mph", "Empty", "25mpg")
car5.display_all()
car6 = Car(20000,"15mph", "Empty", "15mpg")
car6.display_all()