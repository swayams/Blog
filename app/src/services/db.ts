import * as firebase from 'firebase'



export  const getNode = ( nodeName: string) => {

    return firebase.database().ref( nodeName).once('value')
    // tslint:disable-next-line:no-console
  

}



