// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts("https://www.gstatic.com/firebasejs/6.3.4/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/6.3.4/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp({
  apiKey: "AIzaSyBL1cdA7lcAHCmJyeo3Lb54Sw7Jis5sw5I",
  authDomain: "valcruz-jmvpwt.firebaseapp.com",
  databaseURL: "https://valcruz-jmvpwt.firebaseio.com",
  projectId: "valcruz-jmvpwt",
  storageBucket: "valcruz-jmvpwt.appspot.com",
  messagingSenderId: "1024402545262",
  appId: "1:1024402545262:web:2af28f6efef488c134a47f",
  measurementId: "G-2Y1LP1H66D"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
