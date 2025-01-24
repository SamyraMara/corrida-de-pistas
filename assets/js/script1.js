function validarResposta() {
    const respostaCorreta = "Bem-vindo à temporada 19";
    const respostaDigitada = document.getElementById("resposta").value;

    if (respostaDigitada.toLowerCase() === respostaCorreta.toLowerCase()) {
        document.getElementById("resultado").innerText = "Parabéns! Dica desbloqueada: Perto de onde você guarda suas lembranças.";
    } else {
        document.getElementById("resultado").innerText = "Resposta incorreta. Tente novamente.";
    }
}
