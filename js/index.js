(function($) {

    var toggle, icon;

    function onDocumentReady() {
        toggle = $('#toggle');
        icon = $('#icon');
        toggle.on('click', onToggleClick);
    }

    function onToggleClick() {
        var aniEasing = Quart.easeInOut,
            aniDuration = 0.75,
            top = icon.find('.top'),
            middle = icon.find('.middle'),
            bottom = icon.find('.bottom');

        toggle.toggleClass('active');

        if (!toggle.hasClass('animating')) {
            toggle.addClass('animating');
            TweenMax.to(icon, aniDuration, {
                rotation: '+=180',
                ease: aniEasing,
                onComplete: function() {
                    toggle.removeClass('animating');
                }
            });

            if (toggle.hasClass('active')) {
                TweenMax.to(top, aniDuration, {
                    width: '50%',
                    rotation: 45,
                    x: '104%',
                    y: 5,
                    ease: aniEasing,
                    yoyo: true
                });
                TweenMax.to(bottom, aniDuration, {
                    width: '50%',
                    rotation: -45,
                    x: '108%',
                    y: -5,
                    ease: aniEasing
                });
            } else {
                TweenMax.to(top, aniDuration, {
                    width: '100%',
                    rotation: 0,
                    x: '0%',
                    y: 0,
                    ease: aniEasing
                });
                TweenMax.to(bottom, aniDuration, {
                    width: '100%',
                    rotation: 0,
                    x: '0%',
                    y: 0,
                    ease: aniEasing
                });
            }
        }
    }

    $(onDocumentReady);
    
})(jQuery);