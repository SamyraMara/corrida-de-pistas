function validarResposta() {
    const respostaCorreta = "Que as pessoas importantes estejam sempre com você em todas as temporadas da sua vida.";
    const respostaDigitada = document.getElementById("resposta").value;

    if (respostaDigitada.toLowerCase() === respostaCorreta.toLowerCase()) {
        document.getElementById("resultado").innerText = "Parabéns! Dica desbloqueada: Perto de onde você guarda suas lembranças.";
    } else {
        document.getElementById("resultado").innerText = "Resposta incorreta. Tente novamente.";
    }
}
