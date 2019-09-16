import Firebase from "firebase";
import firebaseConfig from "./firebaseConfig";

const firebase = Firebase.initializeApp(firebaseConfig);

export default firebase;