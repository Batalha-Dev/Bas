// pegando os elementos do HTML
// Aqui   as caixas de texto e o botão que criamos no HTML
// o ID (identificador único) de cada um.
const entradaA = document.getElementById('valor-a');
const entradaB = document.getElementById('valor-b');
const entradaC = document.getElementById('valor-c');
const botao = document.getElementById('botao-calcular');
const areaResultado = document.getElementById('resultado');

// colocandi uma ação ao botão
// addEventListener quando o usuário clicar  no botão.
// Quando o clique acontecer a função abaixo será executada
botao.addEventListener('click', function() {

    //  valores digitados e convert em nnum
    // O Number faz que o texto digitado seja tratado como um num 
    let a = Number(entradaA.value);
    let b = Number(entradaB.value);
    let c = Number(entradaC.value);

    // Limpa qualquer resultado ou erro antigo que estava na tela
    areaResultado.innerHTML = '';

    //  Validações 
    // Verifica se alguma das caixas de texto ficou vazia
    if (entradaA.value === '' || entradaB.value === '' || entradaC.value === '') {
        areaResultado.innerHTML = '<p class="erro">Preencha todos os campos.</p>';
        return; // O 'return' para a execução do código aqui, impedindo que faça contas sem números
    }

    // Na fórmula de Bhaskara (uma equação do 2º grau), o 'A' não pode ser igual a zero
    if (a === 0) {
        areaResultado.innerHTML = '<p class="erro">A não pode ser zero.</p>';
        return;
    }

    // O cálculo da matemática (Lógica Original)
    // Calcula o valor de Delta
    let delta = (Math.pow(b, 2)) - (4 * (a * c));
    let x1, x2; // Prepara as variáveis para as duas raízes

    // Se o Delta for negativo, não existe raiz quadrada de número negativo nos números reais
    if (delta < 0) {
        areaResultado.innerHTML = `<p>Delta = ${delta}</p><p class="erro">Não existem raízes reais.</p>`;
        return;
    }

    // Calcula X1 e X2 usando a raiz quadrada de Delta (Math.sqrt)
    x1 = (-(b) + (Math.sqrt(delta))) / (2 * a);
    x2 = (-(b) - (Math.sqrt(delta))) / (2 * a);

    // Mostra os valores internamente (para os desenvolvedores que abrem o F12 / Console)
    console.log("Valor do Delta:", delta);
    console.log("Valor de X1:", x1);
    console.log("Valor de X2:", x2);

    // Mostrando a resposta na tela para o usuário
    // Colocamos o HTML dentro da nossa área de resultado usando as variáveis calculadas
    areaResultado.innerHTML = `
        <p><strong>Delta:</strong> ${delta}</p>
        <p><strong>X1:</strong> ${x1}</p>
        <p><strong>X2:</strong> ${x2}</p>
    `;
});
