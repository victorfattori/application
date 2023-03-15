# -*- coding: utf-8 -*-
"""
Created on Thu Mar  2 13:15:23 2023

@author: victo
"""

from flask import Flask, request, jsonify
import json
import speech_recognition as sr

import os
global data 

app = Flask(__name__)
@app.route('/', methods=['POST', 'GET'])
def hello_world():

    data = request.data.decode('utf-8')
    print('Received data:', data)
    if (data == "Hello"):
         raspberry()
         return ""

    if (data == 'parler'):
        parler()
    
    if (a != ""):
        return a 
    else:
        return ""

        
def raspberry():
    print("lancement code raspberry")
    
def parler():
    global a
    # Créer un objet de reconnaissance vocale
    r = sr.Recognizer()
    
    # Enregistrer l'audio à partir du microphone
    with sr.Microphone() as source:
        print("Parlez maintenant...")
        audio = r.listen(source)
    
    # # Reconnaissance vocale avec Google
    try:
        a = r.recognize_google(audio, language="fr-FR")
        print("Reconnaissance vocale : " + a)
        return a
        #request.get('http://192.168.1.16:1300', a)
    except sr.UnknownValueError:
        print("Google Speech Recognition n'a pas pu comprendre l'audio")
    except sr.RequestError as e:
        print("Impossible d'obtenir la reconnaissance vocale de Google; {0}".format(e))
    

if __name__ == '__main__':
    app.run(host='192.168.1.153', port=1300)



