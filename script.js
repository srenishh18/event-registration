
document.getElementById("myForm").addEventListener("submit", function(e) {

    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let age = document.getElementById("age").value;
    let password = document.getElementById("password").value;

    let valid = true;

    // Clear previous errors
    document.querySelectorAll("span").forEach(s => s.innerHTML = "");
    document.getElementById("message").innerHTML = "";

    // Name validation
    if (name == "") {
        document.getElementById("nameError").innerHTML = "Name is required";
        valid = false;
    }

    // Email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById("emailError").innerHTML = "Invalid email";
        valid = false;
    }

    // Phone validation
    if (!/^[0-9]{10}$/.test(phone)) {
        document.getElementById("phoneError").innerHTML = "Enter 10 digit phone";
        valid = false;
    }

    // Age validation
    if (age == "" || age < 18 || age > 100) {
        document.getElementById("ageError").innerHTML = "Age must be 18 to 100";
        valid = false;
    }

    // Password validation
    if (password.length < 8) {
        document.getElementById("passwordError").innerHTML = "Password must contain 8 characters";
        valid = false;
    }

    // Final result
    if (valid) {
        document.getElementById("message").innerHTML =
            "Registration Successful!";
        document.getElementById("myForm").reset();
    }

});
