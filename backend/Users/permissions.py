from rest_framework.permissions import (
    AllowAny, BasePermission, IsAdminUser, IsAuthenticated, SAFE_METHODS
)


class UserObjectOwnerOrCreatePermission(BasePermission):
    my_safe_methods = ('POST', 'PUT')

    def has_permission(self, request, view):
        if request.method in SAFE_METHODS or (request.user.IsAuthenticated and request.method in my_safe_methods):
            return True
        return False

    def has_object_permission(self, request, view, obj):
        if request.method in SAFE_METHODS:
            return True
        return obj.user == request.user


class UserAccountOwnerOrReadOnlyPermission(BasePermission):

    def has_object_permission(self, request, view, obj):
        if request.method in SAFE_METHODS:
            return True
        return obj == request.user


class UserSubscribePermission(BasePermission):

    def has_permission(self, request, view):
        if request in SAFE_METHODS or request.user.is_subscribed:
            return True

    def has_object_permission(self, request, view, obj):
        if request.method in SAFE_METHODS:
            return True
        return (request.user.is_subscribed and obj.user == request.user)
