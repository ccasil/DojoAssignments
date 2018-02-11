class Call(object):
	def __init__(self, identity, name, number, time, reason):
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
	def __init__(self, calls):
		self.calls = [] #list of call objects
		self.queue = len(self.calls) #length of the call list
	def add(self,add): #adds new call to end of call list
		self.calls.append(add)
		return self
	def remove(self): #removes the call from the beginnning of the list (index 0)
		self.calls.pop(0)
		return self
	def info(self): #prints the name and phone number for each call in queue as well as the length of queue
		for i in self.calls:
			print i.identity
			print i.number
			print i.name
		return self
	def remove_call(self,num): #remove a call from the queue
		for i in range(0, len(self.calls)):
			v = self.calls[i].number
			if v == num:
				self.calls.pop(i)
		return self


call1 = Call( 1 , 'ky' , '408-888-8888', '12:00pm' , 'headache')
call2 = Call( 2 , 'kyle' , '408-999-9999', '11:00am' , 'tummy ache')
call3 = Call( 3 , 'cesar' , '408-000-0000', '7:00am' , 'backache')
callcenter = CallCenter('')
callcenter.add(call1)
callcenter.add(call2)
callcenter.add(call3)
# callcenter.remove_call('408-999-9999').info()