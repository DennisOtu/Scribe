from rest_framework import generics
from .models import *
from .serializers import *
from rest_framework.pagination import PageNumberPagination

class ArticlesListAPIView(generics.ListCreateAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    pagination_class = PageNumberPagination

class ArticleDetailsAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer