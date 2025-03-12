function login() {
    let email = document.querySelector("input[type='email']").value;
    let password = document.querySelector("input[type='password']").value;
    
    if(email === "" || password === "") {
        alert("Please fill in all fields.");
        return;
    }
    
    alert("Logging in with " + email);
    // Here, you would add actual authentication logic
}

function register() {
    alert("Redirecting to registration page...");
    // You can redirect the user to a sign-up page
}

