var register_link = document.querySelector(".register_link");
var login_link = document.querySelector(".login_link");
var wrapper = document.querySelector(".wrapper");
var login_button = document.querySelector(".login_button")

var email_to_login= "attilaszabo@linditex.eu";
var password_to_login = "123";


register_link.addEventListener("click", () => {
    wrapper.classList.add("active");
});

login_link.addEventListener("click", () => {
    wrapper.classList.remove("active")
});

login_button.addEventListener("click", () => {
    var email = document.querySelector(".emailValue").value;
    var password = document.querySelector(".passwordValue").value;
    if (email === email_to_login || password === password_to_login) {
        window.location.assign("options.html")
    } else {
        alert("Please log in or register if you haven't yet.")
    } 
});
