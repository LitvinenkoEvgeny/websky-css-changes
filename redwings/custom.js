$(function () {

    $('body').on('click', 'a.goToOldBrandsTable', function (e) {
        e.preventDefault();
        scrollToPopupLink('oldBrandsTable');
    });

    $('body').on('click', 'a.goToNewBrandsTable', function (e) {
        e.preventDefault();
        scrollToPopupLink('newBrandsTable');
    });

    function scrollToPopupLink(name) {
        var offset = $('.popup_compare .popup__i a.' + name).offset();
        $('.popup_compare .popup__i').scrollTop(offset.top - 270);
    }

});