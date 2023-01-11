// HTML input Felder
startbetrag = document.querySelector("#startbetrag");
endbetrag = document.querySelector("#endbetrag");
währung1 = document.querySelector("#währung1");
währung2 = document.querySelector("#währung2");

// API Link
api_link = 'https://v6.exchangerate-api.com/v6/3e1614e0b75007cb331cfbfa/pair/'

// Events, bei denen api abgefragt wird
startbetrag.addEventListener('change', go);
währung1.addEventListener('change', go);
währung2.addEventListener('change', go);

function go() {
    if (währung1.value != "Währung" && währung2.value != "Währung" && startbetrag.value != "") {
        fetch(api_link + währung1.value + "/" + währung2.value)
            .then((request) => request.json())
            .then((get_exchangerate) => get_exchangerate.conversion_rate)
            .then((claculate_result))
    } 
}

function claculate_result(exchangerate) {
    endbetrag.value = (() => {
        return exchangerate * startbetrag.value
    })()
}