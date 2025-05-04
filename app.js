const proximo = document.getElementById("next");
const anterior = document.getElementById("prev");
const itens = document.querySelectorAll(".item");
const indicador = document.querySelectorAll(".dot");
const numberIndicator = document.querySelector(".num");

let active = 0;
const total = IntersectionObserver.length;
let timer;

const update = () => {
    
}


// click do botão próximo que chama a função update
proximo.addEventListener("click", () => {
    update()
    alert("clicou no próximo");
});

// click do botão anterior que chama a função update
anterior.addEventListener("click", () => {
    update()
    alert("clicou no anterior");
});
