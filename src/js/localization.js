i18next.init({
lng: 'ca', // evtl. use language-detector https://github.com/i18next/i18next-browser-languageDetector
resources: { // evtl. load via xhr https://github.com/i18next/i18next-xhr-backend
    ca: {
    translation: {
        menu: {
        inici: 'Inici els pirineos',
        origen: 'Origen'
        },
        cont2:
        {
            texto:'Ja som tres generacions d’una família dedicades a l’avicultura, desde l’any XXXX. Les perspectives són bones perquè sembla que hi ha una quarta generació que voldrà continuar amb aquest negoci familiar. A tots ens apassionen els animals i poder contar amb la confiança dels nostres clients.El resultat d’aquesta passió i dedicació és un ou de qualitat, adaptat al clima fresc de la muntanya del prepirineu de Lleida.'
        }
    }
    },
    es: {
    translation: {
        menu: {
        inici: 'Inicio los pirineos',
        origen: 'Origen'
        }
    }
    }
}
}, function(err, t) {
// for options see
// https://github.com/i18next/jquery-i18next#initialize-the-plugin
jqueryI18next.init(i18next, $);

// start localizing, details:
// https://github.com/i18next/jquery-i18next#usage-of-selector-function
$('.menu').localize();
$('#cont2').localize();
});