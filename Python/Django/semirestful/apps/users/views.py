# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect
from .models import User
from django.contrib import messages
# Create your views here.
def index(request):
		data = {
			'user': User.objects.all()
		}
		return render(request, "users/index.html", data)

def new(request):
	return render(request, "users/new.html")

def edit(request, id):
	data = {
		'user': User.objects.get(id=id)
	}
	return render(request, "users/edit.html", data)

def show(request, id):
	data = {
		'user': User.objects.get(id=id)
	}
	return render(request, "users/show.html", data)

def create(request):
	errors = User.objects.basic_validator(request.POST)
	if len(errors):
		for tag, error in errors.iteritems():
			messages.error(request, error, extra_tags=tag)
		return redirect('/new')
	else:
		# user = User.objects.get(id = id)
		first_name = request.POST['first_name']
		last_name = request.POST['last_name']
		email = request.POST['email']
		User.objects.create(first_name=first_name, last_name=last_name, email=email)
		return redirect('/')

def destroy(request, id):
	z = User.objects.get(id=id)
	z.delete()
	return redirect('/')

def update(request, id):
	data = {
		'user': User.objects.get(id=id)
	}
	errors = User.objects.basic_validator(request.POST)
	if len(errors):
		for tag, error in errors.iteritems():
			messages.error(request, error, extra_tags=tag)
		return redirect('/'+id+'/edit')
	else:
		x = User.objects.get(id=id)
		x.first_name = request.POST['first_name']
		x.last_name = request.POST['last_name']
		x.email = request.POST['email']
		x.save()
	return redirect('/'+id+'/show')

def goback(request):
	return redirect('/')