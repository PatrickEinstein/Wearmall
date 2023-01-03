//fetch the signInWithGoogle API for sign in and sign out

import { getAuth, signInWithPopup, GoogleAuthProvider,signOut } from "firebase/auth";
import { initializeApp } from 'firebase/app';

//To query the database
import { getDoc, collection, doc, setDoc, Firestore , getFirestore, addDoc, DocumentReference, CollectionReference } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { useRef } from "react";


// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyD_vzuIM3Y5ZP4IKDabDeFW713r4ALMJrc",
    authDomain: "project0-9181a.firebaseapp.com",
    projectId: "project0-9181a",
    storageBucket: "project0-9181a.appspot.com",
    messagingSenderId: "305384132747",
    appId: "1:305384132747:web:a9109535c8ae23dfd3c48e",
    measurementId: "G-V8LGCL8H07"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const provider = new GoogleAuthProvider();
//provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
provider.setCustomParameters({ prompt: 'select_account' });

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
    
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });


signOut(auth)
  .then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});
const signInWithGoogle = () => { signInWithPopup(auth, provider) };

export const SignOut = () => (signOut(auth));

export default signInWithGoogle;


 
//To query the database

export const createUserData = async (userAuth, otherdata) => {
  if (!userAuth) return;
  
    const useRef = doc(db, `users/${userAuth.uid}`);
    const snapShot = await getDoc(useRef);
    console.log(snapShot.data());
  
    
    if (snapShot.exists() == false) {
      
      const { email, displayName , uid } = userAuth;
      const time = new Date();
   
      const newUser = {
        displayName,
        email,
        time,
        uid,
        ...otherdata
      };
     
         try {
    
          await setDoc(useRef, newUser);
          console.log('user successfully added');
    
        } catch (error) {
        
          console.log(error);
        }
  }; 
  return useRef;

};

