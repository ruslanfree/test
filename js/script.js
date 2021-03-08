


//burger menu

let burger = document.querySelector('.header__burger');
let navigation = document.querySelector('.header__list');
let main = document.querySelector('main')

burger.addEventListener('click', function () {
    burger.classList.toggle('active');
    if (burger.classList.contains('active')) {
        navigation.classList.add('active');
        main.classList.add('active');
    } else {
        navigation.classList.remove('active');
        main.classList.remove('active');
    }

})

// trial- anchors

let trialBtn = document.querySelectorAll('.free-trial');



trialBtn.forEach(function (item) {
    item.setAttribute('data-target', '#email');
    if (item.hasAttribute('type')) {
        item.removeAttribute('data-target');
    }
    item.addEventListener('click', () => {
        let blockId = item.getAttribute('data-target');
        let focus = document.querySelector(blockId).focus();
        document.querySelector(blockId).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

    });
});

//popup

let loginBtn = document.querySelector('.login');
let popup = document.querySelector('.popup');
let popupClose = document.querySelector('.popup__close');


loginBtn.addEventListener('click', () => {

    popup.classList.add('active');
    if (popup.classList.contains('active')) {
        popupClose.classList.remove('active')
    }
});
popupClose.addEventListener('click', closed);
popup.addEventListener('click', function (e) {


    if (e.target == popup) {
        closed();
    }
})

function closed() {
    popup.classList.remove('active');
    popupClose.classList.add('active')
}
// discover-anchor

let discoverBtn = document.querySelector('.discover');

discoverBtn.addEventListener('click', function () {
    console.log('jijo');

    document.querySelector('.page-end').scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    })
})


