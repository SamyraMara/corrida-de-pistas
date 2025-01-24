function validarResposta() {
    const respostaCorreta = "01/05/2024";
    const respostaDigitada = document.getElementById("resposta").value;

    if (respostaDigitada === respostaCorreta) {
        document.getElementById("resultado").innerText = "Parabéns! Dica desbloqueada: Posso estar perto do que você montou.";
    } else {
        document.getElementById("resultado").innerText = "Resposta incorreta. Tente novamente.";
    }
}
