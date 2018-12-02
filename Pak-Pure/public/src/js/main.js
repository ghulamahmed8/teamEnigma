$(document).ready(function () {
    $(".sign-in-button").click(function () {
        $("#sign-up").css("display", "none")
        $("#sign-in").css("display", "block")
    });

    $(".sign-up-button").click(function () {
        $("#sign-in").css("display", "none")
        $("#sign-up").css("display", "block")
    });

});


function showLoader(){
    var loader = document.getElementById('preloadera');
    loader.style.display = 'block';
  }
  
  function hideLoader(){
    var loader = document.getElementById('preloadera');
    loader.style.display = 'none';
  }



window.onload = function () {
    var userEmail = document.getElementById('exampleInputEmail1');
    var userPass = document.getElementById('exampleInputPassword1');
    var signUp = document.getElementById('signup-btn');
    var signIn = document.getElementById('login-btn');

    var userEmailL = document.getElementById('exampleInputEmail');
    var userPassL = document.getElementById('exampleInputPassword');

    signUp.addEventListener('click', e => {
        showLoader();
        const email = userEmail.value;
        const pass = userPass.value;
        e.preventDefault();
        if(userEmail.value == ""){
            hideLoader();
            alert("Email Missing");
        }
        else if(userPass.value == ""){
            hideLoader();
            alert('Password Missing');
        }
        const auth = firebase.auth();

        firebase.auth().createUserWithEmailAndPassword(email, pass)
            .then(function () {
                hideLoader();
                alert("Account Created Successfully");
                    $("#sign-up").css("display", "none")
                    $("#sign-in").css("display", "block")
                
            })

            .catch(function (error) {
                hideLoader();
                alert(error);
                console.log(error);
            });
        });

    signIn.addEventListener('click', e => {
        e.preventDefault();
        showLoader();

        const emailL = userEmailL.value;
        const passL = userPassL.value;
        const auth = firebase.auth();
        if(userEmailL.value == ""){
            alert("Email Missing");
            hideLoader();
        }
        else if(userPassL.value == ""){
            alert('Password Missing');
            hideLoader();
        }

        firebase.auth().signInWithEmailAndPassword(emailL, passL)
            .then(function () {
                hideLoader();
                window.open('home.html', '_self');
                var user = firebase.auth().currentUser;
                var email, uid;

                if (user != null) {
                    email = user.email;
                    uid = user.uid;
                    console.log(uid);

                }
            //  alert("LOGGED IN SUCCESSFULLY");
            })
             .catch(function (error) {
                hideLoader();
                console.log(error);
            });
        });
    }





