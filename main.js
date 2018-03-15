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