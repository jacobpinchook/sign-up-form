const formOutput = document.querySelector("#first_name");
const createAccountButton = document.querySelector(".create-account");

function resetForm() {
    document.getElementById("signUpForm").reset();
}

function validateForm() {
    let valid = true;
  
    const firstName = document.getElementById("first_name");
    const lastName = document.getElementById("last_name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone_number");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirm_password");
  
    // reset
    [firstName, lastName, email, password, confirmPassword].forEach(input => {
      input.classList.remove("error");
    });
  
    if (firstName.value.trim() === "") {
        firstName.classList.add("error");
        valid = false;
    }

    if (lastName.value.trim() === "") {
        lastName.classList.add("error");
        valid = false;
    }
    
    if (email.value.trim() === "") {
        email.classList.add("error");
        valid = false;
    }

    if (phone.value.trim() === "") {
        phone.classList.add("error");
        valid = false;
    }
    
    if (password.value === "") {
        password.classList.add("error");
        valid = false;
    }
    
    if (password.value !== confirmPassword.value) {
        password.classList.add("error");
        confirmPassword.classList.add("error");
        valid = false;
    }
  
    if (valid) {
        form.reset();
    }
    
    return false;
}