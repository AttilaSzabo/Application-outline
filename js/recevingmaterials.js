var linditex = document.querySelector(".linditex");
var palladion = document.querySelector(".palladion")
var customers = document.querySelector(".customers_name");

linditex.addEventListener("click", () => {
    customers.innerHTML = ""
    customers.innerHTML = "Linditex"
});

palladion.addEventListener("click", () => {
    customers.innerHTML = ""
    customers.innerHTML = "Palladion"
});
