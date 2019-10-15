from django.shortcuts import render
from rest_framework import viewsets, mixins
from .models import User
from .serializers import UserSerializer
from .permissions import UserAccountOwnerOrReadOnlyPermission


class UserViewSet(mixins.ListModelMixin, mixins.RetrieveModelMixin,
                  mixins.UpdateModelMixin, viewsets.GenericViewSet):

    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (UserAccountOwnerOrReadOnlyPermission,)

# To add user editing subject to protected fields.
