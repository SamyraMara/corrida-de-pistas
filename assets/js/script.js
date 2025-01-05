// Frase secreta e dica para Desafio 1
const fraseCorreta = "Relâmpago McQueen é o melhor!";
const dica = "A dica é: Olhe no armário vermelho.";

const botaoEnviar = document.getElementById("botao-enviar");
const inputFrase = document.getElementById("input-frase");
const mensagem = document.getElementById("mensagem");

botaoEnviar.addEventListener("click", () => {
    const fraseDigitada = inputFrase.value.trim();

    if (fraseDigitada === fraseCorreta) {
        mensagem.style.color = "green";
        mensagem.textContent = dica;
    } else {
        mensagem.style.color = "red";
        mensagem.textContent = "Frase incorreta. Tente novamente!";
    }

    inputFrase.value = "";
});
