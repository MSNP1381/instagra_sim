from io import BytesIO
from django.conf import settings
from django.db import models
import base64
from imagekit.models import ImageSpecField
from imagekit.processors import ResizeToFill


# Create your models here.
class Post(models.Model):
    caption = models.CharField(max_length=4000)
    likes = models.IntegerField(default=0, blank=True)
    is_liked = models.BooleanField(default=False, blank=True)
    date = models.DateTimeField(auto_now_add=True)
    image_url = models.ImageField(upload_to='images', blank=True)
    author = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
    )

    def __str__(self):
        return self.caption + ' | ' + str(self.likes)


class Story(models.Model):
    title = models.CharField(max_length=100)
    image = models.ImageField(upload_to='images')
    image_thumbnail=ImageSpecField(source='image',
                                      processors=[ResizeToFill(100, 50)],
                                      format='JPEG',
                                      options={'quality': 60})
    author = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
    )
