let btnOrdenarPorPreco = document.getElementById('btnOrdenarPorPreco')
btnOrdenarPorPreco.addEventListener('click', btnOrdenarPorPreco)

function ordenarLivrosPorPreco (){


    let livrosOrdenados = livros.sort((a,b,) => a.preco - b.preco)
    exibirOsLivrosNaTela(livrosOrdenados)


}