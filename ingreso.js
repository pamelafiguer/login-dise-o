document.addEventListener('DOMContentLoaded', () => {
    const changePasswordForm = document.getElementById('change-password-form');
    const changePasswordBtn = document.getElementById('show-change-password-btn');
    const modal = document.getElementById('CerrarSesionModal');
    const cerrarSesionBtn = document.getElementById('CerrarSesionbtn');
    const cancelarBtn = document.getElementById('cancelarbtn');
    const confirmarCerrarSesion = document.getElementById('ConfirmarCerrarSesion');


    cerrarSesionBtn.addEventListener('click', (event) => {
        event.preventDefault();
        modal.style.display = 'flex';
    });

    cancelarBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    confirmarCerrarSesion.addEventListener('click', () => {
        window.location.href = 'index.html';  
    });


    changePasswordBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const changePasswordDiv = document.getElementById('change-password');
        changePasswordDiv.style.display = 'block';
    });


    changePasswordForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert("Contraseña cambiada con éxito");
        changePasswordForm.reset();
        const changePasswordDiv = document.getElementById('change-password');
        changePasswordDiv.style.display = 'none'; 


    const cancelform = document.getElementById('cancelarfrom');
    cancelform.addEventListener('click', () => {
        const changePasswordDiv = document.getElementById('change-password');
        changePasswordDiv.style.display = 'none'; 
    });
})});