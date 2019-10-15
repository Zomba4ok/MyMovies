from rest_framework import serializers
from .models import NewsComment


class NewsCommentSerializer(serializers.Serializer):
    class Meta:
        model = NewsComment
        fields = '__all__'
