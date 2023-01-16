// führt die Funktion aus um die Währungen auszuwählen
get_options();

// HTML input Felder
let startbetrag = document.querySelector("#startbetrag");
let endbetrag = document.querySelector("#endbetrag");
let währung1 = document.querySelector("#währung1");
let währung2 = document.querySelector("#währung2");

// API Links
let api_link_exchange_rates = "https://v6.exchangerate-api.com/v6/3e1614e0b75007cb331cfbfa/pair/";
let api_link_codes = "https://v6.exchangerate-api.com/v6/3e1614e0b75007cb331cfbfa/codes";

// Events, bei denen die Umrechnung versucht wird
startbetrag.addEventListener('change', go);
währung1.addEventListener('change', go);
währung2.addEventListener('change', go);

// holt den Wechselkurs für die Währungen von der API, wenn alle Felder ausgefüllt sind
function go() {
    if (währung1.value != "Währung" && währung2.value != "Währung" && startbetrag.value != "") {
        fetch(api_link_exchange_rates + währung1.value + "/" + währung2.value)
            .then((request) => request.json())
            .then((get_exchangerate) => get_exchangerate.conversion_rate)
            .then((claculate_result));
    }
}

// errechnet den Endbetrag mit den Daten von go()
function claculate_result(exchangerate) {
    endbetrag.value = (() => {
        return exchangerate * startbetrag.value;
    })()
}

// holt alle möglichen Währungen von der API
function get_options() {
    fetch(api_link_codes)
        .then((request) => request.json())
        .then((get_countries) => get_countries.supported_codes)
        .then((add_options));
}

// fügt die Währungen dem DOM hinzu
function add_options(codes) {
    for (let i = 0; i < codes.length; i++) {
        option_element = '<option value="' + codes[i][0] + '">' + codes[i][1] + "</option>";
        währung1.insertAdjacentHTML("beforeend", option_element);
        währung2.insertAdjacentHTML("beforeend", option_element);
    }
}