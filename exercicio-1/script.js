
function montarBaralho() {

    const nipes = ['ouro', 'espadas', 'copas', 'paus'];
    const valores = ['ás', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'valete', 'rainha', 'rei'];
    const baralho = [];

    for (const nipe of nipes) {
        for (const valor of valores) {

            const carta = {nipe, valor};
            baralho.push(carta);
            
        }
    }

    return baralho[Math.floor(Math.random() * baralho.length)];

}
console.log(montarBaralho());
