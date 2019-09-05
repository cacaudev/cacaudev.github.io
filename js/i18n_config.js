(function ($) {
    "use strict"; // Start of use strict

    var set_locale_to = function (locale) {
        if (locale)
            $.i18n().locale = locale;
        $('body').i18n();
    };

    $(function () {
        $.extend($.i18n.parser.emitter, {
            sitename: function () {
                return "App To Test $";
            }
        });
    });

    $(function ($) {
        $.i18n().load({
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
            $('.switch-locale').on('click', 'a', function (e) {
                e.preventDefault();
                History.pushState(null, null, "?locale=" + $(this).data('locale'));
            });
        });
    });


})(jQuery); // End of use strict