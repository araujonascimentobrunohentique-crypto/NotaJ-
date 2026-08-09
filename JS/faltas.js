const totalAulas = document.getElementById("total-aulas");
const faltas = document.getElementById("faltas");
const limite = document.getElementById("limite");

const calcular = document.getElementById("calcular");
const resultado = document.getElementById("resultado");


calcular.addEventListener("click", function () {

    const total = Number(totalAulas.value);
    const faltasAtuais = Number(faltas.value);
    const limitePercentual = Number(limite.value);


    // Validação dos campos

    if (
        !totalAulas.value ||
        !faltas.value ||
        !limite.value
    ) {
        resultado.innerHTML = `
            <p>Preencha todos os campos.</p>
        `;

        return;
    }


    if (
        total <= 0 ||
        faltasAtuais < 0 ||
        limitePercentual <= 0 ||
        limitePercentual > 100
    ) {
        resultado.innerHTML = `
            <p>Informe valores válidos.</p>
        `;

        return;
    }


    if (faltasAtuais > total) {
        resultado.innerHTML = `
            <p>
                O número de faltas não pode ser maior
                que o total de aulas.
            </p>
        `;

        return;
    }


    // Calcula o limite máximo de faltas

    const limiteFaltas = Math.floor(
        total * (limitePercentual / 100)
    );


    // Calcula a frequência atual

    const aulasFrequentadas = total - faltasAtuais;

    const frequencia =
        (aulasFrequentadas / total) * 100;


    // Verifica se ultrapassou o limite

    if (faltasAtuais > limiteFaltas) {

        resultado.innerHTML = `
            <p>
                ⚠️ Você ultrapassou o limite de faltas.
            </p>

            <p>
                Frequência atual:
                <strong>${frequencia.toFixed(1)}%</strong>
            </p>

            <p>
                Limite de faltas:
                <strong>${limiteFaltas} aulas</strong>
            </p>
        `;

        return;
    }


    // Calcula quantas faltas ainda pode ter

    const faltasRestantes =
        limiteFaltas - faltasAtuais;


   resultado.innerHTML = `
    <div class="resultado-card">

        <div class="resultado-titulo">
            Resultado
        </div>

        <div class="resultado-principal">
            Você pode faltar
            ${faltasRestantes}
            aula${faltasRestantes !== 1 ? "s" : ""}
        </div>

        <div class="resultado-info">

            <div>
                <span>Frequência atual</span>

                <strong>
                    ${frequencia.toFixed(1)}%
                </strong>
            </div>

            <div>
                <span>Limite de faltas</span>

                <strong>
                    ${limiteFaltas} aulas
                </strong>
            </div>

        </div>

    </div>
`;

});