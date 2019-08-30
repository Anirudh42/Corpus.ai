from django.shortcuts import render
from django.forms import forms
from django.shortcuts import redirect
import cv2
import sys
import pytesseract
import io
import numpy as np
corpus=''
# Create your views here.
def features(request):
    corpus1 = request.session.get('corpus')
    print("Inside features")
    print(corpus1)
    return render(request, 'features/index.html',context={'corpus':corpus1})

def camera(request):
    return render(request, 'features/camera.html',context={})


def chatbot(request):
    corpus2 = request.session.get('corpus')
    print("Inside Chatbot")
    print(corpus2)
    return render(request, 'chatbot/index.html', context={'corpus': corpus2})


def image(request):
    print('Image is Available here...')
    myform = forms.Form(request.POST, request.FILES)
    file1 = myform.files['image']
    img_str = file1.read()
    file1.close()
    config = ('-l eng --oem 1 --psm 3')
    nparr = np.fromstring(img_str, np.uint8)
    im = cv2.imdecode(nparr, cv2.IMREAD_COLOR)
    # Run tesseract OCR on image
    corpus = pytesseract.image_to_string(im, config=config)
    print(corpus)
    request.session['corpus'] = corpus
    # Print recognized text
    return redirect('features')

# def doc2txt(request):
#     return 0
