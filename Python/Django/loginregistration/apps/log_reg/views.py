# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect
from .models import User
from django.contrib import messages
import bcrypt

# Create your views here.
def index(request):
	return render(request, 'log_reg/index.html')

def register(request):
	if request.method == 'POST':
		password = request.POST['password']
		cpassword = request.POST['cpassword']
		errors = User.objects.basic_validator(request.POST)
		if len(errors):
			for tag, error in errors.iteritems():
				messages.error(request, error, extra_tags=tag)
			return redirect('/')
		elif password == cpassword:
			hashpw = bcrypt.hashpw(password.encode(), bcrypt.gensalt())
		 	User.objects.create(first_name=request.POST['first_name'], last_name=request.POST['last_name'], email=request.POST['email'], password=hashpw)
		 	request.session['id'] = User.objects.get(email=request.POST['email']).id
		 	request.session['record'] = "registered!"
			return redirect('/success')

def login(request):
	if request.method == 'POST':
		checkemail = User.objects.filter(email=request.POST['email'])
		errors = User.objects.login_validator(request.POST)
		if len(errors):
			for tag, error in errors.iteritems():
				messages.error(request, error, extra_tags=tag)
			return redirect('/')
		if checkemail:
			checkpw = checkemail[0].password
			if bcrypt.checkpw(request.POST['password'].encode(), checkpw.encode()):
				request.session['id'] = User.objects.get(email=request.POST['email']).id
				request.session['record'] = "logged in!"
				return redirect('/success')
		return redirect('/')


def success(request):
	displayname = {
		'name': User.objects.get(id=request.session['id'])
	}
	return render(request, 'log_reg/success.html', displayname)