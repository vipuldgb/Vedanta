

document.addEventListener('DOMContentLoaded', function () {

    /* ---------------------------------------------------- LOGIN FORM CONTAINER -------------------------------------------------------- */

    const login = document.getElementById('loginForm');

    if (login) {
        login.addEventListener('submit', function (event) {

            event.preventDefault();

            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // window.location.href = '../../INDEX.html';

            if (email && password) {
                alert(`Login Successful!\nEmail: ${email}`);
                window.location.href = '../../INDEX.html';
            } else {
                alert('Please enter valid login credentials.');
            }

        })
    }



    /* ---------------------------------------------------- SIGNUP FORM CONTAINER ---------------------------------------------------------- */

    const SignUp = document.getElementById('SignUpForm')

    if (SignUp) {
        SignUp.addEventListener('submit', function (event) {
            event.preventDefault();

            const username = document.getElementById('username').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;


            if (username && email && password) {
                alert(`Registered Successfully! ${username}`)
                window.location.href = '../../INDEX.html';
            }
            else {
                alert('Enter Valid Credentials');
            }

        })
    }



    /* -------------------------------------------------Profile Page--------------------------------------------- */

    // const goBackButton = document.getElementById('goBackButtonID');

    // if (goBackButton) {
    //     goBackButton.addEventListener('click', function () {
    //         window.location.href = '../Chat-Bot/pdf.html';
    //     })
    // }


    /* -------------------------------------------------- TOGGLE BETWEEN LOGIN SIGNUP ----------------------------------------------------- */

    // document.getElementById('toggleButton').addEventListener('click', function () {
    //     const loginForm = document.getElementById('loginForm');
    //     const signUpForm = document.getElementById('SignUpForm');
    //     const toggleButton = document.getElementById('toggleButton');

    //     // Toggle active class on the forms
    //     loginForm.classList.toggle('active');
    //     signUpForm.classList.toggle('active');

    //     // Change button text based on current state
    //     if (loginForm.classList.contains('active')) {
    //         toggleButton.textContent = "Don't have an account? Signup";
    //     } else {
    //         toggleButton.textContent = "Already have an account? Login";
    //     }
    // });


    const ToggleSignup = document.getElementById('toggleSignUpButton');

    if (ToggleSignup) {
        ToggleSignup.addEventListener('click', function () {
            window.location.href = 'LOGIN.html'
        })
    }


    /* ------------------------------------------------ TOGGLE LOGIN ----------------------------------- */


    const ToggleLoginup = document.getElementById('toggleLoginButton');

    if (ToggleLoginup) {
        ToggleLoginup.addEventListener('click', function () {
            window.location.href = 'SIGNUP.html'
        })
    }

});
