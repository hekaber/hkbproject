from django.db import models


class Messages(models.Model):
    id = models.AutoField(primary_key=True)
    author = models.CharField(max_length=255)
    content = models.TextField()

    class Meta:
        app_label = 'emailing'
        managed = True
        db_table = 'messages'
