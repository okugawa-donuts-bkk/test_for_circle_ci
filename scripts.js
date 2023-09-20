document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("sampleButton");
    const textElement = document.getElementById("sampleText");

    button.addEventListener("click", function() {
        textElement.textContent = "ボタンがクリックされました!";
    });
});
