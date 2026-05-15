const incorreto1 = document.getElementById("incorreto1")
const correto = document.getElementById("correto")
const incorreto2 = document.getElementById("incorreto2")
const incorreto3 = document.getElementById("incorreto3")

incorreto1.addEventListener("click", function(){
    alert("Resposta incorreta! Tente novamente.")
})
correto.addEventListener("click", function(){
    alert("Resposta correta! Parabéns.")
    window.location.href = "../pages/galeria.html"
})
incorreto2.addEventListener("click", function(){
    alert("Resposta incorreta! Tente novamente.")
})
incorreto3.addEventListener("click", function(){
    alert("Resposta incorreta! Tente novamente.")
})


const respostaia = document.getElementById("respostaia")
respostaia.addEventListener("click", function(){
    alert("IA JOVIX: 10% de 100 é igual a 10, pois 10% significa 10 partes de 100, ou seja, 10/100 * 100 = 10.")
})