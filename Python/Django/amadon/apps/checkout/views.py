# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect, HttpResponse

def index(request):
	return render(request, 'checkout/index.html')

def buy(request):

	if request.method == 'POST':
		if not 'totalorder' in request.session:
			request.session['total'] = 0
		if not 'totalitems' in request.session:
			request.session['totalitems'] = 0
		if not 'total' in request.session:
			request.session['total'] = 0

		if request.POST['product_id'] == 'cup':
			price = 10
		elif request.POST['product_id'] == 'speaker':
			price = 20
		elif request.POST['product_id'] == 'whiteboard':
			price = 30

		request.session['totalorder'] = price * int(request.POST['quantity'])
		request.session['total'] += request.session['totalorder']
		request.session['totalitems'] += int(request.POST['quantity'])

	return redirect('/confirm')

def confirm(request):
	return render(request, 'checkout/checkout.html')

def goback(request):
	return redirect('/')

def clear(request):
	request.session.clear()
	return redirect('/')