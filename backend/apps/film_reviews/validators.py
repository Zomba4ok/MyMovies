from django.core import validators
from django.core.exceptions import ValidationError


def validate_mark(mark):
    if not mark in (1, 2, 3, 4, 5):
        raise ValidationError("Mark must be one of 1/2/3/4/5 numbers")
