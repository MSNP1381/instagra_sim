from django.contrib import admin
from django.urls import include, path
from posts.views import GetPosts, like,Stories
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('posts', GetPosts.as_view()),
    path('stories', Stories.as_view()),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('posts/like/<int:pk>', like),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)
