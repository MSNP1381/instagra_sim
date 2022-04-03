from rest_framework import serializers
from .models import Post, Story


# from easy_thumbnails_rest.serializers import ThumbnailerSerializer
class PostSerializer(serializers.ModelSerializer):
    # image_url = ThumbnailerSerializer(alias='avatar')
    class Meta:
        model = Post
        fields = '__all__'


class StorySerializer(serializers.ModelSerializer):
    # image_url = ThumbnailerSerializer(alias='avatar')
    class Meta:
        model = Story
        fields = '__all__'
