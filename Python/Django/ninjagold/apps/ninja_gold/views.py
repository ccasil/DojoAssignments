# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect, HttpResponse
import random
# Create your views here.
def index(request):
	if "gold" in request.session:
		request.session["gold"] = request.session['gold']
	else:
		request.session["gold"] = 0
	return render(request, 'ninja_gold/index.html')

def process_money(request):
	if "message" not in request.session:
		request.session["message"] = []

	if request.POST['building'] == "farm":
		request.session["rand"] = random.randrange(10,21)
		request.session["gold"] += request.session["rand"]
		request.session["message"].append("Earned "+ str(request.session["rand"])+ " gold from the farm!")
	elif request.POST['building'] == "cave":
		request.session["rand"] = random.randrange(5,11)
		request.session["gold"] += request.session["rand"]
		request.session["message"].append("Earned "+ str(request.session["rand"])+ " gold from the cave!")
	elif request.POST['building'] == "house":
		request.session["rand"] = random.randrange(2,6)
		request.session["gold"] += request.session["rand"]
		request.session["message"].append("Earned "+ str(request.session["rand"])+ " gold from the house!")
	elif request.POST['building'] == "casino":
		request.session["rand"] = random.randrange(-50,50)
		request.session["gold"] += request.session["rand"]
		request.session["message"].append("Earned "+ str(request.session["rand"])+ " gold from the casino!")
	return redirect ('/')

def reset(request):
	request.session["gold"] = 0
	request.session["message"] = []
	return redirect ('/')