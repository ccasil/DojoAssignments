from django.conf.urls import url
from . import views
urlpatterns = [
	url(r'^$', views.index),
	url(r'^create$', views.create),
	url(r'^delete/(?P<id>\d+)$', views.delete),
	url(r'^destroy/(?P<id>\d+)$', views.destroy),
	url(r'^no$', views.no)
]