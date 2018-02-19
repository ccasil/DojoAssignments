# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, HttpResponse, redirect
from time import gmtime, strftime
def index(request):
	context = {
		"time": strftime("%B %d, %Y %H:%M %p", gmtime())
		# http://strftime.org/
	}
	return render(request,'time_display/index.html', context)