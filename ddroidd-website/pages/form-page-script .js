document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("myForm");
    const errorMessages = document.getElementById("errorMessages");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        errorMessages.innerHTML = '';

        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const phoneNumber = document.getElementById("phoneNumber").value;
        const email = document.getElementById("email").value;
        const address1 = document.getElementById("address1").value;
        const address2 = document.getElementById("address2").value;
        const country = document.getElementById("country").value;
        const state = document.getElementById("state").value;
        const city = document.getElementById("city").value;

        const errors = [];

        if (!firstName) {
            errors.push("First Name is required.");
        }

        if (!lastName) {
            errors.push("Last Name is required.");
        }

        if (!phoneNumber) {
            errors.push("Phone Number is required.");
        }

        if (!email) {
            errors.push("Email Address is required.");
        }
        
        if (!address1) {
            errors.push("Address Line 1 is required.");
        }

        if (!country) {
            errors.push("Country is required.");
        }
        
        if (!state) {
            errors.push("State is required.");
        }
        
        if (!city) {
            errors.push("City is required.");
        }

        if (errors.length > 0) {
            // Display errors in a list
            errorMessages.innerHTML = `
            <h3>Please fix the following errors to proceed:</h3>
            <ul>${errors.map(error => `<li>${error}</li>`).join('')}</ul>`;

        } else {
            // Store form data in localStorage
            const formData = {
                firstName,
                lastName,
                phoneNumber,
                email,
                address1,
                address2,
                country,
                state,
                city,
            };

            // Convert the formData object to JSON
            const formDataJSON = JSON.stringify(formData);

             // Store the JSON in localStorage
            localStorage.setItem("formData", formDataJSON);

            // Redirect to the next page
            window.location.href = "./nextpage.html";
        }
    });
});
 