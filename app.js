// Initialize Firebase
const config = {
  apiKey: "AIzaSyBrQ0lkvPsjA-uAka75xXkLO5Oz5USj_Uw",
  authDomain: "yak-yik-7ed05.firebaseapp.com",
  databaseURL: "https://yak-yik-7ed05.firebaseio.com",
  projectId: "yak-yik-7ed05",
  storageBucket: "yak-yik-7ed05.appspot.com",
  messagingSenderId: "512781627465"
};
firebase.initializeApp(config);

// Get reference for messages
let messagesRef = firebase.database().ref("messages");

// Load messages initially
// messagesRef.once('value')
//   .then( (snapshot) => {
//     console.log(Object.values(snapshot.val()))
//     Object.values(snapshot.val()).forEach((message) => {
//       addMessage(message)
//     })
//   });

// Update when new messages are added to database
messagesRef.on("child_added", (snapshot) => {
  var message = snapshot.val();
  addMessage(message);
});

const post = () => {
  // Get input element as a variable
  let input = document.getElementById('postInput');

  // Get post message from input element
  let postMessage = input.value;

  // Send new message
  messagesRef.push().set(postMessage)

  // Clear input elements value
  input.value = '';
  
}

const addMessage = (message) => {
  // Get posts element as a variable
  let posts = document.getElementById('posts');

  // Create post as a paragraph(p) element
  let post = document.createElement("p");

  // Append post message to post paragraph
  post.innerHTML = message;
  console.log(post)

  // Append class to post paragraph
  post.className = 'post';

  // Append post to posts element
  posts.prepend(post);
}