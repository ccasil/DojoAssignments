# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render, HttpResponse, redirect
from time import gmtime, strftime, localtime
# Create your views here.
def index(request):
	return render(request, 'session_words/index.html')

def add_word(request):
	if request.method == 'POST':
		if not 'word' in request.POST:
			word = ""
		else:
			word = request.POST['word']
		if not 'color' in request.POST:
			color = 'black'
		else:
			color = request.POST['color']
		if not 'bigfont' in request.POST:
			bigfont = "16px"
		else:
			bigfont = "22px"
			
		if not 'wordlist' in request.session:
			request.session['wordlist'] = []

		data = {
			'word' : word,
			'color' :color,
			'bigfont' : bigfont,
			'time' : strftime('%I:%M %p, %B %d %Y', localtime())
		}
		wordlist = request.session['wordlist']
		wordlist.append(data)
		request.session['wordlist'] = wordlist
	return redirect('/session_words')

def clear(request):
	request.session.clear()
	return redirect('/session_words')