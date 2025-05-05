const proximo = document.getElementById("next");
const anterior = document.getElementById("prev");
const itens = document.querySelectorAll(".item");
const indicador = document.querySelectorAll(".dot");
const numberIndicator = document.querySelector(".num");

let active = 0;
const total = itens.length;
let timer;

const update = (direcao) => {
    document.querySelector(".item.active").classList.remove("active");
    document.querySelector(".dot.active").classList.remove("active");

    if (direcao > 0) {
        active = active + 1;
        console.log("item positivos" + active);
        console.log(total);
        if (active === total) {
            active = 0;
        }
    } else if (direcao < 0) {
        active = active - 1;

        if (active < 0) {
            active = total - 1;
        }
    }

    // adiciona a classe active
    itens[active].classList.add("active");
    indicador[active].classList.add("active");

    // mostra o numero indicando  a posição
    numberIndicator.textContent = String(active  + 1).padStart(2, "0");
};

setInterval(() => {
    update(1);
}, 3000);

// click do botão próximo que chama a função update
proximo.addEventListener("click", () => {
    update(1);
});

// click do botão anterior que chama a função update
anterior.addEventListener("click", () => {
    update(-1);
});
