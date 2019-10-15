from django.shortcuts import render
from .serializers import NewsSerializer
from rest_framework import generics, viewsets
from .models import News
from rest_framework.permissions import IsAuthenticated


class NewsViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = News.objects.all()
    serializer_class = NewsSerializer
    permission_classes = (IsAuthenticated,)
