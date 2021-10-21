from django.shortcuts import render
from .models import Product
from .serializers import ProductSerializer

from rest_framework.response import Response
from rest_framework.views import APIView

# Create your views here.


class ProductList(APIView):
    def get(self, request, format=None):
        products =  Product.objects.all()
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)