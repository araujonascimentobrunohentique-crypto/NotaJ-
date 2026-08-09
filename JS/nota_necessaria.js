const botaoAdicionar = document.getElementById("adicionarNota");
const botaoCalcular = document.getElementById("calcularNota");

botaoAdicionar.addEventListener("click", adicionarNota);
botaoCalcular.addEventListener("click", calcularNota);


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


function calcularNota() {

    const valores = document.querySelectorAll(".valor");
    const pesos = document.querySelectorAll(".peso");

    const mediaDesejada =
        Number(document.getElementById("mediaDesejada").value);

    const pesoProxima =
        Number(document.getElementById("pesoProxima").value);

    let somaNotas = 0;
    let somaPesos = 0;


    if (
        mediaDesejada === 0 ||
        document.getElementById("mediaDesejada").value === ""
    ) {

        mostrarResultado("Informe a média desejada.");

        return;
    }


    if (
        pesoProxima <= 0 ||
        document.getElementById("pesoProxima").value === ""
    ) {

        mostrarResultado("Informe o peso da próxima avaliação.");

        return;
    }


    if (mediaDesejada > 10) {

        mostrarResultado("A média deve estar entre 0 e 10.");

        return;
    }


    for (let i = 0; i < valores.length; i++) {

        const nota = Number(valores[i].value);
        const peso = Number(pesos[i].value);


        if (
            valores[i].value === "" ||
            pesos[i].value === ""
        ) {

            mostrarResultado(
                "Preencha todas as notas e pesos."
            );

            return;
        }


        if (nota < 0 || nota > 10) {

            mostrarResultado(
                "As notas devem estar entre 0 e 10."
            );

            return;
        }


        if (peso <= 0) {

            mostrarResultado(
                "Os pesos devem ser maiores que zero."
            );

            return;
        }


        somaNotas += nota * peso;
        somaPesos += peso;
    }


    const notaNecessaria =
        (
            mediaDesejada * (somaPesos + pesoProxima)
            - somaNotas
        ) / pesoProxima;


    if (notaNecessaria > 10) {

        mostrarResultado(
            `Você precisaria tirar <strong>${notaNecessaria.toFixed(2)}</strong>.
            Essa nota é maior que 10.`
        );

        return;
    }


    if (notaNecessaria <= 0) {

        mostrarResultado(
            "Você já alcançou a média desejada! 🎉"
        );

        return;
    }


    mostrarResultado(
        `Você precisa tirar <strong>${notaNecessaria.toFixed(2)}</strong>
        na próxima avaliação.`
    );
}


function mostrarResultado(mensagem) {

    const resultado = document.getElementById("resultado");

    resultado.innerHTML = mensagem;
}