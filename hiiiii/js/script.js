document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".play-button").forEach(button => {
        button.addEventListener("click", function () {
            alert("Please deposit money first to play!");
        });
    });

    document.querySelector(".deposit-button")?.addEventListener("click", function () {
        window.location.href = "deposit.html";
    });
});
