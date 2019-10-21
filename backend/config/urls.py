from django.contrib import admin
from django.urls import path
from django.urls import include
from django.contrib.auth import get_user_model
from django.conf.urls.static import static
from django.conf import settings

User = get_user_model()


apipatterns = [
    path('', include('apps.users.urls')),
    path('', include('apps.films.urls')),
    path('', include('apps.actors.urls'))
]


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include((apipatterns, 'api'), namespace='api'))
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
