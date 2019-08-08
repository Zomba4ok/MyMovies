from rest_framework import serializers
from .models import FilmReview


class FilmReviewSerializer(serializers.Serializer):
    class Meta:
        model = FilmReview
        fields = '__all__'