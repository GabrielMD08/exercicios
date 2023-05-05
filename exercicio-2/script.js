
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
function darNota(filme, nota) {

    filme = document.getElementById('filme').value;
    let filmeIndex = filmes.indexOf(filme);
    nota = document.getElementById('feedback').value;

    if (nota >= 1 && nota <=5 ){
       notas[filmeIndex] += nota;
       alert('Sua nota foi enviada com sucesso!!\nMuito obrigado por compartilhar sua opinião conosco!')
        return;
    }

    else{
        alert('Nota invalida! Por favor, de uma nota de 1 a 5 para o filme')
        return;
    }

}

