from .models import User
from .pagination import UserListPagination
from .permissions import UserAccountOwnerOrReadOnlyPermission
from .serializers import UserSerializer
from django.shortcuts import render
from rest_framework import mixins, generics
from rest_framework.permissions import AllowAny

# class UserViewSet(mixins.ListModelMixin, mixins.RetrieveModelMixin,
#                   mixins.UpdateModelMixin, viewsets.GenericViewSet):

#     queryset = User.objects.all()
#     serializer_class = UserSerializer
#     permission_classes = (UserAccountOwnerOrReadOnlyPermission,)

# To add user editing subject to protected fields.

class UserListNoAdminViews(
        mixins.ListModelMixin,
        mixins.CreateModelMixin,
        generics.GenericAPIView):
    queryset = User.objects.all()
    pagination_class = UserListPagination
    # serializer_class = 
    permission_classes = (AllowAny,)

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)
    

class UserDetailNoAdminViews(
        mixins.RetrieveModelMixin,
        mixins.UpdateModelMixin,
        mixins.DestroyModelMixin,
        generics.GenericAPIView):
    queryset = User.objects.all()

    def get(self, request, *args, **kwargs):
        return self.retrieve()


class UserDetailAdminViews():
    pass