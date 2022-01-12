import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyDzNWejySaJd6-cdH433-UdFFZM_f8Q_lY",
  authDomain: "student-attendance-app-ff908.firebaseapp.com",
  projectId: "student-attendance-app-ff908",
  storageBucket: "student-attendance-app-ff908.appspot.com",
  messagingSenderId: "296299051904",
  appId: "1:296299051904:web:fbe442325f63de800b9f65"
}; // Initialize Firebase
   if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default  firebase.database();