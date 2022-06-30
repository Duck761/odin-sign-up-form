// This project is licensed under the MIT license.
// Copyright (c) 2018-2019, David H.
// All rights reserved.
// ------------------------------------------------------------

// This project did not require any JS.
// It is just a simple HTML page with a simple CSS style.
// It is used to show the usage of the "CSS forms" feature.
// The CSS style is in the file "style.css".
// The HTML page is in the file "index.html".

const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("number");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const submit = document.getElementById("create-account");
const allForms = [firstName, lastName, email, phoneNumber, password, confirmPassword];

submit.addEventListener('click', () => {
    if (allForms.every(form => form.checkValidity())) {
        if (password.value !== confirmPassword.value) {
            alert("Passwords do not match!");
        } else {
            alert("Account created!");
        }
    } else {
        alert("Please fill out all fields!");
    }
});

