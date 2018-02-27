# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.db import models
import re, bcrypt

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
NAME_REGEX = re.compile(r'^[a-zA-Z]+$')

class UserManager(models.Manager):
	def basic_validator(self, postData):
		errors = {}
		if len(postData['name']) < 1 or len(postData['username']) < 1 or len(postData['password']) < 1 or len(postData['cpassword']) < 1 or len(postData['datehired']) < 1:
			errors['field'] = "Make sure all fields are filled"
		if len(postData['name']) < 3 or len(postData['username']) < 3:
			errors['names'] = "Make sure first and last name are at least 3 characters long"
		if not NAME_REGEX.match(postData['name']):
			errors['namenum'] = "Name must not contain any numbers!"
		if len(postData['password']) < 8 or len(postData['cpassword']) < 8:
			errors['password'] = "Password must be at least 8 characters long"
		if postData['password'] != postData['cpassword']:
			errors['confirm'] = "Make sure passwords match"
		if len(errors) == 0:
			hashpw = bcrypt.hashpw(postData['password'].encode(), bcrypt.gensalt())
		 	userreg = User.objects.create(name=postData['name'], username=postData['username'], datehired=postData['datehired'], password=hashpw)
			errors['userreg'] = userreg
		return errors
	def login_validator(self, postData):
		errors = {}
		checkusername = User.objects.filter(username=postData['username'])
		if checkusername:
			if bcrypt.checkpw(postData['password'].encode(), checkusername[0].password.encode()):
				errors['userlog'] = checkusername[0]
			else:
				errors['invalidpass'] = "Invalid Password or Username"
		else:
			errors['invalidusername'] = "Invalid Username or Password"
		return errors
	def item_validator(self, postData):
		errors = {}
		if len(postData['itemname']) < 3:
			errors['shortname'] = "Make sure item is at least 3 characters long"
		return errors

class User(models.Model):
	name = models.CharField(max_length = 255)
	username = models.CharField(max_length = 255)
	password = models.CharField(max_length = 255)
	datehired = models.DateTimeField()
	objects = UserManager()

class Item(models.Model):
	itemname = models.CharField(max_length = 255)
	date_added = models.DateTimeField(auto_now_add = True)
	users = models.ManyToManyField(User, related_name="items")
	added_by = models.ForeignKey(User, related_name="wishes")