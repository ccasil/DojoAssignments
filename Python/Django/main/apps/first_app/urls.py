from django.conf.urls import url
#gives access to the function url
from . import views 
#explicitly imports views.py in the current folder

urlpatterns = [
	url(r'^$', views.index)
]