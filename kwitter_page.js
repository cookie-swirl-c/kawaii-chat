//YOUR FIREBASE LINKS
const firebaseConfig = {
    apiKey: "AIzaSyAC_hzwI7dWqXDQnwcW6dYFycekbrm_0oE",
    authDomain: "kwitter-12464.firebaseapp.com",
    databaseURL: "https://kwitter-12464-default-rtdb.firebaseio.com",
    projectId: "kwitter-12464",
    storageBucket: "kwitter-12464.appspot.com",
    messagingSenderId: "414542548086",
    appId: "1:414542548086:web:9db5f74ca43f9f3c476357"
  };

  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();
function send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });
document.getElementById("msg").value="";

}
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
    }