function dolar() {
    const valor = document.getElementById("dolar").value;
    const resultado = document.getElementById("resultado");
    const cotacao = 5.16;

    const valorDolar = Number(valor);

    if (isNaN(valorDolar) || valor.trim() === '') {
        resultado.innerHTML = "Por favor, insira um valor válido em dólares.";
    } else {
        let cambio = valorDolar * cotacao;
        resultado.innerHTML = `R$ ${cambio.toFixed(2)}`;
    }
}
