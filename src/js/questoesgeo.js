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
    alert("IA JOVIX: A capital do Brasil é Brasília, que foi inaugurada em 1960. A cidade foi planejada e construída para ser a nova capital do país, substituindo o Rio de Janeiro. Brasília é conhecida por sua arquitetura moderna e por ser um importante centro político e administrativo do Brasil.")
})