# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render, HttpResponse, redirect
from django.contrib import messages

# Create your views here.
def index(request):
	return render(request, 'surveys/index.html')

def process(request):
	request.session['name'] = request.POST['name']
	request.session['location'] = request.POST['location']
	request.session['language'] = request.POST['language']
	request.session['description'] = request.POST['description']
	return redirect('/result')

def result(request):
	if not 'count' in request.session:
		request.session["count"] = 1
	else:
		request.session["count"] += 1
	messages.add_message(request, messages.INFO, 'Thanks for submitting this form!')
	return render(request, 'surveys/result.html')

def goback(request):
	return redirect('/')