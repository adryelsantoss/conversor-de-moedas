console.log("start")

const convertButton = document.querySelector(".convert-button")
const currencySelectConverted = document.querySelector(".currency-select-converted")
const currencySelectConvert = document.querySelector(".currency-select-convert")

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
        exchangeRates.real = 1                                      // Cotação do real
        exchangeRates.dolar = parseFloat(data.USDBRL.bid)         // Cotação do dólar
        exchangeRates.euro = parseFloat(data.EURBRL.bid)         // Cotação do euro
        exchangeRates.libra = parseFloat(data.GBPBRL.bid)       // Cotação da libra esterlina
        exchangeRates.iene = parseFloat(data.JPYBRL.bid)       // Cotação do Iene
        exchangeRates.bitcoin = parseFloat(data.BTCBRL.bid)   // Cotação do bitcoin

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
    const currencyValueConvert = document.querySelector(".currency-value-convert")
    const currencyValueConverted = document.querySelector(".currency-value-converted")

    // Se o select estiver selecionado dolar
    if (currencySelectConverted.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency", currency: "USD"
        }).format((inputCurrencyValue * exchangeRates[currencySelectConvert.value]) / exchangeRates.dolar)
    }

    //Se o select estiver selecionado euro
    if (currencySelectConverted.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency", currency: "EUR"
        }).format((inputCurrencyValue * exchangeRates[currencySelectConvert.value]) / exchangeRates.euro)
    }

    //Se o select estiver selecionado libra
    if (currencySelectConverted.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency", currency: "GBP"
        }).format((inputCurrencyValue * exchangeRates[currencySelectConvert.value]) / exchangeRates.libra)
    }

    //Se o select estiver selecionado iene
    if (currencySelectConverted.value == "iene") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency", currency: "JPY"
        }).format((inputCurrencyValue * exchangeRates[currencySelectConvert.value]) / exchangeRates.iene)
    }

    //Se o select estiver selecionado bitcoin
    if (currencySelectConverted.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency", currency: "BTC"
        }).format((inputCurrencyValue * exchangeRates[currencySelectConvert.value]) / exchangeRates.bitcoin)
    }

    //Se o select estiver selecionado real
    if (currencySelectConverted.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency", currency: "BRL"
        }).format((inputCurrencyValue * exchangeRates[currencySelectConvert.value]) / exchangeRates.real)
    }

    currencyValueConvert.innerHTML = formatValueByCurrency(inputCurrencyValue, currencySelectConvert.value)

}

currencySelectConverted.addEventListener("change", changeCurrency)
currencySelectConvert.addEventListener("change", changeCurrency)

function changeCurrency() {
    const currencyNameConverted = document.getElementById("currency-name-converted")
    const currencyImg = document.getElementById("currency-img-converted")
    const currencyNameConvert = document.getElementById("currency-name-convert")
    const currencyImgConvert = document.getElementById("currency-img-convert")

    //------------Troca texto e imagem da area que vai convertida-------------

    if (currencySelectConverted.value == "dolar") {
        currencyNameConverted.innerHTML = "Dólar"
        currencyImg.src = "./assets/dolar.png"
    }

    if (currencySelectConverted.value == "euro") {
        currencyNameConverted.innerHTML = "Euro"
        currencyImg.src = "./assets/euro.png"
    }

    if (currencySelectConverted.value == "libra") {
        currencyNameConverted.innerHTML = "Libra"
        currencyImg.src = "./assets/libra.png"
    }

    if (currencySelectConverted.value == "iene") {
        currencyNameConverted.innerHTML = "Iene"
        currencyImg.src = "./assets/jpy.png"
    }

    if (currencySelectConverted.value == "bitcoin") {
        currencyNameConverted.innerHTML = "Bitcoin"
        currencyImg.src = "./assets/bitcoin.png"
    }

    if (currencySelectConverted.value == "real") {
        currencyNameConverted.innerHTML = "Real"
        currencyImg.src = "./assets/real.png"
    }

    //------------Troca texto e imagem da area que vai converter-------------

    if (currencySelectConvert.value == "dolar") {
        currencyNameConvert.innerHTML = "Dólar"
        currencyImgConvert.src = "./assets/dolar.png"
    }

    if (currencySelectConvert.value == "euro") {
        currencyNameConvert.innerHTML = "Euro"
        currencyImgConvert.src = "./assets/euro.png"
    }

    if (currencySelectConvert.value == "libra") {
        currencyNameConvert.innerHTML = "Libra"
        currencyImgConvert.src = "./assets/libra.png"
    }

    if (currencySelectConvert.value == "iene") {
        currencyNameConvert.innerHTML = "Iene"
        currencyImgConvert.src = "./assets/jpy.png"
    }

    if (currencySelectConvert.value == "bitcoin") {
        currencyNameConvert.innerHTML = "Bitcoin"
        currencyImgConvert.src = "./assets/bitcoin.png"
    }

    if (currencySelectConvert.value == "real") {
        currencyNameConvert.innerHTML = "Real"
        currencyImgConvert.src = "./assets/real.png"
    }

    convertValues()
}

function formatValueByCurrency(value, currency) {

    const locales = {
        dolar: "en-US",
        euro: "de-DE",
        libra: "en-GB",
        iene: "ja-JP",
        bitcoin: "en-US",
        real: "pt-BR"
    }

    const currencyCodes = {
        dolar: "USD",
        euro: "EUR",
        libra: "GBP",
        iene: "JPY",
        bitcoin: "BTC",
        real: "BRL"
    }

    return new Intl.NumberFormat(locales[currency], {
        style: "currency",
        currency: currencyCodes[currency]
    }).format(value)
}