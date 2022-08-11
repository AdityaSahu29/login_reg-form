const container = document.querySelector(".container");
const pwShowHide = document.querySelectorAll(".showHidePw");
const pwFields = document.querySelectorAll(".password");
const signUP = document.querySelector(".signUp-link");
const login = document.querySelector(".login-link");

// js code to show/ hide pw and change icon

pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener('click', () => {
        pwFields.forEach(pwField => {
            if (pwField.type === "password") {
                pwField.type = "text";
                pwShowHide.forEach(Icon => {
                    Icon.classList.replace("uil-eye-slash", "uil-eye")
                })
            }
            else {
                pwField.type = "password";
                pwShowHide.forEach(Icon => {
                    Icon.classList.replace("uil-eye", "uil-eye-slash")
                })
            }
        })
    })
})

signUP.addEventListener('click',()=>{
    container.classList.add("active");

})

login.addEventListener('click',()=>{
    container.classList.remove("active");
})