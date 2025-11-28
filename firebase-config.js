// Firebase Configuration
window.firebaseConfig = {
  apiKey: "AIzaSyA_2KfVUdtUh0D8iK7hx6KcN7107dJlwRE",
  authDomain: "journal-4b15b.firebaseapp.com",
  projectId: "journal-4b15b",
  storageBucket: "journal-4b15b.firebasestorage.app",
  messagingSenderId: "869823757728",
  appId: "1:869823757728:web:66cb38fffcd2f58b5038c5"
};

// Initialize Firebase (will be done in index.html after SDK loads)
window.initFirebase = function() {
  if(typeof firebase !== 'undefined') {
    firebase.initializeApp(window.firebaseConfig);
    window.db = firebase.database();
    return true;
  }
  return false;
};
