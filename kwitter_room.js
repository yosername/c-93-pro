
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCWcxpW-jCMdZvgbVEEpDVPQ18TOJaTn9A",
      authDomain: "kwitter93-47a3c.firebaseapp.com",
      databaseURL: "https://kwitter93-47a3c-default-rtdb.firebaseio.com",
      projectId: "kwitter93-47a3c",
      storageBucket: "kwitter93-47a3c.appspot.com",
      messagingSenderId: "380997988984",
      appId: "1:380997988984:web:f50a634e7a9e29b7ae338d"
    };
    
    // Initialize Firebase
   const app = firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
