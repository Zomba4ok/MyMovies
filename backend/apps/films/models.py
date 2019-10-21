from .validators import validate_film_file_type
from apps.actors.models import Actor
from apps.utils import SetAddressFunctionsClass
from django.contrib.auth import get_user_model
from django.db import models

User = get_user_model()


class Genre(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name


class Language(models.Model):
    name = models.CharField(blank=False, max_length=50)

    def __str__(self):
        return self.name


class Film(models.Model):
    actors = models.ManyToManyField(Actor, related_name='films')
    age_rate = models.IntegerField(blank=False)
    average_rate = models.IntegerField(default=0)
    company = models.CharField(max_length=50)
    description = models.TextField(blank=True, max_length=1000)
    duration = models.DurationField()
    film_file = models.FileField(
        upload_to=SetAddressFunctionsClass(
            file_type_name='flm',
            file_family_name='films',
            file_subfamily_name=''
        ).set_address_for_file_field,
        validators=[validate_film_file_type],
        null=True)
    genres = models.ManyToManyField(Genre, related_name='films')
    languages = models.ManyToManyField(Language, related_name='films')
    name = models.CharField(max_length=50)
    poster_file = models.ImageField(
        upload_to=SetAddressFunctionsClass(
            file_type_name='pst',
            file_family_name='films',
            file_subfamily_name=''
        ).set_address_for_file_field,
        null=True)
    premiere = models.DateField()
    producer = models.CharField(max_length=50)
    producing_country = models.CharField(max_length=50)
    views_count = models.IntegerField(default=0)
    visits_count = models.IntegerField(default=0)
#   solve problem with linking many parts of film

    def __str__(self):
        return self.name


class Trailer(models.Model):
    name = models.CharField(max_length=50)
    film = models.ForeignKey(
        to=Film, on_delete=models.CASCADE, related_name='trailers', null=True)
    trailer_file = models.FileField(
        upload_to=SetAddressFunctionsClass(
            file_type_name='trailer',
            file_family_name='films',
            file_subfamily_name='trailers'
        ).set_address_for_file_field,
        null=True)
    description = models.TextField(max_length=200, blank=True)

    def __str__(self):
        return self.name


class FilmImage(models.Model):
    image_file = models.ImageField(
        upload_to=SetAddressFunctionsClass(
            file_type_name='image',
            file_family_name='films',
            file_subfamily_name='images'
        ).set_address_for_file_field,
        null=True)
    film = models.ForeignKey(
        to=Film, on_delete=models.CASCADE, related_name='images', null=True)
    description = models.TextField(blank=True, max_length=200)

    def __str__(self):
        return self.image_file.name