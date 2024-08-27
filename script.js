let botaoCriptografar = document.querySelector("#botao-criptografar");
let botaoDescriptografar = document.querySelector("#botao-descriptografar");
let botaoCopiar = document.querySelector("#botao-copiar");
let saida3 = document.querySelector(".saida2");
let saida4 = document.querySelector("#saida4");
let textoSaida = document.querySelector("#texto-saida");

botaoCriptografar.addEventListener('click', function() {
    let text = document.querySelector("#caixa-texto").value; 

    text = text.replaceAll("e", "enter")
    text = text.replaceAll("i", "imes")
    text = text.replaceAll("a", "ai")
    text = text.replaceAll("o", "ober")
    text = text.replaceAll("u", "ufat");

    if (text === "") {
        saida3.style.display = "block"; 
        saida4.style.display = "none";  
    } else {
        saida3.style.display = "none";  
        saida4.style.display = "block"; 
        textoSaida.textContent = text;  
    }
});

botaoDescriptografar.addEventListener('click', function() {
    let text = document.querySelector("#caixa-texto").value;

    text = text.replaceAll("enter", "e")
    text = text.replaceAll("imes", "i")
    text = text.replaceAll("ai", "a")
    text = text.replaceAll("ober", "o")
    text = text.replaceAll("ufat", "u");

    if (text === "") {
        saida3.style.display = "block"; 
        saida4.style.display = "none";  
    } else {
        saida3.style.display = "none";  
        saida4.style.display = "block";
        textoSaida.textContent = text;  
    }
});

botaoCopiar.addEventListener('click', function() {

    let textoParaCopiar = textoSaida.textContent;

    navigator.clipboard.writeText(textoParaCopiar)

});
