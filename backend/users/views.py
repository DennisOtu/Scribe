from rest_framework import generics, permissions
from .serializers import *

AllowAny = permissions.AllowAny

class SignUpView(generics.CreateAPIView):
    serializer_class = UserSignUpSerializer
    permission_classes = [AllowAny]

class ProfileView(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserProfileSerializer
    lookup_field = 'username'  # Optional: defaults to 'pk'