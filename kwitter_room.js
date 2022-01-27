var firebaseConfig = {
    apiKey: "AIzaSyCKJooLzvaGh13ExW-Ps0P0LovJs8yFGr4",
    authDomain: "let-chat-app.firebaseapp.com",
    databaseURL: "https://let-chat-app-default-rtdb.firebaseio.com",
    projectId: "let-chat-app",
    storageBucket: "let-chat-app.appspot.com",
    messagingSenderId: "777122885810",
    appId: "1:777122885810:web:56afff90cc999b4ffa99ab"
  };
  
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("userName");
  console.log(user_name);

  document.getElementById("user_name").innerHTML = "Welcome " + user_name + " ! ";

  function addRoom()
  {
    Room_name = document.getElementById("roon_name").value;
    firebase.database().ref("/").child(Room_name).update({
          purpose:"adding room name"
    });
    localStorage.setItem("room_name", Room_name);
    window.location = "kwitter_page.html";
  }

function getData() 
{
      firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("room name - " + Room_names);
      row = "<div class = 'room_name' id=" + Room_names + "onclick = 'redirectToRoomName(this.id)'># " + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      });
});

}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}