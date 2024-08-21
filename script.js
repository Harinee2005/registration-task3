document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('myForm').addEventListener('submit', function(event) {
        if (!validateForm()) {
            event.preventDefault(); // Prevent form submission if validation fails
        }
    });
});

function validateForm() {
    if (document.getElementById('firstName').value === "") {
        alert("First Name is required..");
        return 0;
    }

    if (document.getElementById('lastName').value === "") {
        alert("Last Name is required..");
        return 0;
    }

    if (document.getElementById('email').value === "") {
        alert("Email is required..");
        return 0;
    }

    if (document.getElementById('email').value.indexOf('@') === -1 || document.getElementById('email').value.indexOf('.') === -1) {
        alert("Invalid email format..");
        return 0;
    }

    if (document.getElementById('contact').value === "") {
        alert("Contact Number is required..");
        return 0;
    }

    if (isNaN(document.getElementById('contact').value)) {
        alert("Contact Number must be in numeric..");
        return 0;
    }

    if ((document.getElementById('contact').value.length !== 10)) {
        alert("Invalid Mobile Number..");
        return 0;
    }

    if (document.getElementById('address').value === "") {
        alert("Address is required.");
        return 0;
    }

    if (document.getElementById('city').value === "") {
        alert("City is required.");
        return 0;
    }

    else{
        alert("Registered Successfully...");
    }
}
