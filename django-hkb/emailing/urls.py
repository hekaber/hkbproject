from django.contrib import admin
from django.urls import path
from emailing.views import mails

urlpatterns = [
    path('mails/', mails.MailsAPIView.as_view(), name="mails"),
]
