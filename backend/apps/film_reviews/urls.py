from rest_framework.routers import DefaultRouter
from .views import FilmReviewViewset


router = DefaultRouter()
router.register(r'comm')