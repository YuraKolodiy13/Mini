const progresses = document.querySelectorAll('.skills__line');
const progress = document.querySelector('.about__skills');

function isVisible(elem) {
    let coords = elem.getBoundingClientRect();
    let windowHeight = document.documentElement.clientHeight;
    // верхняя граница elem в пределах видимости ИЛИ нижняя граница видима
    let topVisible = coords.top > 0 && coords.top < windowHeight;
    let bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;
    return topVisible || bottomVisible;
}
function showProgress() {
    if(isVisible(progress)){
        setTimeout(function () {
            [...progresses].map(function (item) {
                item.style.width = item.parentNode.previousElementSibling.querySelector('span').textContent;
            })
        }, 500);
        window.removeEventListener('scroll', showProgress);
    }
}
window.addEventListener('scroll', showProgress);


$(function () {
    $('.tabs a').click(function () {
        $(this).parents('.tab__wrapper').find('.tabCont').addClass('hide');
        $(this).parent().siblings().removeClass('active');
        var id = $(this).attr('href');
        $(id).removeClass('hide');
        $(this).parent().addClass('active');
        return false;
    });
});

//map
function initMap() {
    let coordinates = {lat: 47.212325, lng: 38.933663},

        map = new google.maps.Map(document.getElementById('map'), {
            center: coordinates,
            zoom: 17,
            scrollwheel: false
        });

        let image = 'img/marker.png',

        marker = new google.maps.Marker({
            position: coordinates,
            map: map,
            icon: image
        });
}
