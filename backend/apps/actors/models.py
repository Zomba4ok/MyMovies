from apps.utils import SetAddressFunctionsClass
from django.db import models

class Actor(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    country = models.CharField(max_length=50)
    avatar = models.ImageField(
        upload_to=SetAddressFunctionsClass(
            file_type_name='avt',
            file_family_name='actors',
            file_subfamily_name=''
        ).set_address_for_file_field, 
        blank=True)
    descripption = models.TextField(blank=True, max_length=1000)

    def get_fullname(self):
        return self.first_name + ' ' + self.last_name 



class ActorImage(models.Model):
    image = models.ImageField(
        upload_to=SetAddressFunctionsClass(
            file_type_name='img',
            file_family_name='actors',
            file_subfamily_name='images'
        ).set_address_for_file_field)
    actor = models.ForeignKey(
        to=Actor, on_delete=models.CASCADE, related_name='images', null=True)
    description = models.TextField(blank=True, max_length=200)

    def __str__(self):
        return self.image.name

