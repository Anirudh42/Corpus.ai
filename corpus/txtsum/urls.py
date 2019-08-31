from django.urls import path
from . import views

urlpatterns = [
    path('', views.features, name='features'),
    path('image', views.image, name='image'),
    path('camera', views.camera, name='camera'),
    path('sumtext', views.sumtext, name='sumtext'),
    path('qna', views.qna, name='qna'),
    path('chatbot', views.chatbot, name='chatbot'),
    
]