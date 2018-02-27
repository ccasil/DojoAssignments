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
		if 'userreg' in errors:
			request.session['id'] = errors['userreg'].id
		 	request.session['record'] = "registered!"
			return redirect('/books')
		else:
			for tag, error in errors.iteritems():
				messages.error(request, error, extra_tags=tag)
			return redirect('/')

def login(request):
	if request.method == 'POST':
		errors = User.objects.login_validator(request.POST)
		if 'userlog' in errors:
			request.session['id'] = errors['userlog'].id
			return redirect('/books')
		else:
			for tag, error in errors.iteritems():
				messages.error(request, error, extra_tags=tag)
	return redirect('/')

def books(request):
	top3 = Review.objects.order_by("-created_at")
	data = {
		'user': User.objects.get(id=request.session['id']),
		'book': Book.objects.all(),
		'first3': top3[:3],
		'review': Review.objects.all()
	}
	return render(request, 'belt/books.html', data)

def add(request):
	data = {
		'book': Book.objects.all()
	}
	return render(request, 'belt/add.html', data)

def addnewbook(request):
	if request.method == 'POST':
	    errors = User.objects.addbook_validator(request.POST)
        if len(errors):
            for tag, error in errors.iteritems():
                messages.error(request, error, extra_tags=tag)
            return redirect('/add')
        else:
			if request.POST['authorlist'] == "not":
				author = request.POST['newauthor']
			else:
				author = request.POST['authorlist']
			newbook = Book.objects.create(title=request.POST['title'], author=author)
			Review.objects.create(content=request.POST['content'], rating=request.POST['rating'], review_id=newbook.id, reviewer_id=request.session['id'])
			return redirect('/showbook/' +str(newbook.id))
					
def showbook(request, id):
	data = {
		'book': Book.objects.get(id=id),
		'review': Review.objects.filter(review_id=id),
		'user': User.objects.all()
	}
	return render(request, 'belt/show.html', data)

def destroy(request, id):
	v = Review.objects.get(id=id)
	bookid = str(v.review.id)
	v.delete()
	return redirect('/showbook/' +bookid)

def addnewreview(request):
	errors = User.objects.addreview_validator(request.POST)
	if len(errors):
		for tag, error in errors.iteritems():
			messages.error(request, error, extra_tags=tag)
		return redirect('/showbook/' +request.POST['hiddenbookid'])
	else:
		newreview = Review.objects.create(content=request.POST['content'], rating=request.POST['rating'], review_id=request.POST['hiddenbookid'], reviewer_id=request.session['id'])
		return redirect('/showbook/' +request.POST['hiddenbookid'])

def users(request, id):
	totalreviews = Review.objects.filter(reviewer_id=id)
	data = {
		'user': User.objects.get(id=id),
		'reviewnum': len(totalreviews),
		'review': totalreviews,
		'book': Book.objects.all()
	}
	return render(request, 'belt/users.html', data)

def logout(request):
	request.session.clear()
	return redirect('/')