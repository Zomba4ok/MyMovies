from apps.utils import SetAddressFunctionsClass
from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()


class News(models.Model):
    title = models.CharField(max_length=50)
    description = models.CharField(max_length=200)
    context = models.TextField()
    publication_date = models.DateField(auto_now=True)

    def __str__(self):
        return self.title


class NewsImage(models.Model):
    image_file = models.ImageField(
        upload_to=SetAddressFunctionsClass(
            file_type_name='img',
            file_family_name='news',
            file_subfamily_name='images'
        ).set_address_for_file_field)
    news = models.ForeignKey(
        to=News, on_delete=models.CASCADE, related_name='image')
    description = models.CharField(blank=True, max_length=200)

    def __str__(self):
        return self.description[:10]


class NewsMainImage(models.Model):
    image_file = models.ImageField(
        upload_to=SetAddressFunctionsClass(
            file_type_name='m_img',
            file_family_name='news',
            file_subfamily_name=''
        ).set_address_for_file_field)
    news = models.ForeignKey(
        to=News, on_delete=models.CASCADE, related_name='main_image')
    description = models.CharField(blank=True, max_length=200)

    def __str__(self):
        return self.description[:10]
