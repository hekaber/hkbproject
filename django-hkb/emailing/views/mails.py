from rest_framework.response import Response
from rest_framework.views import APIView

class MailsAPIView(APIView):

    def get(self, request):
        response = { 'message': 'yop'}
        return Response(response)
