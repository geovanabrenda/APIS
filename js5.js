fetch(`https://economia.awesomeapi.com.br/json/last/USD-BRL`).then(response => {
    return response.json()
}).then(economia => {
    console.log(economia)
    document.getElementById("dolar").value = economia.USDBRL.bid;
    document.getElementById("moeda").innerHTML = economia.USDBRL.code;

    cotacao = economia.USDBRL['bid']
    console.log("real : " + (cotacao * 2))



    const num1 = document.getElementById('num1');
    const num2 = document.getElementById('num2');
    const resultado = document.getElementById('resultado');

    

    num1.addEventListener('input', () => {
        let valorNum1 = parseInt(num1.value);
        if (isNaN(valorNum1)) {
          valorNum1 = 0;
        }
        const conversao = valorNum1 * parseFloat(cotacao);
        resultado.textContent = conversao.toFixed(2);
      });

   

   













})












