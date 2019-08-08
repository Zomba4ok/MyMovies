from django.shortcuts import render
from rest_framework import viewsets
from Users.permissions import UserSubscribePermission
from .models import FilmReview
from .serializers import FilmReviewSerializer

class FilmReviewViewset(viewsets.ReadOnlyModelViewSet):
    queryset = FilmReview.objects.all()
    serializer_class = FilmReviewSerializer
    permission_classes = (UserSubscribePermission,)


#    @action(detail=True, methods=['post'])
#    def rate(self, request, *args, **kwargs):
#        film = self.get_object()
#        mark = Mark.objects.get(pk=request.value)
#        film.marks.add(mark)
#        film.save()
#        return Response()

# class RateFilmView(generics.UpdateAPIView):
#      # set minimal time beetwen marks
#     queryset = Mark.objects.all()
#     serializer_class = MarkSerializer
#     permission_classes = (IsAuthenticated,)
