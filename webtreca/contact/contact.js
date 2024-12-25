document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('contactForm');
    const submitLink = document.querySelector('.btn'); // Selektovanje <a> sa klasom 'btn'
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const successMessage = document.getElementById('successMessage');

    // Klik na <a> umesto submit eventa forme
    submitLink.addEventListener('click', function (event) {
        event.preventDefault(); // Sprečava default ponašanje <a>
        let isValid = true;

        // Resetovanje poruka o greškama
        clearErrors();

        // Provera imena i prezimena
        if (nameInput.value.trim() === "") {
            showError('nameError', "Please enter your first and last name!");
            isValid = false;
        }

        // Provera email adrese
        if (emailInput.value.trim() === "" || !validateEmail(emailInput.value)) {
            showError('emailError', "Please enter your email address!");
            isValid = false;
        }

        // Provera poruke
        if (messageInput.value.trim() === "") {
            showError('messageError', "Please enter your desired message!");
            isValid = false;
        }

        // Ako je sve validno, odmah preusmeri na successful.html
        if (isValid) {
            window.location.href = '/successful/successful.html'; // Preusmeravanje na stranicu
        }
    });

    // Funkcija za prikazivanje greške
    function showError(elementId, message) {
        const errorElement = document.getElementById(elementId);
        if (errorElement) {
            errorElement.textContent = message;
            errorElement.style.color = "red";
            errorElement.style.display = "block"; // Osigurava da je vidljivo
        } else {
            console.error(`Element sa ID "${elementId}" nije pronađen.`);
        }
    }

    // Funkcija za resetovanje grešaka
    function clearErrors() {
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach((element) => {
            element.textContent = ""; // Čisti sadržaj poruka
            element.style.display = "none"; // Sakriva element
        });
        successMessage.style.display = 'none'; // Sakriva poruku o uspehu
    }

    // Funkcija za validaciju email adrese
    function validateEmail(email) {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(email);
    }
});
