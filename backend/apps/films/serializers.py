from rest_framework import serializers
from .models import Film, Trailer, Language, FilmImage, Genre
from apps.film_reviews.serializers import FilmReviewSerializer


class TrailerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Trailer
        fields = '__all__'


class LanguageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Language
        fields = '__all__'


class GenreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Genre
        fields = '__all__'


class FilmSerializer(serializers.ModelSerializer):
    review = FilmReviewSerializer(many=True)
    languages = LanguageSerializer(many=True)
    genres = GenreSerializer(many=True)
    trailer = TrailerSerializer(many=True)
    reviews = FilmReviewSerializer(many=True)

    class Meta:
        model = Film
        fields = (
            'name',
            'poster_file',
            'description',
            'film_file',
            'film_company',
            'producing_country',
            'producer',
            'premiere',
            'genres',
            'languages',
            'trailer',
            'reviews'
        )
