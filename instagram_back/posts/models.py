from io import BytesIO
from django.conf import settings
from django.db import models
import base64
from sorl.thumbnail import ImageField

# Create your models here.
class Post(models.Model):
    caption = models.CharField(max_length=4000)
    likes = models.IntegerField()
    is_liked = models.BooleanField(default=False)
    date = models.DateTimeField(auto_now_add=True)
    image_url = models.ImageField(upload_to='images')
    author = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
    )

    def __str__(self):
        return self.caption + ' | ' + str(self.likes)


class Story(models.Model):
    title = models.CharField(max_length=100)
    image = ImageField(upload_to='images')
    author = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
    )
