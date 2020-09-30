import * as firebase from "firebase";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyCuM6IbJUkyUIpd2any4dmUi-uVuWEhYws",
  authDomain: "danny-9bcc1.firebaseapp.com",
  databaseURL: "https://danny-9bcc1.firebaseio.com",
  projectId: "danny-9bcc1",
  storageBucket: "danny-9bcc1.appspot.com",
  messagingSenderId: "145792741010",
  appId: "1:145792741010:web:fa3dacffe623a42273004b",
  measurementId: "G-VZ0D3BPWEG"
};
// Initialize Firebase

var fireDb = firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export default fireDb.database().ref();
export {storage};