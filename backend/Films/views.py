from django.shortcuts import render
from .serializers import (
    FilmSerializer, TrailerSerializer)
from .models import Film, Trailer
from rest_framework import generics, viewsets
from rest_framework.permissions import AllowAny, IsAuthenticated


class FilmViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Film.objects.all()
    serializer_class = FilmSerializer
    permission_classes = (AllowAny,)
