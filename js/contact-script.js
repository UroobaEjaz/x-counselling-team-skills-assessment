//Task-2 assignment  ---> Contact form validation using JavaScript

document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default browser behavior

    // Clear previous messages
    const errorMessage = document.getElementById("errorMessage");
    const successMessage = document.getElementById("successMessage");
    errorMessage.textContent = "";
    successMessage.textContent = "";

    // Get form field values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email-field").value.trim();
   

    // Custom validation for all fields
    if (!name || !email ) {
        errorMessage.textContent = "Please fill out all fields.";
        errorMessage.style.color = "red";
        return;
    }

    // Custom email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errorMessage.textContent = "Please enter a valid email address.";
        errorMessage.style.color = "red";
        return;
    }

    // If validation succeeds
    successMessage.textContent = "Form submitted successfully!";
    successMessage.style.color = "green";

    // Optionally clear the form fields
    document.getElementById("contactForm").reset();

});