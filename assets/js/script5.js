function validarResposta() {
    const respostaCorreta = "campeão";
    const respostaDigitada = document.getElementById("resposta").value;

    if (respostaDigitada.toLowerCase() === respostaCorreta.toLowerCase()) {
        document.getElementById("resultado").innerText = "Parabéns! Dica desbloqueada: Acho legal olhar.";
    } else {
        document.getElementById("resultado").innerText = "Resposta incorreta. Tente novamente.";
    }
}
