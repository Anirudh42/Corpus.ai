from django.shortcuts import render

# Create your views here.
def features(request):
    return render(request, 'features/index.html', context={})
