const btnBanco = document.getElementById("btn-banco");
const btnMaterias = document.getElementById("btn-materias");

btnBanco.addEventListener("click", function(){
    window.location.href = "bancoquestoes.html";
});

btnMaterias.addEventListener("click", function(){
    window.location.href = "materias.html";
});

// Declarando variáveis para o DOM da página IA JOVIX

const botaoVoltar = document.getElementById("btn-camera");

botaoVoltar.addEventListener("click", function() {
    window.location.href = "../index.html";
});
