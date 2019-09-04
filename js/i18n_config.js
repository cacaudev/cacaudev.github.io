var set_locale_to = function (locale) {
    if (locale)
        jQuery.i18n().locale = locale;
    jQuery('body').i18n();
};

jQuery(function () {
    jQuery.extend(jQuery.i18n.parser.emitter, {
        sitename: () => "App To Test jquery"
    });
});

jQuery(function (jQuery) {
    jQuery.i18n().load({
        'en': './i18n/en.json',
        'pt': './i18n/pt.json'
    }).done(function () {
        console.log('Languages loaded!');

        // Browser default language
        var userLang = navigator.language || navigator.userLanguage;
        userLang = userLang.split('-')[0]; // In case the locale is like 'en-US', 'pt-BR'

        console.log('Browser language ', userLang);

        if (userLang) set_locale_to(navigator.language)

        // url(?locale) =>  takes the value of the locale GET parameter
        set_locale_to(url('?locale'));

        // supports HTML5 History/State APIs (persist locale)
        History.Adapter.bind(window, 'statechange', function () {
            set_locale_to(url('?locale'));
        });

        // Change the locale upon click event on button
        jQuery('.switch-locale').on('click', 'a', function (e) {
            e.preventDefault();
            //jQuery.i18n().locale = jQuery(this).data('locale');
            History.pushState(null, null, "?locale=" + jQuery(this).data('locale'));
        });
    });
});