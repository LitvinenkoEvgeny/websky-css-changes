/*$(document).on('click', 'search-form .orderSearchForm.rsln-searchForm .compactShow', function () {
  $(this).find('.compactDropShow_js').toggleClass("open");
  $(this).next('.compactDrop').toggleClass("active");
});*/
var interval_2 = setInterval(function() {
    if ($ && $(".js_phone_for_nationality_RU").length) {
        $(".js_phone_for_nationality_RU").each(function() {
            if ($(this).val() == "") {
                $(this).val("7");
            }
        });
    }
}, 100);
var interval_3 = setInterval(function() {        if ($ && $('.textInp_js').length) {            $('.textInp_js').on('focus', function () {				if ($(window).width() <= 450) {					$('html,body').animate({scrollTop: $(this).offset().top}, 800);				}            });            clearInterval(interval_3);        }    }, 100);        $(document).on('click', '.showHoverDrop_js', function() {        $(this).parent().toggleClass('active');    });
