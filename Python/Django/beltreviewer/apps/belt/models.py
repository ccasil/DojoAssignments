# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
import re, bcrypt

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
NAME_REGEX = re.compile(r'^[a-zA-Z]+$')

class UserManager(models.Manager):
	def basic_validator(self, postData):
		errors = {}
		if len(postData['name']) < 1 or len(postData['alias']) < 1 or len(postData['email']) < 1 or len(postData['password']) < 1 or len(postData['cpassword']) < 1:
			errors['field'] = "Make sure all fields are filled"
		if len(postData['name']) < 2 or len(postData['alias']) < 2:
			errors['names'] = "Make sure first name and alias are at least 2 characters long"
		if not NAME_REGEX.match(postData['name']):
			errors['namenum'] = "Name must not contain any numbers!"
		if  not EMAIL_REGEX.match(postData['email']):
			errors['email'] = "Invalid Email address"
		if len(postData['password']) < 8 or len(postData['cpassword']) < 8:
			errors['password'] = "Password must be at least 8 characters long"
		if postData['password'] != postData['cpassword']:
			errors['confirm'] = "Make sure passwords match"
		if len(errors) == 0:
			hashpw = bcrypt.hashpw(postData['password'].encode(), bcrypt.gensalt())
		 	userreg = User.objects.create(name=postData['name'], alias=postData['alias'], email=postData['email'], password=hashpw)
			errors['userreg'] = userreg
		return errors
	def login_validator(self, postData):
		errors = {}
		checkemail = User.objects.filter(email=postData['email'])
		if checkemail:
			if bcrypt.checkpw(postData['password'].encode(), checkemail[0].password.encode()):
				errors['userlog'] = checkemail[0]
			else:
				errors['invalidpass'] = "Invalid Password"
		else:
			errors['invalidemail'] = "Invalid Email"
		return errors
	def addbook_validator(self, postData):
		errors = {}
		return errors

class User(models.Model):
	name = models.CharField(max_length = 255)
	alias = models.CharField(max_length = 255)
	email = models.CharField(max_length = 255)
	password = models.CharField(max_length = 255)
	objects = UserManager()

class Book(models.Model):
	title = models.CharField(max_length = 255)
	author = models.CharField(max_length = 255)
	#uploader: a user can upload many books
	# uploader = models.ForeignKey(User, related_name="books")


class Review(models.Model):
	content = models.TextField(max_length = 1000, default = "")
	rating = models.IntegerField()
	created_at = models.DateTimeField(auto_now_add = True)
	#reviewer: a user can have many reviews
	reviewer = models.ForeignKey(User, related_name="reviews")
	#review: a book can have many reviews
	review = models.ForeignKey(Book, related_name="reviews")