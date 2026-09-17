function verificarTriagem() {


    /* ========================= */
    /* PONTUAÇÃO */
    /* ========================= */

    let pontos = 0;


    /* ========================= */
    /* DADOS DO PACIENTE */
    /* ========================= */

    let nome =
        document.getElementById("nome").value.trim();

    let idade =
        Number(
            document.getElementById("idade").value
        );

    let peso =
        Number(
            document.getElementById("peso").value
        );

    let altura =
        Number(
            document.getElementById("altura").value
        );


    /* ========================= */
    /* VALIDAÇÃO */
    /* ========================= */

    if (
        nome === "" ||
        idade <= 0 ||
        peso <= 0 ||
        altura <= 0
    ) {

        alert(
            "Preencha todos os campos corretamente."
        );

        return;

    }


    /* ========================= */
    /* CÁLCULO DO IMC */
    /* ========================= */

    let imc =
        peso / (altura * altura);


    let classificacaoIMC = "";


    if (imc < 18.5) {

        classificacaoIMC =
            "Abaixo do peso";

    }

    else if (imc < 25) {

        classificacaoIMC =
            "Peso normal";

    }

    else if (imc < 30) {

        classificacaoIMC =
            "Sobrepeso";

    }

    else {

        classificacaoIMC =
            "Obesidade";

    }


    /* ========================= */
    /* SINTOMAS */
    /* ========================= */


    // Febre

    if (
        document.getElementById("febre").checked
    ) {

        pontos += 1;

    }


    // Tosse

    if (
        document.getElementById("tosse").checked
    ) {

        pontos += 1;

    }


    // Dor de cabeça

    if (
        document.getElementById("dorCabeca").checked
    ) {

        pontos += 1;

    }


    // Falta de ar

    if (
        document.getElementById("faltaAr").checked
    ) {

        pontos += 3;

    }


    // Dor no peito

    if (
        document.getElementById("dorPeito").checked
    ) {

        pontos += 3;

    }


    // Sangramento

    if (
        document.getElementById("sangramento").checked
    ) {

        pontos += 3;

    }


    /* ========================= */
    /* IDADE */
    /* ========================= */

    if (idade >= 60) {

        pontos += 2;

    }


    /* ========================= */
    /* RESULTADO */
    /* ========================= */

    let resultado =
        document.getElementById("resultado");


    /* ========================= */
    /* PRIORIDADE BAIXA */
    /* ========================= */

    if (pontos <= 2) {


        resultado.innerHTML = `

            <div class="resultado-titulo">

                Olá, ${nome}! 👋

            </div>

            <div>

                <strong>IMC:</strong>

                ${imc.toFixed(2)}

                (${classificacaoIMC})

            </div>

            <div class="prioridade baixa">

                🟢 Prioridade Baixa

            </div>

        `;

    }


    /* ========================= */
    /* PRIORIDADE MÉDIA */
    /* ========================= */

    else if (pontos <= 5) {


        resultado.innerHTML = `

            <div class="resultado-titulo">

                Olá, ${nome}! 👋

            </div>

            <div>

                <strong>IMC:</strong>

                ${imc.toFixed(2)}

                (${classificacaoIMC})

            </div>

            <div class="prioridade media">

                🟡 Prioridade Média

            </div>

        `;

    }


    /* ========================= */
    /* PRIORIDADE ALTA */
    /* ========================= */

    else {


        resultado.innerHTML = `

            <div class="resultado-titulo">

                Olá, ${nome}! 👋

            </div>

            <div>

                <strong>IMC:</strong>

                ${imc.toFixed(2)}

                (${classificacaoIMC})

            </div>

            <div class="prioridade alta">

                🔴 Prioridade Alta

            </div>

        `;

    }

}