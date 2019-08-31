from django.shortcuts import render
from django.forms import forms
from django.shortcuts import redirect
import cv2
import sys
import pytesseract
import io
import numpy as np

#MODEL Code
# from deeppavlov import build_model, configs
# qna_model = build_model(configs.squad.squad, download=True)
# from summarizer import SingleModel
# sum_model = SingleModel()
corpus=''

#Set Corpus
def corpus(request):
    print("Inside cropis")
    corpus = request.POST['text']
    request.session['corpus'] = corpus
    return redirect('chatbot')

#Features Page For Upload Options
def features(request):
    corpus = request.session.get('corpus')
    print("Inside features")
    print(corpus)
    return render(request, 'features/index.html',context={'corpus':corpus})

#Camera Option renders Camera
def camera(request):
    return render(request, 'features/camera.html',context={})

#Renders Chatbot Page by getting summary,answer and corpus
def chatbot(request):
    answer = request.session.get('summarize')
    qna = request.session.get('answer')
    corpus = request.session.get('corpus')
    return render(request, 'chatbot/index.html',context={'corpus':corpus,'summarize':answer,'qna':qna})

#Summarizes the text given by calling model
def sumtext(request):
    corpus = request.session.get('corpus')
    # answer = ''.join(sum_model(corpus, min_length=30))
    request.session['summarize'] = 'Summary'
    return redirect('chatbot')
def qna(request):
    myform = forms.Form(request.POST, request.FILES)

    question = myform.files['text']
    corpus = request.session.get('corpus')
    # answer = ''.join(qna_model([corpus],[question]))
    request.session['answer'] = 'Answer'
    return 'answer'

#Converts Image into text and sets the corpus field
def image(request):
    print('Image is Available here...')
    myform = forms.Form(request.POST, request.FILES)
    print(myform.files)
    file1 = myform.files['image']
    img_str = file1.read()
    file1.close()
    config = ('-l eng --oem 1 --psm 3')
    nparr = np.fromstring(img_str, np.uint8)
    im = cv2.imdecode(nparr, cv2.IMREAD_COLOR)
    # Run tesseract OCR on image
    corpus = pytesseract.image_to_string(im, config=config)
    # print(corpus)
    request.session['corpus'] = 'Why'
    # Print recognized text
    return redirect('features')


#Convert Document and URL to text and set corpus and return corpus
# def doc2txt(request):
#     return 0

#def url2text(request):
