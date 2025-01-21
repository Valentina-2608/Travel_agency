/* Show orders from FireStore DataBase */

// Import the functions you need from the SDKs you need
import { initializeApp} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getFirestore, collection, onSnapshot} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";

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
  const db = getFirestore(app);
  const dbRef = collection(db, 'Orders');
  
