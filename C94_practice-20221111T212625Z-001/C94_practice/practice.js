// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAVJvBOeAiuJfx5-500tCfGhC-l1V-UKP4",
    authDomain: "nome-98548.firebaseapp.com",
    databaseURL: "https://nome-98548-default-rtdb.firebaseio.com",
    projectId: "nome-98548",
    storageBucket: "nome-98548.appspot.com",
    messagingSenderId: "232330041728",
    appId: "1:232330041728:web:bd3720f83e3a3b26698965"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function adduser() {
username = document.getElementById("nomedepessoa").value;
firebase.database().ref("/").child(username).update({purpose:"adicionarusuario"})


  }