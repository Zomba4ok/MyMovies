from django.db import models
from django.contrib.auth import get_user_model
from hashlib import md5
from. utils import *


User = get_user_model()


class Film(models.Model):
    name = models.CharField(max_length=50)
    poster_file = models.ImageField(upload_to=get_film_poster_address)
    description = models.TextField(blank=True, max_length=1000)
    average_rate = models.IntegerField(default=0)
    age_rate = models.IntegerField(blank=False)
    film_file = models.FileField(upload_to=get_film_address)
    film_company = models.CharField(max_length=50)
    producing_country = models.CharField(max_length=50)
    producer = models.CharField(max_length=50)
    duration = models.DurationField()
    premiere = models.DateField()
    views_count = models.IntegerField(default=0)
    visits_count = models.IntegerField(default=0)
#   to add actors model
#   solve problem with linking many parts of film, also solve it on frontend

    def __str__(self):
        return self.name


class Genre(models.Model):
    name = models.CharField(max_length=50)
    film = models.ManyToManyField(Film, related_name="genres")

    def __str__(self):
        return self.name


class Language(models.Model):
    name = models.CharField(blank=False, max_length=50)
    film = models.ManyToManyField(Film, related_name='languages')

    def __str__(self):
        return self.name


class Trailer(models.Model):
    name = models.CharField(max_length=50)
    trailer_file = models.ForeignKey(
        to=Film, on_delete=models.CASCADE, related_name='trailers')
    trailer = models.FileField(upload_to=get_film_trailer_address, null=True)
    description = models.TextField(max_length=200, blank=True)

    def __str__(self):
        return self.name


class FilmImage(models.Model):
    image_file = models.ImageField(upload_to=get_film_image_address)
    film = models.ForeignKey(
        to=Film, on_delete=models.CASCADE, related_name='images')
    description = models.TextField(blank=True, max_length=200)

    def __str__(self):
        return self.image.name
