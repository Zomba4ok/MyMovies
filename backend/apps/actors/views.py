from .models import Actor
from .serializers import ActorSerializer
from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.permissions import AllowAny



class ActorViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Actor.objects.all()
    serializer_class = ActorSerializer
    permission_classes = (AllowAny, )