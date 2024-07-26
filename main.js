const botoes = document.querySelectorAll(".botao");
const abas = document.querySelectorAll(".aba-conteudo");

for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {
        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            abas[j].classList.remove("ativo");
        }
        botoes[i].classList.add("ativo");
        abas[i].classList.add("ativo");

        // Ativando a primeira sub-aba da aba principal ativada
        const subBotoes = abas[i].querySelectorAll(".botaoo");
        const subAbas = abas[i].querySelectorAll(".sub-aba-conteudo");
        for (let k = 0; k < subBotoes.length; k++) {
            subBotoes[k].classList.remove("ativo");
            subAbas[k].classList.remove("ativo");
        }
        if (subBotoes.length > 0) {
            subBotoes[0].classList.add("ativo");
            subAbas[0].classList.add("ativo");
        }
    }
}

document.querySelectorAll('.aba-conteudo').forEach((aba) => {
    const subBotoes = aba.querySelectorAll('.botaoo');
    const subAbas = aba.querySelectorAll('.sub-aba-conteudo');
    for (let i = 0; i < subBotoes.length; i++) {
        subBotoes[i].onclick = function () {
            for (let j = 0; j < subBotoes.length; j++) {
                subBotoes[j].classList.remove("ativo");
                subAbas[j].classList.remove("ativo");
            }
            subBotoes[i].classList.add("ativo");
            subAbas[i].classList.add("ativo");
        }
    }
});


document.getElementById('search-input').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const items = document.querySelectorAll('#items-list li');

    items.forEach(function(item) {
        const text = item.textContent.toLowerCase();
        if (text.startsWith(query)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});


