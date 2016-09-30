$(function() {
	lifting();
});

var lifting = function() {
    var maxKG = 300,
        kgLoop = 15;
    var CONVERTER = 2.204;

    while (kgLoop <= maxKG) {
        var pounds = (kgLoop * CONVERTER).toFixed(2);

        var template = [
        	'<tr>'
        		,'<td>' + kgLoop + '</td>'
        		,'<td>' + pounds + '</td>'
        	,'</tr>'
        ].join('')

        // console.log('kilos: ' + kgLoop + ', pounds: ' + pounds);

        $( '#kilo-math-body').append( template );

        kgLoop++;
    }
};