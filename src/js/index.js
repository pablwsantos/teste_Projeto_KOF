const botoes = document.querySelectorAll(".botao")
const personagens = document.querySelectorAll(".personagem")
botoes.forEach (((botao, i)=> {
botao.addEventListener('click', () =>  {

    removerSelecionadoBotao()
    botao.classList.add("selecionado")

    removerSelecionadoPersonagem()
    personagens[i].classList.add("selecionado")
    })
}))

function removerSelecionadoPersonagem() {
    personagemSelecionado = document.querySelector(".personagem.selecionado")
    personagemSelecionado.classList.remove("selecionado")
}

function removerSelecionadoBotao() {
    const botaoselecionado = document.querySelector(".botao.selecionado")
    botaoselecionado.classList.remove("selecionado")
}
