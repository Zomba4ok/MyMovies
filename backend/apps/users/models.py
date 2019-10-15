import datetime
from django.db import models
from django.core.mail import send_mail
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from datetime import timedelta
from time import clock
from .validators import UsernameValidator, validate_birthday
from hashlib import md5


# add favorites films
def get_avatar_address(instance, filename):
    hashed_filename = md5(instance.username)
    return 'Images/{}/{}/{}'.format(
        hashed_filename.hexdigest()[0:1],
        hashed_filename.hexdigest()[2:3],
        hashed_filename.hexdigest())


class UserManager(BaseUserManager):
    user_in_migrations = True

    def _create_user(self, email, username, full_name,
                     birthday, password, **extra_fields):

        if not email:
            raise ValueError("The given email must be set")
        if not username:
            raise ValueError("The given username must be set")
        if not birthday:
            raise ValueError("The given birthday must be set")

        email = self.normalize_email(email)
        username = self.model.normalize_username(username)
        user = self.model(
            email=email,
            username=username,
            birthday=birthday,
            **extra_fields
        )
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_user(self, email, username, full_name, birthday,
                    password, **extra_fields):

        extra_fields.setdefault("is_staff", False)
        extra_fields.setdefault("is_superuser", False)
        return self._create_user(
            email, username, birthday, password, **extra_fields
        )

    def create_superuser(self, email, username, full_name, birthday,
                         password, **extra_fields):

        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)
        extra_fields.setdefault("is_active", True)

        if extra_fields.get("is_staff") is not True:
            raise ValueError("Superuser must have is_staff = True.")
        if extra_fields.get("is_superuser") is not True:
            raise ValueError("Superuser must have is_superuser = True.")
        if extra_fields.get("is_active") is not True:
            raise ValueError("Superuser must have is_active = True.")

        return self._create_user(
            email, username, full_name, birthday, password, **extra_fields
        )


class UserPermission(models.Model):
    category_name = models.CharField(max_length=50, default="user")

    def __str__(self):
        return self.category_name


class User(AbstractBaseUser, PermissionsMixin):
    username_validators = UsernameValidator()

    username = models.CharField(
        db_index=True,
        max_length=50,
        unique=True,
        validators=[username_validators],
        error_messages={'unique': 'This username is already taken.'})
    avatar = models.ImageField(upload_to=get_avatar_address)
    email = models.EmailField(
        db_index=True,
        unique=True,
        error_messages={'unique': 'This email address is already used.'})
    full_name = models.CharField(max_length=255)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    birthday = models.DateField(validators=[validate_birthday])
    country = models.CharField(max_length=50)
    is_active = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    is_subscribed = models.BooleanField(default=False)
    subscribe_start = models.DateField(null=True)
    subscribe_end = models.DateField(null=True)
    user_permission = models.ForeignKey(to=UserPermission, on_delete=models.DO_NOTHING, related_name='user_permission', null=True)
    reviews_number = models.IntegerField(default=0)
    objects = UserManager()

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email', 'full_name', 'birthday']

    def __str__(self):
        return self.username

    def get_short_name(self):
        return self.username

    def get_full_name(self):
        return self.full_name

    def email_user(self, subject, message, from_email=None, **kwargs):
        send_mail(subject, message, from_email, [self.email], **kwargs)

    def add_subscribe(self, duration):
        if not self.is_subscribed:
            self.is_subscribed = True
            self.subscribe_start = datetime.date.today()
        self.subscribe_end += datetime.date(days=30 * duration)

    def add_review(self):
        self.reviews_number += 1

    def del_review(self):
        self.reviews_number -= 1
