from rest_framework import serializers
from .models import News, NewsImage


class NewsImageSerializer(serializers.Serializer):
    class Meta:
        model = NewsImage
        fields = '__all__'


class NewsSerializer(serializers.Serializer):
    image = NewsImageSerializer(many=True)

    class Meta:
        model = News
        fields = (
            'title',
            'description',
            'context',
            'image',
            'date'
        )
