const loginSignUp = document.querySelector(".login-signup");
    const loginForm = document.querySelector(".login-form-container");
    const closeForm = document.querySelector(".close-form-btn");
    loginSignUp.addEventListener("click", () =>{
        loginForm.style.visibility = "visible";
    });
    closeForm.addEventListener("click", () => {
        loginForm.style.visibility = "hidden";
    });