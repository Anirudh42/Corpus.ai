from django.shortcuts import render

# Create your views here.
#Test Change
def index(request):
    return render(request, 'home/index.html', context={})

