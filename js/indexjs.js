document.getElementById("nameForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("nameInput").value;
    // Redirige a la página de preguntas
    window.location.href = "/test.html"; 
});