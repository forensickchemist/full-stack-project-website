from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Product(models.Model):
    product_name = models.CharField(max_length=255)
    product_price = models.DecimalField(max_digits=10, decimal_places=2)
    brand = models.CharField(max_length=255)
    description = models.TextField()
    countInStock = models.IntegerField()
    image = models.ImageField(upload_to='products_images/')
    createdAt = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.product_name
    
class CartUser(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    qty = models.IntegerField()
    createdAt = models.DateField(auto_now_add=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

class PaymentMethod(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    total_price = models.DecimalField(decimal_places=2, max_digits=10)
    is_paid = models.BooleanField(default=False)
    paid_at = models.DateField()
    paymongo_payment_id = models.CharField(max_length=255)
    paymongo_status = models.CharField(max_length=255)

class ShippingAddress(models.Model):
    payment = models.ForeignKey(PaymentMethod, on_delete=models.CASCADE)
    full_name = models.CharField(max_length=255)
    address = models.CharField(max_length=255)
    city = models.CharField(max_length=100)
    postal_code = models.CharField(max_length=20)
    country = models.CharField(max_length=100)

class OrderItem(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    payment = models.ForeignKey(PaymentMethod, on_delete=models.CASCADE)
    qty = models.IntegerField()
    price = models.DecimalField(decimal_places=2, max_digits=10)
