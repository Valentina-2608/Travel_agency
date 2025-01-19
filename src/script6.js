
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
     tour_btns[i].addEventListener('click', showForm);
  }

   /* Add orders */
  
  function showForm(event){
   let block_form = document.querySelector('.block_form');
   block_form.style.display = 'block';
   let tour_btn=event.target;
   let tour_btn_parent = tour_btn.parentElement;
   let tour_caption = tour_btn_parent.children[1].innerHTML;
   let tour_price = tour_btn_parent.children[6].innerHTML;

   let tour_caption1 = document.querySelector('.tour_caption1');
   let tour_price1 = document.querySelector('.tour_price1');

   tour_caption1.innerHTML = tour_caption;
   tour_price1.innerHTML =  tour_price;
  
  }

 

  let form_order = document.getElementById('form_order');
  var clientNameElem = document.getElementById('client_name');
  var clientSurnameElem = document.getElementById('client_surname');
  var clientEmailElem = document.getElementById('client_email');
  var clientPhoneElem =  document.getElementById('client_phone');

  form_order.addEventListener('submit', addOrder);
  function addOrder(event){
    event.preventDefault();
    var client_name = document.getElementById('client_name').value;
    var client_surname = document.getElementById('client_surname').value;
    var client_email = document.getElementById('client_email').value;
    var client_phone =  document.getElementById('client_phone').value;
    var tour_caption1 = document.querySelector('.tour_caption1').innerHTML;
    var tour_price1 = document.querySelector('.tour_price1').innerHTML;
    const dbRef = collection(db, 'Orders')
        const data = {
            caption: tour_caption1,
            price: tour_price1,
            name:client_name,
            surname:client_surname,
            email:client_email,
            phone:client_phone
          };
         addDoc(dbRef, data)
        .then(()=>{
          alert('Order was added successfully')
        })
        .catch((error)=>{
          alert('Error')
        });




  }




  let btn_clear = document.getElementById('btn_clear');
  btn_clear.addEventListener('click', clearForm);
  function clearForm(){
    clientNameElem.value = '';
    clientSurnameElem.value = '';
    clientEmailElem.value = '';
    clientPhoneElem.value = '';
  }


  
  let close_modal = document.querySelector('.close_modal');
  close_modal.addEventListener('click', closeForm);
  function closeForm(){
    let block_form = document.querySelector('.block_form');
    block_form.style.display = 'none';
  }
