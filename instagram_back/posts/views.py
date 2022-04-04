from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from .models import Post, Story
from rest_framework.response import Response
from .serializers import PostSerializer, StorySerializer
from rest_framework import status


class GetPosts(APIView):
    def get(self, req):
        data = Post.objects.all()
        serialized = PostSerializer(data, many=True)
        return Response(serialized.data)

    def post(self, request):
        serializer = PostSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def like(req, pk):
    if req.method == "POST":
        obj = Post.objects.get(pk=pk)
        serialized = PostSerializer(obj)
        print(req.data)
        if (req.data == 1 and obj.is_liked) or (req.data == -1 and not obj.is_liked):
            return Response(serialized.data, status=status.HTTP_400_BAD_REQUEST)
        obj.is_liked = req.data == 1
        obj.likes += req.data
        obj.save()
    return Response(serialized.data)


class Stories(APIView):
    def get(self, req):
        data = Story.objects.all()
        serialized = StorySerializer(data, many=True)
        return Response(serialized.data)

    def post(self, request):
        print(request.data)
        print(100*"#")
        serializer = StorySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
