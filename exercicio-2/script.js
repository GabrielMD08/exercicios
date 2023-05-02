let filmes = ['vingadores', 'star wars', 'bastardos inglorios'];
let notas = [];

function escolherFilme(filme) {
    
    filme = document.getElementById('filme').value;
    let filmeIndex = filmes.indexOf(filme);

    if (filmeIndex === -1) {
        alert(`Filme "${filme}" não encontrado, tente novamente!`)
        return;
    }

    document.getElementById('titulo').innerHTML = `Filme: ${filme}`;
    
    switch (filmeIndex) {
        case 0:
            document.getElementById('cartaz').innerHTML = '<img class="cartaz" src="assets/vingadores.jpg">';
            break;

        case 1:
            document.getElementById('cartaz').innerHTML = '<img class="cartaz" src="assets/star wars.jpg">';
            break;

        case 2:
            document.getElementById('cartaz').innerHTML = '<img class="cartaz" src="assets/bastardos inglorios.jpg">';
            break;
    }
    

}
// notas[filmeIndex] = nota;



