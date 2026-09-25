# 👤 accounts/models.py — sample structure placeholder
# Real models live in the private main-be repository.

# from django.contrib.auth.models import AbstractUser
# from django.db import models
#
# class User(AbstractUser):
#     """Custom user model with role + clinic linkage."""
#     role = models.CharField(max_length=32)
#     clinic = models.ForeignKey("clinic.Clinic", on_delete=models.SET_NULL, null=True)
#
# class OTPSession(models.Model):
#     """One-time password verification session."""
#     phone = models.CharField(max_length=20)
#     code_hash = models.CharField(max_length=128)
#     attempts = models.IntegerField(default=0)
#     expires_at = models.DateTimeField()
