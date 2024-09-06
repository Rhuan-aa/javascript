// Função para validar informações de peso e altura
function validarInfo(peso, altura) {
    if (isNaN(altura) || altura <= 0) {
        alert('Digite um valor válido para a altura (maior que zero).');
        return false;
    }
    if (isNaN(peso) || peso <= 0) {
        alert('Digite um valor válido para o peso (maior que zero).');
        return false;
    }
    return true;
}

// Função para calcular o IMC
function calcularIMC(peso, altura) {
    return (peso / (altura ** 2)).toFixed(2);
}

// Função para determinar o status baseado no IMC
function determinarStatus(imc) {
    if (imc < 18.5) return 'Magreza';
    if (imc < 24.9) return 'Saudável';
    if (imc < 29.9) return 'Sobrepeso';
    if (imc < 34.9) return 'Obesidade I';
    if (imc < 39.9) return 'Obesidade II';
    return 'Obesidade III';
}

// Adicionar evento de clique ao botão de calcular
const btnCalculate = document.querySelector('form button[type="submit"]');
btnCalculate.addEventListener('click', function(event) {
    event.preventDefault();
    adicionar();
});

// Função para adicionar um novo registro na tabela
function adicionar() {
    const nome = document.getElementById('nome').value;
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    if (!validarInfo(peso, altura)) return;

    const imc = calcularIMC(peso, altura);
    const status = determinarStatus(imc);

    let tabela = document.querySelector("#Cadastros tbody");
    let tr = document.createElement("tr");

    for (let i = 0; i < 6; i++) {
        let td = document.createElement("td");
        if (i == 0) {
            td.append(nome);
        }
        if (i == 1) {
            let alturaFormat = altura.toFixed(2) + " m";
            td.append(alturaFormat);
        }
        if (i == 2) {
            let pesoFormat = peso.toFixed(2) + " kg";
            td.append(pesoFormat);
        }
        if (i == 3) {
            td.append(imc);
        }
        if (i == 4) {
            td.append(status);
        }
        if (i == 5) {
            td.innerHTML = `
                <button onclick="alterarPeso(this, 0.5)">+</button>
                <button onclick="alterarPeso(this, -0.5)">-</button>
                <button onclick="excluir(this)">Del</button>
            `;
        }
        tr.appendChild(td);
    }
    tabela.appendChild(tr);
}

// Função para alterar o peso de um registro
function alterarPeso(button, delta) {
    const tr = button.parentElement.parentElement;
    const pesoTd = tr.children[2];
    const alturaTd = tr.children[1];
    const imcTd = tr.children[3];
    const statusTd = tr.children[4];

    let peso = parseFloat(pesoTd.textContent);
    const altura = parseFloat(alturaTd.textContent);

    peso = Math.max(0, peso + delta);
    const imc = calcularIMC(peso, altura);
    const status = determinarStatus(imc);

    pesoTd.textContent = `${peso.toFixed(2)} kg`;
    imcTd.textContent = imc;
    statusTd.textContent = status;
}

// Função para excluir um registro
function excluir(button) {
    const tr = button.parentElement.parentElement;
    tr.remove();
}

// Função para remover o registro com o maior IMC
function removerMaiorIMC() {
    const linhas = document.querySelectorAll("#Cadastros tbody tr");
    if (linhas.length === 0) return;

    let maiorIMC = -Infinity;
    let linhaMaiorIMC = null;

    linhas.forEach(linha => {
        const imc = parseFloat(linha.children[3].textContent);
        if (imc > maiorIMC) {
            maiorIMC = imc;
            linhaMaiorIMC = linha;
        }
    });

    if (linhaMaiorIMC) {
        linhaMaiorIMC.remove();
    }
}

// Função para remover o registro com o menor IMC
function removerMenorIMC() {
    const linhas = document.querySelectorAll("#Cadastros tbody tr");
    if (linhas.length === 0) return;

    let menorIMC = Infinity;
    let linhaMenorIMC = null;

    linhas.forEach(linha => {
        const imc = parseFloat(linha.children[3].textContent);
        if (imc < menorIMC) {
            menorIMC = imc;
            linhaMenorIMC = linha;
        }
    });

    if (linhaMenorIMC) {
        linhaMenorIMC.remove();
    }
}

// Adicionar eventos de clique aos botões de remover maior e menor IMC
document.getElementById('removerMaiorIMC').addEventListener('click', removerMaiorIMC);
document.getElementById('removerMenorIMC').addEventListener('click', removerMenorIMC);