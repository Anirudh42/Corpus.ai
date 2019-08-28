from django.urls import path
from . import views

urlpatterns = [
    path('', views.features, name='features'),
    # path('home/features/', views.features, name='features'),
]