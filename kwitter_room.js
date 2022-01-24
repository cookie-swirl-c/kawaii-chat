
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
  apiKey: "AIzaSyB8vzoI0n_5F_xk4v9sFn3lthIh9UYd4EY",
  authDomain: "kawaii-chat-cb14f.firebaseapp.com",
  databaseURL: "https://kawaii-chat-cb14f-default-rtdb.firebaseio.com",
  projectId: "kawaii-chat-cb14f",
  storageBucket: "kawaii-chat-cb14f.appspot.com",
  messagingSenderId: "1059438729736",
  appId: "1:1059438729736:web:a2e795c27bbce806294fbd"
};
  firebase.initializeApp(firebaseConfig); 
  user_name=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}
   
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room Name - " + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
    document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();
function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}
function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
  }