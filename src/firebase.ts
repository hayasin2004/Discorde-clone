import { initializeApp } from "firebase/app";
// import  {getFirestore} from "firebase/firestore/lite　↓のようにする"
import  {getFirestore} from "firebase/firestore"
import  {getAuth ,GoogleAuthProvider} from "firebase/auth"
import firebase from "firebase/compat";
const firebaseConfig = {
    apiKey: "AIzaSyC_ZNLoHxPb8X26Bb5Um1MehZXeV-g3hOw",
    authDomain: "discord-clone-udemy-a6c8e.firebaseapp.com",
    projectId: "discord-clone-udemy-a6c8e",
    storageBucket: "discord-clone-udemy-a6c8e.appspot.com",
    messagingSenderId: "372361247420",
    appId: "1:372361247420:web:61f467186beb33556eaeb9"
};

const app = initializeApp(firebaseConfig);
const  db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth , provider , db}
// expor defalutでも可能だが命名を変えることができるためあまり好ましくない
