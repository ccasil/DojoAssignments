# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, HttpResponse, redirect
from django.utils.crypto import get_random_string
# Create your views here.
def index(request):
	context = {
		"string": get_random_string(length=14)
		# http://strftime.org/
	}
	if not 'count' in request.session:
		request.session["count"] = 1
	else:
		request.session["count"] += 1
	return render(request,'random_word/index.html', context)

def generate(request):
	return redirect('/random_word')

def reset(request):
	request.session['count'] = 0
	return redirect('/random_word')