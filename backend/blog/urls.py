from django.urls import path
from .views import *

urlpatterns = [
    path('', PostListAPIView.as_view(), name='blog-home'),
    path('post/<int:pk>/', PostDetailAPIView.as_view(), name='post-detail'),
]