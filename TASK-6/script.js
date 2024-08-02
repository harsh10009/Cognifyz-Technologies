
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    const errorMessages = document.getElementById("errorMessages");

    form.addEventListener("submit", function(event) {
        errorMessages.innerHTML = "";
        let errors = [];

        const name = form.elements["name"].value.trim();
        const email = form.elements["email"].value.trim();
        const phone = form.elements["phone"].value.trim();
        const message = form.elements["message"].value.trim();

        if (name === "") {
            errors.push("Name is required.");
        }

        if (email === "") {
            errors.push("Email is required.");
        } else if (!validateEmail(email)) {
            errors.push("Email is not valid.");
        }

        if (phone !== "" && !validatePhone(phone)) {
            errors.push("Phone number is not valid.");
        }

        if (message === "") {
            errors.push("Message is required.");
        }

        if (errors.length > 0) {
            event.preventDefault();
            displayErrors(errors);
        }
    });

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(email);
    }

    function validatePhone(phone) {
        const re = /^[0-9]{10}$/;
        return re.test(phone);
    }

    function displayErrors(errors) {
        errors.forEach(function(error) {
            const errorItem = document.createElement("div");
            errorItem.textContent = error;
            errorMessages.appendChild(errorItem);
        });
    }
});
