from django.db import models
from django.contrib.auth import get_user_model
from hashlib import md5

User = get_user_model()

# Try to create general get_address function


def get_news_image_address(instance, filename):
    hashed_filename = md5(instance.ID)
    new_filename = 'img_' + hashed_filename.hexdigest()
    return 'News/{}/{}/Images/{}'.format(
        new_filename[0:1],
        new_filename[2:3],
        new_filename)


class News(models.Model):
    title = models.CharField(max_length=50)
    description = models.CharField(max_length=200)
    context = models.TextField()
    publication_date = models.DateField(auto_now=True)

    def __str__(self):
        return self.title


class NewsImage(models.Model):
    image_file = models.ImageField(upload_to=get_news_image_address)
    news = models.ForeignKey(
        to=News, on_delete=models.CASCADE, related_name='image')
    description = models.CharField(blank=True, max_length=200)

    def __str__(self):
        return self.description[:10]


class NewsManeImage(models.Model):
    image_file = models.ImageField(upload_to=get_news_image_address)
    news = models.ForeignKey(
        to=News, on_delete=models.CASCADE, related_name='main_image')
    description = models.CharField(blank=True, max_length=200)

    def __str__(self):
        return self.description[:10]
