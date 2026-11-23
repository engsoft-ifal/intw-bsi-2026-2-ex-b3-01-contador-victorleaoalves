const displayTotal = document.querySelector("#total");
const btnSomar = document.querySelector("#somar");
const btnZerar = document.querySelector("#zerar");

let contador = 0;

displayTotal.textContent = contador;

btnSomar.addEventListener("click", () => {
    contador++;
    displayTotal.textContent = contador;
});

btnZerar.addEventListener("click", () => {
    contador = 0;
    displayTotal.textContent = contador;
});
