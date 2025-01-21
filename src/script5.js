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
  
  let agent_orders = document.querySelector('.agent_orders');
  let show_orders = document.getElementById('show_orders');
  show_orders.addEventListener('click', showAllOrders);

  function showAllOrders(){
    onSnapshot(dbRef, docsSnap => {
      docsSnap.forEach(doc => {
        let new_order = document.createElement('div');
        new_order.classList.add('new_order')
       
        let new_order_caption = document.createElement('div');
        new_order_caption.classList.add('new_order_caption')
        new_order_caption.innerHTML = doc.data().caption;

        let new_order_price = document.createElement('div');
        new_order_price.classList.add('new_order_price')
        new_order_price.innerHTML = doc.data().price;

        let new_order_name = document.createElement('div');
        new_order_name.classList.add('new_order_name')
        new_order_name.innerHTML = doc.data().name;

        let new_order_surname = document.createElement('div');
        new_order_surname.classList.add('new_order_surname')
        new_order_surname.innerHTML = doc.data().surname;

        let new_order_phone = document.createElement('div');
        new_order_phone.classList.add('new_order_phone')
        new_order_phone.innerHTML = doc.data().phone;

        let new_order_email = document.createElement('div');
        new_order_email.classList.add('new_order_email')
        new_order_email.innerHTML = doc.data().email;

        new_order.appendChild(new_order_caption);
        new_order.appendChild(new_order_price);
        new_order.appendChild(new_order_name);
        new_order.appendChild(new_order_surname);
        new_order.appendChild(new_order_phone);
        new_order.appendChild(new_order_email);
        agent_orders.appendChild(new_order);
  
      })
  
    })
  }