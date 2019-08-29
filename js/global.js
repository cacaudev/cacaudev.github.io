// This will initialize the plugin 
// and show two dialog boxes: one with the text "Olá World"
// and other with the text "Good morning John!" 
jQuery.i18n.properties({
    name: 'homepage',
    path: 'locales/',
    mode: 'both',
    language: 'pt',
    async: true,
    callback: function () {
        $("#msg_welcome").text($.i18n.prop('msg_welcome'));
    }
});