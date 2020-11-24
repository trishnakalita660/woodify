import app from "firebase/app";
import "firebase/auth";
import "firebase/firebase-firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC02Klje4gIlnvVTExBV7Y5PTMrt4_1PhA",
  authDomain: "woodify-6e675.firebaseapp.com",
  databaseURL: "https://woodify-6e675.firebaseio.com",
  projectId: "woodify-6e675",
  storageBucket: "woodify-6e675.appspot.com",
  messagingSenderId: "957981726504",
  appId: "1:957981726504:web:bbfb914b1ec5d3a273e21d",
};
// Initialize Firebase

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.auth = app.auth();
    this.db = app.firestore();
  }


    login ( email,password){
        return this.auth.signInWithEmailAndPassword(email,password);

  }
  logout (){
      return this.auth.signOut();
  }

  async register(name,email,password){
      await this.auth.createUserWithEmailAndPassword(email,password);
      return this.auth.currentUser.updateProfile({
          displayName: name
      })
  }

}

export default new Firebase();
