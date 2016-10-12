document.addEventListener( "DOMContentLoaded", lifting );

function lifting() {
    var maxKG = 300, kgLoop = 15, CONVERTER = 2.204, tableHTML = "";

    while (kgLoop <= maxKG) {
        tableHTML += '<tr><td>' + kgLoop + '</td><td>' + (kgLoop * CONVERTER).toFixed(2) + '</td></tr>';
        kgLoop++;
    }

    document.getElementById( 'kilo-math-body').innerHTML = tableHTML;
};