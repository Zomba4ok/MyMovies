from django.core import validators
from django.core.exceptions import ValidationError
from django.utils.deconstruct import deconstructible
from django.utils.translation import gettext_lazy as _
from magic import from_file


_avaliable_video_types = ['ISO media','WebM']


def validate_film_file_type(file):
    if not from_file(file).split(',')[0] in avaliable_video_types:
        raise ValidationError("Incorrect file type")

