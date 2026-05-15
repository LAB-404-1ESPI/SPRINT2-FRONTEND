const matematica = document.getElementById("matematica")
const historia = document.getElementById("historia")
const geografia = document.getElementById("geografia")


matematica.addEventListener("click", function(){
    window.location.href = "./questoesmat.html"
})
historia.addEventListener("click", function(){
    window.location.href = "./questoeshist.html"
})
geografia.addEventListener("click", function(){
    window.location.href = "./questoesgeo.html"
})  


// Declarando variáveis para o DOM da página IA JOVIX

const botaoVoltar = document.getElementById("btn-camera");

botaoVoltar.addEventListener("click", function() {
    window.location.href = "../index.html";
});