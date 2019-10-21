from .models import Actor
from rest_framework import serializers

class ActorSerializer(serializers.Serializer):

    class Meta:
        model = Actor
        fields = '__all__'