const botaoAdicionar = document.getElementById("adicionarNota");
const botaoCalcular = document.getElementById("calcularMedia");

botaoAdicionar.addEventListener("click", adicionarNota);
botaoCalcular.addEventListener("click", calcularMedia);


function adicionarNota() {

    const containerNotas = document.getElementById("notas");

    const novaNota = document.createElement("div");

    novaNota.classList.add("nota");

    novaNota.innerHTML = `
        <input
            type="number"
            class="valor"
            placeholder="Nota"
            min="0"
            max="10"
            step="0.1"
        >

        <input
            type="number"
            class="peso"
            placeholder="Peso"
            min="0"
            step="0.1"
        >
    `;

    containerNotas.appendChild(novaNota);
}


function calcularMedia() {

    const valores = document.querySelectorAll(".valor");
    const pesos = document.querySelectorAll(".peso");

    let somaNotas = 0;
    let somaPesos = 0;

    for (let i = 0; i < valores.length; i++) {

        const nota = Number(valores[i].value);
        const peso = Number(pesos[i].value);

        if (valores[i].value === "" || pesos[i].value === "") {

            mostrarResultado("Preencha todas as notas e pesos.");

            return;
        }

        if (nota < 0 || nota > 10) {

            mostrarResultado("As notas devem estar entre 0 e 10.");

            return;
        }

        if (peso <= 0) {

            mostrarResultado("Os pesos devem ser maiores que zero.");

            return;
        }

        somaNotas += nota * peso;
        somaPesos += peso;
    }

    const media = somaNotas / somaPesos;

    mostrarResultado(
        `Sua média é <strong>${media.toFixed(2)}</strong>`
    );
}


function mostrarResultado(mensagem) {

    const resultado = document.getElementById("resultado");

    resultado.innerHTML = mensagem;
}