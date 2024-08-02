const key = "3ec323c06c0162ff9d0f5b179d165703";

function colocarDadosNaTela(dados) {
    console.log(dados);
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name;
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C";
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description;
    document.querySelector(".umidade").innerHTML =dados.main.humidity + "%";
    document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
}

async function buscarCidade(cidade) {
    try {
        const resposta = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`);
        const dados = await resposta.json();
        colocarDadosNaTela(dados);
    } catch (erro) {
        console.error("Erro ao buscar cidade:", erro);
    }
}

function cliqueiNoBotao() {
    const input = document.querySelector(".input-cidade").value;
    buscarCidade(input);
}
