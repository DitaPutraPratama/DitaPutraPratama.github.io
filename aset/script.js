// atas
var button = document.getElementById("tombolAtas");

window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
});
// akhir atas

// dark mode
function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}
// akhr dark mode

// form
const scriptURL =
    "https://script.google.com/macros/s/AKfycbxditIiN8glhmMKZD3e0bKZICmk116jyYcS51PAfR3PynPdtRcdy4I5B1CdiqMZ0FPYmQ/exec";
const form = document.forms["submit-to-google-sheet"];
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");
const alert = document.querySelector(".alert");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    btnLoading.classList.toggle("d-none");
    btnKirim.classList.toggle("d-none");
    fetch(scriptURL, {
        method: "POST",
        body: new FormData(form),
    })
        .then((response) => {
            btnLoading.classList.toggle("d-none");
            btnKirim.classList.toggle("d-none");
            alert.classList.toggle("d-none");
            form.reset();
            console.log("Success!", response);
        })
        .catch((error) => console.error("Error!", error.message));
});
// akhir form
