i18next.init({
lng: 'ca', // evtl. use language-detector https://github.com/i18next/i18next-browser-languageDetector
resources: { // evtl. load via xhr https://github.com/i18next/i18next-xhr-backend
    ca: {
    translation: {
        menu: {
        inici: 'Inici els pirineos',
        origen: 'Origen'
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
});