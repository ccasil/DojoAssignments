class Patient(object):
	def __init__(self):
		self.identity = identity #id number
		self.name = name
		self.allergies = allergies
		self.bed = "none"

class Hospital(object):
	def __init__(self):
		self.patients = []
		self.name = name #hospital name
		self.capacity = #int indicating max number of patients the hospital can hold
	def admit(self):
		#add patient to list of patients
		#assign patient bed number
		#if length of list >= capacity do not admit patient
		#return message to confirm admission or say hospital is full
	def discharge(self):
		#look up and remove patient from list of patients
		#change bed number for patient to none