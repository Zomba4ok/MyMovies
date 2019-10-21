from django.db import models
from django.contrib.auth import get_user_model
from apps.news.models import News
from mptt.models import MPTTModel, TreeForeignKey


User = get_user_model()


class NewsComment(MPTTModel):
    user = models.ForeignKey(
        to=User, on_delete=models.CASCADE, related_name='comment', null=True)
    news = models.ForeignKey(
        to=News, on_delete=models.CASCADE, related_name='news', null=True)
    parent = TreeForeignKey('self', on_delete=models.CASCADE,
                            null=True, blank=True, related_name='children')
    is_deleted = models.BooleanField(default=False)
    publication_date = models.DateField(auto_now=True)
    context = models.TextField(blank=False)

    def __str__(self):
        return self.context[:20]
