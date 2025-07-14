//swiper-navigation__prev, next hover 시,
//swiper-navigation__prev--hovered, swiper-navigation__next--hovered 클래스 추가
const swiperNavigationPrev = document.querySelectorAll('.swiper-navigation__prev');
const swiperNavigationNext = document.querySelectorAll('.swiper-navigation__next');

swiperNavigationPrev.forEach(prev => {
    prev.addEventListener('mouseenter', () => {
        prev.classList.add('swiper-navigation__prev--hovered');
    });
    prev.addEventListener('mouseleave', () => {
        prev.classList.remove('swiper-navigation__prev--hovered');
    });
});

swiperNavigationNext.forEach(next => {
    next.addEventListener('mouseenter', () => {
        next.classList.add('swiper-navigation__next--hovered');
    });
    next.addEventListener('mouseleave', () => {
        next.classList.remove('swiper-navigation__next--hovered');
    });
});

//common-title__icon hover 시,
//common-title__icon--hovered 클래스 추가
const commonTitleIcons = document.querySelectorAll('.common-title__icon');

commonTitleIcons.forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        icon.classList.add('common-title__icon--hovered');
    });
    icon.addEventListener('mouseleave', () => {
        icon.classList.remove('common-title__icon--hovered');
    });
});

//common-detail-button hover 시,
//common-detail-button--hovered 클래스 추가
const commonDetailButtons = document.querySelectorAll('.common-detail-button');

commonDetailButtons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.classList.add('common-detail-button--hovered');
    });
    button.addEventListener('mouseleave', () => {
        button.classList.remove('common-detail-button--hovered');
    });
});


