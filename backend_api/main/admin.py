from django.contrib import admin
from . import models

# Register your models here.

admin.site.register(models.Vendor)
admin.site.register(models.ProductCategory)
admin.site.register(models.Product)
admin.site.register(models.Customer)
admin.site.register(models.Order)
admin.site.register(models.OrderItem)
admin.site.register(models.CustomerAddress)
admin.site.register(models.ProductRating)