from django.db import models
from django.contrib.auth.models import User

# Create your models here.

#Vendor Model
class Vendor(models.Model):
    vendor = models.ForeignKey(User, on_delete=models.CASCADE)
    address = models.TextField(null=True)

    def __str__(self):
        return self.vendor.username

#Products Category
class ProductCategory(models.Model):
    title = models.CharField(max_length=200)
    detail = models.TextField(null=True)

    def __str__(self):
        return self.title
    
#Products
class Product(models.Model):
    vendor = models.ForeignKey(Vendor, on_delete=models.SET_NULL, null=True)
    category = models.ForeignKey(ProductCategory, on_delete=models.SET_NULL, null=True, related_name='product_categories')
    title = models.CharField(max_length=200)
    detail = models.TextField(null=True)
    price = models.FloatField()

    def __str__(self):
        return self.title

#Customer
class Customer(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    tel = models.PositiveBigIntegerField()

    def __str__(self):
        return self.user.username
    
#Order
class Order(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.SET_NULL, null=True)
    order_time = models.DateTimeField(auto_now_add=True)
    
#Order Item
class OrderItem(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE, related_name='order_items')
    product = models.ForeignKey(Product, on_delete=models.CASCADE)

    def __str__(self):
        return self.product.title
    
#Customer's Address
class CustomerAddress(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE, related_name='customer_address')
    address = models.TextField()
    default_address = models.BooleanField(default=False)

    def __str__(self):
        return self.address
    
#Product Rating and Review
class ProductRating(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE, related_name='customer_ratings')
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='product_ratings')
    ratings = models.IntegerField()
    reviews = models.TextField()
    time_added = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.reviews} \n {self.ratings}'