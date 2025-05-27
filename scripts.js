console.log("start")

const convertButton = document.querySelector(".convert-button")
const currencySelectConverted = document.querySelector(".currency-select-converted")

convertButton.addEventListener("click", convertValues)

// Variavel para buscar as cotações
let exchangeRates = {}

// Função assíncrona para buscar as cotações em tempo real
async function fetchExchangeRates() {
    try {
        // Faz a requisição para a API com as moedas desejadas
        const response = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,GBP-BRL,BTC-BRL,JPY-BRL")
        const data = await response.json()

        // Atualiza o objeto com as cotações recebidas da API
        exchangeRates.dolar = parseFloat(data.USDBRL.high)         // Cotação do dólar
        exchangeRates.euro = parseFloat(data.EURBRL.high)         // Cotação do euro
        exchangeRates.libra = parseFloat(data.GBPBRL.high)       // Cotação da libra esterlina
        exchangeRates.iene = parseFloat(data.JPYBRL.high)       // Cotação do Iene
        exchangeRates.bitcoin = parseFloat(data.BTCBRL.high)   // Cotação do bitcoin

        // Mostra no console as cotações atualizadas
        console.log("Cotação atualizada:", exchangeRates)
    } catch (error) {
        console.error("Erro ao buscar cotações:", error)
    }
}

// Chama a função ao carregar a página
fetchExchangeRates()


function convertValues() {

    const inputCurrencyValue = document.querySelector(".input-value").value
    const currencyValueConvert = document.querySelector(".currency-value-convert") //Valor Real
    const currencyValueConverted = document.querySelector(".currency-value-converted") // Outras moedas


    // Se o select estiver selecionado dolar
    if (currencySelectConverted.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency", currency: "USD"
        }).format(inputCurrencyValue / exchangeRates.dolar)
    }

    //Se o select estiver selecionado euro
    if (currencySelectConverted.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency", currency: "EUR"
        }).format(inputCurrencyValue / exchangeRates.euro)
    }

    //Se o select estiver selecionado libra
    if (currencySelectConverted.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency", currency: "GBP"
        }).format(inputCurrencyValue / exchangeRates.libra)
    }

    //Se o select estiver selecionado iene
    if (currencySelectConverted.value == "iene") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency", currency: "JPY"
        }).format(inputCurrencyValue / exchangeRates.iene)
    }

    //Se o select estiver selecionado bitcoin
    if (currencySelectConverted.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency", currency: "BTC"
        }).format(inputCurrencyValue / exchangeRates.bitcoin)
    }


    currencyValueConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency", currency: "BRL"
    }).format(inputCurrencyValue)
}

currencySelectConverted.addEventListener("change", changeCurrency)

function changeCurrency() {
    const currencyNameConverted = document.getElementById("currency-name-converted")
    const currencyImg = document.getElementById("currency-img-converted")

    //Troca o texto da area convertida e imagem quando o select for dolar
    if (currencySelectConverted.value == "dolar") {
        currencyNameConverted.innerHTML = "Dólar"
        currencyImg.src = "./assets/dolar.png"
    }


    //Troca o texto da area convertida e imagem quando o select for euro
    if (currencySelectConverted.value == "euro") {
        currencyNameConverted.innerHTML = "Euro"
        currencyImg.src = "./assets/euro.png"
    }

    //Troca o texto da area convertida e imagem quando o select for libra
    if (currencySelectConverted.value == "libra") {
        currencyNameConverted.innerHTML = "Libra"
        currencyImg.src = "./assets/libra.png"
    }

    //Troca o texto da area convertida e imagem quando o select for iene
    if (currencySelectConverted.value == "iene") {
        currencyNameConverted.innerHTML = "Iene"
        currencyImg.src = "./assets/jpy.png"
    }

    //Troca o texto da area convertida e imagem quando o select for bitcoin
    if (currencySelectConverted.value == "bitcoin") {
        currencyNameConverted.innerHTML = "Bitcoin"
        currencyImg.src = "./assets/bitcoin.png"
    }

   
    convertValues()
}