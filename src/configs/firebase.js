import firebase from 'firebase';

const firebaseConfig ={
    apiKey: "AIzaSyD1ja4caqjMbKuTAXRscdxUyRNMaOHRjVM",
    authDomain: "renouveler-design.firebaseapp.com",
    databaseURL: "https://renouveler-design.firebaseio.com",
    projectId: "renouveler-design",
    storageBucket: "renouveler-design.appspot.com",
    messagingSenderId: "949232121242",
    appId: "1:949232121242:web:7229cd14707d410a51f623",
    measurementId: "G-N97X1VCWRF"
}

firebase.initializeApp(firebaseConfig);

export default firebase;