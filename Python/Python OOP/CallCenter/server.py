class Call(object):
	def __init__(self):
		self.identity = identity
		self.name = name
		self.number = number
		self.time = time
		self.reason = reason
	def display(self): #prints call attributes
		print self.identity
		print self.name
		print self.number
		print self.time
		print self.reason

class CallCenter(object):
	def __init__(self):
		self.calls = calls #list of call objects
		self.queue = queue #length of the call list
	def add(self): #adds new call to end of call list
	def remove(self): #removes the call from the beginnning of the list (index 0)
	def info(self): #prints the name and phone number for each call in queue as well as the length of queue

	