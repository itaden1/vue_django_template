from django.shortcuts import render
from django.views.generic import TemplateView

# Create your views here.
class AppView(TemplateView):
    template_name = "app.html"

app_view = AppView.as_view()