// 1. PRIMEIRA PARTE: Capturando os elementos do HTML
// Aqui nós "pegamos" as caixas de texto e o botão que criamos no HTML
// usando o ID (identificador único) de cada um.
const entradaA = document.getElementById('valor-a');
const entradaB = document.getElementById('valor-b');
const entradaC = document.getElementById('valor-c');
const botao = document.getElementById('botao-calcular');
const areaResultado = document.getElementById('resultado');

// 2. SEGUNDA PARTE: Adicionando uma ação ao botão
// Dizemos para o navegador "escutar" (addEventListener) quando o usuário clicar ('click') no botão.
// Quando o clique acontecer, a função abaixo será executada.
botao.addEventListener('click', function() {
    
    // 3. Pegando os valores digitados e transformando em números
    // O Number() garante que o texto digitado seja tratado como um número para podermos fazer as contas.
    let a = Number(entradaA.value);
    let b = Number(entradaB.value);
    let c = Number(entradaC.value);

    // Limpa qualquer resultado ou erro antigo que estava na tela
    areaResultado.innerHTML = '';

    // 4. TERCEIRA PARTE: Validações (Garantindo que o usuário digitou tudo certo)
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

    // 5. QUARTA PARTE: O cálculo da matemática (Lógica Original)
    // Calcula o valor de Delta
    let delta = (Math.pow(b, 2)) - (4 * (a * c));
    let x1, x2; // Prepara as variáveis para as duas raízes

    // Se o Delta for negativo, não existe raiz quadrada de número negativo nos números reais
    if (delta < 0) {
        areaResultado.innerHTML = `<p class="erro">Delta = ${delta}. Não existem raízes reais.</p>`;
        return;
    }

    // Calcula X1 e X2 usando a raiz quadrada de Delta (Math.sqrt)
    x1 = (-(b) + (Math.sqrt(delta))) / (2 * a);
    x2 = (-(b) - (Math.sqrt(delta))) / (2 * a);

    // Mostra os valores internamente (para os desenvolvedores que abrem o F12 / Console)
    console.log("Valor do Delta:", delta);
    console.log("Valor de X1:", x1);
    console.log("Valor de X2:", x2);

    // 6. QUINTA PARTE: Mostrando a resposta na tela para o usuário
    // Colocamos o HTML dentro da nossa área de resultado, agora com spans para alinhamento bonitinho
    areaResultado.innerHTML = `
        <p><strong>Delta</strong> <span>${delta}</span></p>
        <p><strong>X1</strong> <span>${Number.isInteger(x1) ? x1 : x1.toFixed(2)}</span></p>
        <p><strong>X2</strong> <span>${Number.isInteger(x2) ? x2 : x2.toFixed(2)}</span></p>
    `;
});
