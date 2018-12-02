var _db = firebase.database();

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      console.log(user.email);
      var userE = document.getElementById("welcome_user");
      userE.innerHTML = "Welcome to ZAP APP " + user.email;
      userID = user.uid;
      localStorage.setItem('userOfAd', userID);
      localStorage.setItem('userEmail', user.email);
      
    }
    // else {
    //   signOutUser();
    // }
  });


  function signOutUser() {
    firebase.auth().signOut()
      .then(function () {
        window.open('index.html', '_self');
        console.log("Successfully Logged Out");
        // Sign-out successful.
      }).catch(function (error) {
        // An error happened.
        console.log(error);
      });
  }