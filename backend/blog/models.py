from django.db import models
from django.utils import timezone
#from django.urls import reverse

class Article(models.Model):
    author = models.CharField(max_length=100)
    date = models.DateTimeField(default=timezone.now)
    category = models.CharField(max_length=50)
    section = models.CharField(max_length=50)
    url = models.CharField(max_length=200)
    title = models.CharField(max_length=200)
    description = models.CharField(max_length=250)
    keywords = models.CharField(max_length=250)
    content = models.TextField()

    def __str__(self):
        return self.title

#    def get_absolute_url(self):
#        return reverse('article-details', kwargs={'pk': self.pk})
