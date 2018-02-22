from django.conf.urls import url
from . import views
urlpatterns = [
	url(r'^$', views.index),
	url(r'^new$', views.new),
	url(r'^(?P<id>\d+)/edit$', views.edit),
	url(r'^(?P<id>\d+)/show$', views.show),
	url(r'^create$', views.create),
	url(r'^(?P<id>\d+)/destroy$', views.destroy),
	url(r'^update/(?P<id>\d+)$', views.update),
	url(r'^goback$', views.goback)
]