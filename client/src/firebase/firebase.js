import firebase from 'firebase/app';
import 'firebase/storage';

var config = {
    apiKey: REACT_APP_APIKEY,
    authDomain: REACT_APP_AUTHDOMAIN,
    databaseURL: REACT_APP_DBURL,
    projectId: REACT_APP_PID,
    storageBucket: REACT_APP_STORAGEB,
    messagingSenderId: REACT_APP_MESSAGINGSENDERID,
    appId: REACT_APP_APPID
  };

firbase.initializeApp(config);

const storage = firebase.storage();

export {
    storage, firbase as default
}