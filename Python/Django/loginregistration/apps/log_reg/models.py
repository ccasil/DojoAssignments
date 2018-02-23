# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
import re

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
NAME_REGEX = re.compile(r'^[a-zA-Z]+$')

class UserManager(models.Manager):
	def basic_validator(self, postData):
		errors = {}
		if len(postData['first_name']) < 1 or len(postData['last_name']) < 1 or len(postData['email']) < 1 or len(postData['password']) < 1 or len(postData['cpassword']) < 1:
			errors['field'] = "Make sure all fields are filled"
		if len(postData['first_name']) < 2 or len(postData['last_name']) < 2:
			errors['names'] = "Make sure first and last name are at least 2 characters long"
		if not NAME_REGEX.match(postData['first_name']) or not NAME_REGEX.match(postData['last_name']):
			errors['namenum'] = "Name must not contain any numbers!"
		if  not EMAIL_REGEX.match(postData['email']):
			errors['email'] = "Invalid Email address"
		if len(postData['password']) < 8 or len(postData['cpassword']) < 8:
			errors['password'] = "Password must be at least 8 characters long"
		if postData['password'] != postData['cpassword']:
			errors['confirm'] = "Make sure passwords match"
		# else:
		# 	password = postData['password']
		# 	cpassword = postData['cpassword']
		return errors
	def login_validator(self, postData):
		errors = {}
		if len(postData['email']) < 1 or len(postData['password']) < 1:
			errors['field'] = "Make sure all fields are filled"
		if  not EMAIL_REGEX.match(postData['email']):
			errors['email'] = "Invalid Email address"
		# else:
		# 	checkemail = User.objects.filter(email=postData['email'])
		return errors


class User(models.Model):
	first_name = models.CharField(max_length = 255)
	last_name = models.CharField(max_length = 255)
	email = models.CharField(max_length = 255)
	password = models.CharField(max_length = 255)
	objects = UserManager()