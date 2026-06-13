from django.urls import path
from .views import *

urlpatterns = [
    path('', ArticlesListAPIView.as_view(), name='blog-home'),
    path('article/<int:pk>/', ArticleDetailsAPIView.as_view(), name='article-details'),
]