from django.conf.urls import url
from . import views
urlpatterns = [
	url(r'^$', views.index),
	url(r'^register$', views.register),
	url(r'^login$', views.login),
	url(r'^success$', views.success),
	url(r'^delete/(?P<id>\d+)$', views.delete),
	url(r'^wish_items/(?P<id>\d+)$', views.show),
	url(r'^newitem$', views.newitem),
	url(r'^add$', views.add),
	url(r'^removefrom/(?P<id>\d+)$', views.removefrom),
	url(r'^addto/(?P<id>\d+)$', views.addto),
	url(r'^logout$', views.logout)
]