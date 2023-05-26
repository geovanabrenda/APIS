//Metodo Fetch() para buscar o arquivo dados.json transformando o resultado em objeto usando metodo response.json

fetch('dados.json').then(response => response.json())
.then(corpo => {
    // Acessando os dados do objeto JSON e adicionando ao HTML dentro de um elemento div usando a propriedade innerHTML(FRONT-END)

    document.getElementById('imagem').innerHTML = corpo.rock.image;
    document.getElementById('nome').innerHTML = corpo.rock.name;
    document.getElementById('disco').innerHTML = corpo.rock.album;
    document.getElementById('estilo').innerHTML = corpo.rock.style;
    document.getElementById('preco').innerHTML = corpo.rock.price;

    document.getElementById('imagem1').innerHTML = corpo.rock2.image;
    document.getElementById('nome1').innerHTML = corpo.rock2.name;
    document.getElementById('disco1').innerHTML = corpo.rock2.album;
    document.getElementById('estilo1').innerHTML = corpo.rock2.style;
    document.getElementById('preco1').innerHTML = corpo.rock2.price;

    document.getElementById('imagem2').innerHTML = corpo.rock3.image;
    document.getElementById('nome2').innerHTML = corpo.rock3.name;
    document.getElementById('disco2').innerHTML = corpo.rock3.album;
    document.getElementById('estilo2').innerHTML = corpo.rock3.style;
    document.getElementById('preco2').innerHTML = corpo.rock3.price;

    
})

