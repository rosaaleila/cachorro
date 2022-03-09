'use strict'

const pesquisarCachorro = async (raca) => {

    const url = `https://dog.ceo/api/breed/${raca}/images`
    const response = await fetch(url)
    const data = await response.json()
    return data
    
}

const criarImg = (imagem) => {

    const img = document.createElement('img')
    img.src = imagem
    return img

}

const carregarImagens = async () => {

    const container = document.getElementById('imagem-container')
    const raca = document.getElementById('raca').value
    const imagens = await pesquisarCachorro(raca)
    const tagImagens = imagens.message.map(criarImg)
    container.replaceChildren(...tagImagens)
    
}

document.getElementById('pesquisar').addEventListener('click', carregarImagens)


