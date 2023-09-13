document.getElementById("nameForm").addEventListener("submit", function (e) {
    const name = document.getElementById("nameInput").value;
});

document.getElementById("secretCode").addEventListener("change", function(e) {
    const secretValue = e.target.value;
    const correctValue = 1234;

    if (secretValue == correctValue) {
        window.location.href = "./sorteo.html";
    }
});

