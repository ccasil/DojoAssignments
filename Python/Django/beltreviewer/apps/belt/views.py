# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render, redirect
from .models import *
from django.contrib import messages
import bcrypt

def index(request):
	return render(request, 'belt/index.html')

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
		 	User.objects.create(name=request.POST['name'], alias=request.POST['alias'], email=request.POST['email'], password=hashpw)
		 	request.session['id'] = User.objects.get(email=request.POST['email']).id
		 	request.session['record'] = "registered!"
			return redirect('/books')

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
				return redirect('/books')
		return redirect('/')


def books(request):
	displayname = {
		'name': User.objects.get(id=request.session['id'])
	}
	return render(request, 'belt/books.html', displayname)

def add(request):
	return render(request, 'belt/add.html')

def addnewbook(request):
	if request.method == 'POST':
		if request.POST['authorlist'] == "not":
			author = request.POST['newauthor']
		else:
			author = request.POST['authorlist']
		Book.objects.create(title=request.POST['title'], author=author)
		Review.objects.create(review=request.POST['review'], rating=request.POST['rating'])
		return redirect('/books')

def logout(request):
	request.session.clear()
	return redirect('/')