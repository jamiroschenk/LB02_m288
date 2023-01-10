// HTML input Felder
startbetrag = document.querySelector("#startbetrag");
endbetrag = document.querySelector("#endbetrag");
währung1 = document.querySelector("#währung1");
währung2 = document.querySelector("#währung2");

// API Link
api_link = 'https://v6.exchangerate-api.com/v6/3e1614e0b75007cb331cfbfa/pair/'

// events, bei denen api abgefragt wird
startbetrag.addEventListener('change', go);
währung1.addEventListener('change', go);
währung2.addEventListener('change', go);

function go(schwarzes_Loch) {
    console.log(schwarzes_Loch.target.value);
}