import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';
import { launchRaspberry } from './launchRaspberry';
import { stop } from './stop';
import { getSpeechToText } from './getSpeechToText';
import React, { useState } from 'react';
import { registerRootComponent } from 'expo';
import Toast from 'react-native-toast-message';




export default function App() {

  const updateSpeechToTextState = async () => {
    Toast.show({
      type: 'info',
      text1: 'Je vous écoute',
    });
    const data = await getSpeechToText();
    console.log(data);
    setSpeechToTextReponse(data);
  };

  const [speechToTextReponse, setSpeechToTextReponse] = useState('');

  return (
    <View style={styles.container}>
      <Image 
        source={require('./assets/esme.png')} 
        style={styles.img} 
      />

      <TouchableOpacity onPress={updateSpeechToTextState} style={styles.roundButton3}>
        <Image
          source={require('./assets/mic.png')}
          style={styles.image}
        />
      </TouchableOpacity>
      <Toast ref={ref => Toast.setRef=ref} />

      <TouchableOpacity
        onPress={function (){
          launchRaspberry()
        }}
        style={styles.roundButton1}>
        <Text style={styles.texte}>Lancement {"\n"} traduction</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={function (){
          stop()
        }}
        style={styles.roundButton2}>
        <Text style={styles.texte}>   Arrêter {"\n"}traduction</Text>
      </TouchableOpacity>
      
      <View style = {styles.separator}/>
      <Text style={styles.reponse}>{speechToTextReponse}</Text>

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
    width: 140,
    height: 140,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: 'green',
    position: 'absolute',
    left: 40,
    bottom: 480,
  },
  roundButton2: {
    width: 140,
    height: 140,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: 'red',
    position: 'absolute',
    right: 40,
    bottom: 480,
  },
  roundButton3: {
    width: 80,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 330,
  },
  texte: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  separator: {
    height: 3,
    width: '100%',
    backgroundColor: 'black',
    marginBottom: 50,
  },
  img: {
    position: 'absolute',
    top: 40, // Position the image at the top
    right: 10, // Position the image to the right
    width: 50, // Set the width of the image
    height: 50, // Set the height of the image
    width: 150,
    height: 150,

  },
  touchable:{
    width: 50, // Définissez la largeur de la zone cliquable
    height: 50, // Définissez la hauteur de la zone cliquable
  },
  image: {
    width: '100%', // Définissez la largeur de l'image sur 100% de la zone cliquable
    height: '100%', // Définissez la hauteur de l'image
  },
  reponse: {
    fontSize: 20,
    position: 'absolute',
    bottom: 150,
  }
});

registerRootComponent(App);
