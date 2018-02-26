from django.conf.urls import url
from . import views
urlpatterns = [
	url(r'^$', views.index),
	url(r'^register$', views.register),
	url(r'^login$', views.login),
	url(r'^books$', views.books),
	url(r'^add$', views.add),
	url(r'^logout$', views.logout),
	url(r'^addnewbook$', views.addnewbook),
	url(r'^showbook/(?P<id>\d+)$', views.showbook),
	url(r'^addnewreview$', views.addnewreview),
	url(r'^users/(?P<id>\d+)$', views.users)
]