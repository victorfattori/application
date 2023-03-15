import { parler } from './parler';

export function recuperation () {
    //const newVar = reponse;
    //console.log(newVar);
    //setMyVariable(newVar);
    //console.log(reponse);
    parler().then((data) => {
      console.log(data);
    
  });
}

/*
export function recuperation () {
    //const newVar = reponse;
    //console.log(newVar);
    //setMyVariable(newVar);
    console.log(data);
    //console.log(newVar);
    
  }*/
