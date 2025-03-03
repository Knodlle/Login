document.addEventListener("DOMContentLoaded", function () {
    const esquecerSenhaBtn = document.getElementById("esquecer-senha");
    const voltarBtn = document.getElementById("voltar");
    const card = document.querySelector(".thecard");

    if (esquecerSenhaBtn && voltarBtn && card) {
        esquecerSenhaBtn.addEventListener("click", function () {
            card.classList.add("rotate");
        });

        voltarBtn.addEventListener("click", function () {
            card.classList.remove("rotate");
        });
    }
});