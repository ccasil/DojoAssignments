class Patient(object):
	def __init__(self, name, allergies):
		self.name = name
		self.allergies = allergies

class Hospital(object):
	def __init__(self, name):
		self.name = name #hospital name
		self.patients = []
		self.identity = 0
		self.bed = []
		self.capacity = ['abcd'] #int indicating max number of patients the hospital can hold
	def admit(self,patient):
		#add patient to list of patients
		#assign patient bed number
		#if length of list >= capacity do not admit patient
		#return message to confirm admission or say hospital is full
		self.identity += 1
		if self.identity >= 1:
			print self.identity, "We are at capacity take a seat in the waiting room:", patient.name
			self.capacity.append(patient)
			# print self.waiting_room[].name
		else:
			print self.id, "You have been admitted",patient.name
			self.bed.append(patient)
			# print self.bed[0].id
		return self
	def discharge(self,patient):
		#look up and remove patient from list of patients
		#change bed number for patient to none
		for i in range(0,len(self.bed)):
			if self.bed[i] == patient:
				self.bed.pop(i)
				self.id -= 1
				print "A room opened. Next!"
				if len(self.waiting_room) > 0:
					self.bed.append(self.waiting_room.pop(0))
					print self.bed
			return self

patient1 = Patient('Kyle','peanut')
patient2 = Patient('Cesar','Shrimp')
patient3 = Patient('Chris','Pollen')
hosp1 = Hospital('Kaiser')
hosp1.admit(patient1).admit(patient2).admit(patient3).discharge(patient1)