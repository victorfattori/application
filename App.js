import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { requete } from './requete';
import { stop } from './stop';
import { parler, a, recup } from './parler';
import React, { useState, useEffect } from 'react';
import { recuperation } from './recuperation';
import { chaine, data } from './chaine';




export default function App() {
  const buttonClickedHandler = () => {
    console.log('You have been clicked a button!');
    // do something
  };


  
  const displayMessage = () => {
    //setMessage(a);
    console.log(a);
    msg = parler();
    console.log(msg);
  };

  const logData = () => {
    parler().then(data => console.log(data));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titre}>Accueil</Text>
      <TouchableOpacity
        onPress={function (){
          displayMessage()
        }}
        style={styles.roundButton4}>
          <Text style={styles.texte}>Recuperation</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={function (){
          requete()
        }}
        style={styles.roundButton1}>
        <Text style={styles.texte}>Lancement traduction</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={function (){
          stop()
        }}
        style={styles.roundButton2}>
        <Text style={styles.texte}>Arrêter traduction</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress= {logData}
        style={styles.roundButton3}>
        <Text style={styles.texte}>Vocal</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  roundButton1: {
    width: 220,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: 'green',
    position: 'absolute',
    bottom: 500,
  },
  roundButton2: {
    width: 220,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: 'red',
    position: 'absolute',
    bottom: 350,
  },
  roundButton3: {
    width: 220,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: 'blue',
    position: 'absolute',
    bottom: 200,
  },
  roundButton4: {
    width: 220,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: 'orange',
    position: 'absolute',
    bottom: 50,
  },
  button: {
    backgroundColor: '#4CAF50',
    borderRadius: 5,
    padding: 10,
    margin: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
  },
  texte: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  texte2: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'black',
  },
  titre: {
    fontSize: 30,
    fontWeight: 'bold',
    position: 'absolute',
    bottom: 700,
  },
  titre2: {
    fontSize: 30,
    fontWeight: 'bold',
    position: 'absolute',
    bottom: 650,
  }
});
