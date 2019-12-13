from django.contrib import admin
from django.urls import path
from django.urls import include
from django.contrib.auth import get_user_model
from rest_framework.routers import DefaultRouter
from .views import UserViewSet

User = get_user_model()

router = DefaultRouter()
router.register(r'users', UserViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
