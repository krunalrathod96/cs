## Upload Images to Firebase and Display on Page Using React

# Tools
* create-react-app cli
* material css UI
* Firebase
* Firebase Storage

# Start App
Clone repo, install, cd into folder and run:
```git
npm install
npm start
```

<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.21.1/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/7.21.1/firebase-analytics.js"></script>

<script>
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBc5HEbl0ZCfj6Lx4Yt63CG8T63G9sdBus",
    authDomain: "cssurvey-afbb4.firebaseapp.com",
    databaseURL: "https://cssurvey-afbb4.firebaseio.com",
    projectId: "cssurvey-afbb4",
    storageBucket: "cssurvey-afbb4.appspot.com",
    messagingSenderId: "272867589003",
    appId: "1:272867589003:web:70988848c906c6cf6d8d8e",
    measurementId: "G-X9ZM0LKB2L"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
</script>