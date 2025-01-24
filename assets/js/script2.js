function validarResposta() {
    const respostaCorreta = "JUNTOS EM TODAS AS FUTURAS TEMPORADAS";
    const respostaDigitada = document.getElementById("resposta").value;

    if (respostaDigitada === respostaCorreta) {
        document.getElementById("resultado").innerText = "Parabéns! Dica desbloqueada: Ache uma porta agora.";
    } else {
        document.getElementById("resultado").innerText = "Resposta incorreta. Tente novamente.";
    }
}
