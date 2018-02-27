# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect
from .models import *
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
	if not 'id' in request.session:
		return redirect('/')
	data = {
		#get users name that connects with session id
		'name': User.objects.get(id=request.session['id']),
		#filters items where user_id matches session id
		'item': Item.objects.filter(users=request.session['id']),
		#opposite of 'item'
		'allitem': Item.objects.exclude(users=request.session['id']),
		'user': User.objects.all()
	}
	return render(request, 'log_reg/success.html', data)

def delete(request,id):
	z = Item.objects.get(id=id)
	z.delete()
	return redirect('/success')


def newitem(request):
	if request.method == 'POST':
		errors = User.objects.item_validator(request.POST)
        if len(errors):
            for tag, error in errors.iteritems():
                messages.error(request, error, extra_tags=tag)
            return redirect('/add')
        else:
			item = Item.objects.create(itemname=request.POST['itemname'], added_by_id=request.session['id'])
			user = User.objects.get(id=request.session['id'])
			user.items.add(item)
			return redirect('/success')

def add(request):
	return render(request, 'log_reg/add.html')

def addto(request, id):
	item = Item.objects.get(id=id)
	user = User.objects.get(id=request.session['id'])
	user.items.add(item)
	return redirect('/success')

def removefrom(request, id):
	item = Item.objects.get(id=id)
	user = User.objects.get(id=request.session['id'])
	user.items.remove(item)
	return redirect('/success')

def show(request, id):
	data = {
		'item': Item.objects.get(id=id),
		'user': User.objects.filter(items=id)
	}
	return render(request, 'log_reg/show.html', data)

def logout(request):
	request.session.clear()
	return redirect('/')