from django.urls import path
from .views import *

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('profile/<str:username>/', CurrentUserView.as_view(), name='profile'),
]