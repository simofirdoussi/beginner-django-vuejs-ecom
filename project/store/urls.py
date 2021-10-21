from django.urls import path
from . import views

urlpatterns = [
    path('all-products/', views.ProductList.as_view()),
]