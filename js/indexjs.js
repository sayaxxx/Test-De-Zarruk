document.getElementById("nameForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("nameInput").value;
    e.currentTarget.action = "../test.html";
    e.currentTarget.submit();
});
