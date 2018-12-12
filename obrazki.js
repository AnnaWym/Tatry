// Get the modal
var modal = document.getElementById('myModal');

var powiekszonyObrazek = 0;
var rokGalerii = 0;

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var calosc = document.getElementById("myModal");

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

calosc.onclick = function() {
    return;
    modal.style.display = "none";
}

function powiekszObrazek(numerObrazka, rokObrazka) {
    var otwartyObrazek = document.getElementById("img01");
    var sciezka = 'img' + rokObrazka + '/' + numerObrazka + '.jpg'
    powiekszonyObrazek = numerObrazka;
    rokGalerii = rokObrazka;
    modal.style.display = "block";
    otwartyObrazek.src = sciezka
}

function kliknietoDalej() {

    var obrazekDoPowiekszenia = powiekszonyObrazek + 1;
    if (obrazekDoPowiekszenia > 8) {
        modal.style.display = "none";
        return;
    }
    powiekszObrazek(obrazekDoPowiekszenia, rokGalerii);
}

function kliknietoWstecz() {

    var obrazekDoPowiekszenia = powiekszonyObrazek - 1;
    if (obrazekDoPowiekszenia < 1) {
        modal.style.display = "none";
        return;
    }
    powiekszObrazek(obrazekDoPowiekszenia, rokGalerii);
}