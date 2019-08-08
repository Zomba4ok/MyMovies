from rest_framework.routers import DefaultRouter
from .views import NewsCommentViewSet


router = DefaultRouter()
router.register(r'news-comments', NewsCommentViewSet)

#python-obscene-words-filter(russian)