from rest_framework import generics, permissions
from .serializers import *

AllowAny = permissions.AllowAny

class RegisterView(generics.CreateAPIView):
    serializer_class = UserRegistrationSerializer
    permission_classes = [AllowAny]

class CurrentUserView(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserRetrieveSerializer
    lookup_field = 'username'  # Optional: defaults to 'pk'