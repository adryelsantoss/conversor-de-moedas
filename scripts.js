console.log("start")

const convertButton = document.querySelector(".convert-button")
const currencySelectConverted = document.querySelector(".currency-select-converted")

convertButton.addEventListener("click", convertValues)

const dolarToday = 5.69
const euroToday = 6.37


function convertValues() {

    const inputCurrencyValue = document.querySelector(".input-value").value
    const currencyValueConvert = document.querySelector(".currency-value-convert") //Valor Real
    const currencyValueConverted = document.querySelector(".currency-value-converted") // Outras moedas

    console.log(currencySelectConverted.value)

    // Se o select estiver selecionado dolar
    if (currencySelectConverted.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency", currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    //Se o select estiver selecionado euro
    if (currencySelectConverted.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency", currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
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

    convertValues()
}