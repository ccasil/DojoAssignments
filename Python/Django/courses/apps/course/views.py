# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect
from .models import Course

# Create your views here.
def index(request):
	data = {
		'course': Course.objects.all()
	}
	return render(request, "course/index.html", data)

def create(request):
	course_name = request.POST['course_name']
	desc = request.POST['desc']
	Course.objects.create(course_name=course_name, desc=desc)
	return redirect('/')

def delete(request,id):
	data = {
		'course': Course.objects.get(id=id)
	}
	return render(request, 'course/destroy.html', data)

def destroy(request,id):
	z = Course.objects.get(id=id)
	z.delete()
	return redirect('/')

def no(request):
	return redirect('/')