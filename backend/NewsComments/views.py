from django.shortcuts import render
from rest_framework import viewsets, mixins
from .models import NewsComment
from .serializers import NewsCommentSerializer
from Users.permissions import UserObjectOwnerOrCreatePermission


class NewsCommentViewSet(viewsets.GenericViewSet,
                         mixins.CreateModelMixin, mixins.UpdateModelMixin):
    queryset = NewsComment.objects.all()
    serializer_class = NewsCommentSerializer
    permission_classes = (UserObjectOwnerOrCreatePermission,)
