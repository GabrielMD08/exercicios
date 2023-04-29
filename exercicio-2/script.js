
let filmes = ["matrix", "star wars", "harry potter", "jurassic park", "indiana jones"];
let notas = [];

let filme = document.getElementById('filme').value;
// let escolha= prompt('1')



function darNota(filme, nota) {

    // filme = escolha[0].toUpperCase() + escolha.substring(1);
    let indexFilme = filmes.indexOf(filme);

    if (indexFilme === -1) {
        alert(`Filme não encontrado: ${filme}`);

    }

    notas[indexFilme] = nota;

}
