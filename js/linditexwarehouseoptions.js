var receiving_materials = document.querySelector(".receiving");
var processing_materials = document.querySelector(".processing");
var stock_status = document.querySelector(".status");

receiving_materials.addEventListener("click", () => {
    window.location.assign("receivingmaterials.html")
});

processing_materials.addEventListener("click", () => {
    window.location.assign("processingmaterials.html")
});

stock_status.addEventListener("click", () => {
    window.location.assign("stockstatus.html")
});