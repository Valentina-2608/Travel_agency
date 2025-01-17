/* Log Out for Barista Page*/

// Import the functions you need from the SDKs you need
import { initializeApp} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js"
import { getAuth, signOut} from "https://www.gstatic.com/firebasejs/11.11.0/firebase-auth.js"


 // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCocbENeNVF77_NZnrjeTLVoSYE0jxep1I",
    authDomain: "travel-agency-3793b.firebaseapp.com",
    projectId: "travel-agency-3793b",
    storageBucket: "travel-agency-3793b.firebasestorage.app",
    messagingSenderId: "358918199750",
    appId: "1:358918199750:web:bba9dc625791d131c93ac7"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();
  
let log_out =  document.getElementById('log_out');
log_out.addEventListener('click', function(){
	signOut(auth).then(() => {
		// Sign-out successful.
		alert('Log out success')
		window.location.replace("index.html");
	  }).catch((error) => {
		// An error happened.
	  });
})




