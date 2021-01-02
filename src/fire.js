import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyB383Pisq3NuOLgF1wGcU_w34kLaFV_D8g",
  authDomain: "fir-auth-70db9.firebaseapp.com",
  projectId: "fir-auth-70db9",
  storageBucket: "fir-auth-70db9.appspot.com",
  messagingSenderId: "19017495138",
  appId: "1:19017495138:web:f49fe61a8c10a999cfd73b",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
