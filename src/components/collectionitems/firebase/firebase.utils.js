//fetch the signInWithGoogle API for sign in and sign out

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import { initializeApp } from "firebase/app";

//To query the database
import {
  getDoc,
  collection,
  doc,
  setDoc,
  Firestore,
  addDoc,
  getFirestore,
} from "firebase/firestore";

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
  measurementId: "G-V8LGCL8H07",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

const provider = new GoogleAuthProvider();
//provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
provider.setCustomParameters({ prompt: "select_account" });

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

signInWithPopup()
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  })
  .catch((error) => {
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
    console.log("signout successful");
  })
  .catch((error) => {
    console.log(error);
  });
const signInWithGoogle = () => {
  signInWithPopup(auth, provider);
};

export const SignOut = () => signOut(auth);

export default signInWithGoogle;

//To query the database and create a user

export const createUserData = async (userAuth, ...otherdata) => {
  const userReference = doc(db, `users/${userAuth.uid}`);
  const userSnapShot = await getDoc(userReference);

  if (userSnapShot.exists() == false) {
    const { email, displayName, uid } = userAuth;
    const time = new Date();

    const newUserData = {
      displayName,
      email,
      time,
      uid,
      ...otherdata,
    };

    try {
      await setDoc(userReference, newUserData);
      console.log("user successfully added");
    } catch (error) {
      console.log(error);
    }
  }
  return userReference;
};

export const handleSubmit = async (e, comment) => {
  e.preventDefault();
  setLoader(true);

  const userReference = doc(db, `users/${comment.uid}`);
  const userSnapShot = await getDoc(userReference);

  const newComment = {
    displayName,
    email,
    time,
    uid,
    ...otherdata,
  };

  try {
    await addDoc(newComment, newUserData);
    console.log("user successfully added");
  } catch (error) {
    console.log(error);
  }
};
