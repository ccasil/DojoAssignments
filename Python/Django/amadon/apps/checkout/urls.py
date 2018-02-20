from django.conf.urls import url
from . import views
urlpatterns = [
	url(r'^$', views.index),
	url(r'^buy$', views.buy),
	url(r'^confirm$', views.confirm),
	url(r'^goback$', views.goback),
	url(r'^clear$', views.clear)
]