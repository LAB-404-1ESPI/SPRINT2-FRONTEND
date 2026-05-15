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
    alert("IA JOVIX: A guerra fria foi um período de tensão política e militar entre os Estados Unidos (EUA) e a União Soviética (URSS) que durou aproximadamente do final da Segunda Guerra Mundial até o início dos anos 1990. Durante esse período, os EUA e a URSS competiram por influência global, ideologia e poder, mas nunca entraram em um conflito militar direto entre si.")
})