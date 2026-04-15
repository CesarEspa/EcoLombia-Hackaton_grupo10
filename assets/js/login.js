const signinForm = document.querySelector(".form.signin");
const signupForm = document.querySelector(".form.signup");
const cardBg1 = document.querySelector(".card-bg-1");
const cardBg2 = document.querySelector(".card-bg-2");
const logo1 = document.querySelector(".logo-1");
const logo2 = document.querySelector(".logo-2");

const toggleView = () => {
    const signinActive = signinForm.classList.contains("active");

    // Intercambia la clase 'active' entre los formularios
    signinForm.classList.toggle("active", !signinActive);
    signupForm.classList.toggle("active", signinActive);

    // Actualiza las clases de los fondos y logos
    [cardBg1, cardBg2, logo1, logo2].forEach((el) => {
        el.classList.toggle("signin", !signinActive);
        el.classList.toggle("signup", signinActive);
    });
};

function ingresarAlSistema() {

    window.location.href = "index.html"; 
}