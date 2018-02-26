# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect
from .models import User
from django.contrib import messages


# Create your views here.
def index(request):
	return render(request, 'log_reg/index.html')

def register(request):
	if request.method == 'POST':
		password = request.POST['password']
		cpassword = request.POST['cpassword']
		errors = User.objects.basic_validator(request.POST)
		if 'userreg' in errors:
			request.session['id'] = errors['userreg'].id
		 	request.session['record'] = "registered!"
			return redirect('/success')
		else:
			for tag, error in errors.iteritems():
				messages.error(request, error, extra_tags=tag)
			return redirect('/')

def login(request):
	if request.method == 'POST':
		errors = User.objects.login_validator(request.POST)
		if 'userlog' in errors:
			request.session['id'] = errors['userlog'].id
			request.session['record'] = "logged in!"
			return redirect('/success')
		else:
			for tag, error in errors.iteritems():
				messages.error(request, error, extra_tags=tag)
	return redirect('/')

def success(request):
	displayname = {
		'name': User.objects.get(id=request.session['id'])
	}
	return render(request, 'log_reg/success.html', displayname)