from django.db import models

class Post(models.Model):
    title = models.CharField(max_length=100)  # For the short note
    image = models.ImageField(upload_to='images/')  # Uploads images to 'media/images/'
    creator = models.CharField(max_length=100)  # For the username
    created_at = models.DateTimeField(auto_now_add=True)  # Automatically set the date

    def __str__(self):
        return self.title
