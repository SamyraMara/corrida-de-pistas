function validarResposta() {
    const respostaCorreta = "122";
    const respostaDigitada = document.getElementById("resposta").value;

    if (respostaDigitada === respostaCorreta) {
        document.getElementById("resultado").innerText = "Parabéns! Dica desbloqueada: Olha na sua mesinha.";
    } else {
        document.getElementById("resultado").innerText = "Resposta incorreta. Tente novamente.";
    }
}
