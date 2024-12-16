document.addEventListener('DOMContentLoaded', () => {
    const signInForm = document.getElementById('loginForm');
    const signUpForm = document.getElementById('sign-up-form');
    const recoverForm = document.getElementById('recover-form');
    
    const showSignUpLink = document.getElementById('show-sign-up');
    const showRecoverLink = document.getElementById('show-from-recover');
    const showSignInFromRecover = document.getElementById('show-sign-in-from-recover');
    const showSignInFromRegister = document.getElementById('show-sign-in-from-register');

    const toggleForms = (currentForm, targetForm) => {
        if (currentForm && targetForm) {
            currentForm.style.display = 'none';
            targetForm.style.display = 'block';
        }
    };

    showSignUpLink.addEventListener('click', (e) => {
        e.preventDefault();
        toggleForms(signInForm.parentElement, signUpForm.parentElement);
    });

    showRecoverLink.addEventListener('click', (e) => {
        e.preventDefault();
        toggleForms(signInForm.parentElement, recoverForm.parentElement);
    });

    showSignInFromRecover.addEventListener('click', (e) => {
        e.preventDefault();
        toggleForms(recoverForm.parentElement, signInForm.parentElement);
    });

    showSignInFromRegister.addEventListener('click', (e) => {
        e.preventDefault();
        toggleForms(signUpForm.parentElement, signInForm.parentElement);
    });

    recoverForm.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Se ha enviado un enlace de recuperación a tu correo.");
        recoverForm.reset();
        toggleForms(recoverForm.parentElement, signInForm.parentElement);
    });

    signUpForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert("Usuario registrado con éxito");
        signUpForm.reset();
        toggleForms(signUpForm.parentElement, signInForm.parentElement);
    });

    signInForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert("Inicio de sesión exitoso");
        
    });

    const formdata = document.getElementById('loginForm');
        formdata.addEventListener('submit', async event => {
            event.preventDefault();

            const data = await fetch('https://oaemdl.es/login_sweb_php/login', {
                method : 'POST',
                body: new FormData(formdata)
            })
                
            let usuario = await data.json()

            if ( usuario['success'] ) {
                usuario = usuario['data']
                alert( usuario['Nombres'] )
            }
            
        })
});
