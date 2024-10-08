

document.addEventListener('DOMContentLoaded', function () {

    /* ---------------------------------------------------- LOGIN FORM CONTAINER -------------------------------------------------------- */

    const login = document.getElementById('loginForm');

    if (login) {
        login.addEventListener('submit', function (event) {

            event.preventDefault();

            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;


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



    /* -------------------------------------------------- TOGGLE BETWEEN LOGIN SIGNUP ----------------------------------------------------- */



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
