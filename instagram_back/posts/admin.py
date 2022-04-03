from turtle import pos
from django.contrib import admin
from .models import Post,Story
# Register your models here.
admin.site.register(Post)
admin.site.register(Story)