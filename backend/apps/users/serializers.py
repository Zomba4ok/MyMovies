from .models import User
from django.conf import settings
from django.contrib.staticfiles.templatetags.staticfiles import static
from djoser import constants
from djoser.serializers import UserCreateSerializer
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):

    avatar = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = (
            'avatar',
            'birthday',
            'country',
            'email',
            'first_name',
            'last_name',
            'is_subscribed',
            'username',
            'user_permission',
            'reviews_number',
            'subscribe_end'
        )

    def create(self, validated_data):
        return User.objects.create_user(**validated_data)

    # def get_avatar(self, obj):
    #     url = obj.avatar.url if obj.avatar else static(settings.BLANK_PHOTO)
    #     request = self.context.get("request", None)
    #     if request is not None:
    #         return request.build_absolute_uri(url)
    #     return url
