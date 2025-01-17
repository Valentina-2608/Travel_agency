/* Add orders to FireStore DataBase */

// Import the functions you need from the SDKs you need
import { initializeApp} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getFirestore, addDoc, collection} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";

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
  
let tour_btns = document.querySelectorAll('.tour_btn');
for(let i=0; i< tour_btns.length; i++){
  tour_btns[i].addEventListener('click',addOrder);
}

    /* Add orders */

function addOrder(event){
  let tour_btn=event.target;
  let tour_btn_parent = tour_btn.parentElement;
  let tour_caption = tour_btn_parent.children[1].innerHTML;
  let tour_price = tour_btn_parent.children[6].innerHTML;
  const dbRef = collection(db, 'Orders')
    const data = {
        caption: tour_caption,
        price: tour_price
      };
     addDoc(dbRef, data)
    .then(()=>{
      alert('Order was added successfully')
    })
    .catch((error)=>{
      alert('Error')
    });

}

