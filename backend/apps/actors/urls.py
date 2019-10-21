from rest_framework.routers import DefaultRouter
from . import views
from django.urls import path
from django.conf.urls import include


router = DefaultRouter()
router.register(r'actors', views.ActorViewSet)

urlpatterns = [
    path('', include(router.urls))
]