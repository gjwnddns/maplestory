// .nexon-hyundai-card,
// .search-pcbang,
// .join,
// .login hover 시,
// hidden-name 요소에 hidden-name--hovered 클래스 추가
// 각 Block에 --hovered Modifier 추가
const targetElements = document.querySelectorAll('.nexon-hyundai-card, .search-pcbang, .join, .login');

targetElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        const hiddenName = element.querySelector('.hidden-name');
        if (hiddenName) {
            hiddenName.classList.add('hidden-name--hovered');
        }

        // Block에 hovered 클래스 추가
        if (element.classList.contains('nexon-hyundai-card')) {
            element.classList.add('nexon-hyundai-card--hovered');
        }
        if (element.classList.contains('search-pcbang')) {
            element.classList.add('search-pcbang--hovered');
        }
        if (element.classList.contains('join')) {
            element.classList.add('join--hovered');
        }
        if (element.classList.contains('login')) {
            element.classList.add('login--hovered');
        }
    });

    element.addEventListener('mouseleave', () => {
        const hiddenName = element.querySelector('.hidden-name');
        if (hiddenName) {
            hiddenName.classList.remove('hidden-name--hovered');
        }

        // Block에서 hovered 클래스 제거
        if (element.classList.contains('nexon-hyundai-card')) {
            element.classList.remove('nexon-hyundai-card--hovered');
        }
        if (element.classList.contains('search-pcbang')) {
            element.classList.remove('search-pcbang--hovered');
        }
        if (element.classList.contains('join')) {
            element.classList.remove('join--hovered');
        }
        if (element.classList.contains('login')) {
            element.classList.remove('login--hovered');
        }
    s});
});

// menu-toggle hover 시,
// menu-toggle__btn--hovered 클래스 추가
// menu-icon에도 hovered 클래스 추가
const menuToggleBtn = document.querySelector('.menu-toggle__btn');

if (menuToggleBtn) {
    menuToggleBtn.addEventListener('mouseenter', () => {
        menuToggleBtn.classList.add('menu-toggle__btn--hovered');

        // 메뉴 아이콘 hovered 클래스 추가
        const menuIcon = menuToggleBtn.querySelector('.menu-icon');
        if (menuIcon) {
            menuIcon.classList.add('menu-icon--hovered');
        }
    });

    menuToggleBtn.addEventListener('mouseleave', () => {
        menuToggleBtn.classList.remove('menu-toggle__btn--hovered');

        // 메뉴 아이콘 hovered 클래스 제거
        const menuIcon = menuToggleBtn.querySelector('.menu-icon');
        if (menuIcon) {
            menuIcon.classList.remove('menu-icon--hovered');
        }
    });
}

// 페이지 스크롤시 main-nav가 sticky 시,
// main-nav--sticky 클래스 추가
const mainNav = document.querySelector('.main-nav');
const navHeight = mainNav.offsetHeight;

if (mainNav) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > navHeight) {
            mainNav.classList.add('main-nav--sticky');
        } else {
            mainNav.classList.remove('main-nav--sticky');
        }
    });
}

// main-nav hover 시,
// main-nav--hovered 클래스 추가
if (mainNav) {
    mainNav.addEventListener('mouseenter', () => {
        mainNav.classList.add('main-nav--hovered');
    });

    mainNav.addEventListener('mouseleave', () => {
        mainNav.classList.remove('main-nav--hovered');
    });
}

// categories__menu hover 시,
// 해당 메뉴의 밑줄 애니메이션 활성화
const categoryMenus = document.querySelectorAll('.categories__menu');

categoryMenus.forEach(menu => {
    menu.addEventListener('mouseenter', () => {
        menu.classList.add('categories__menu--hovered');
    });

    menu.addEventListener('mouseleave', () => {
        menu.classList.remove('categories__menu--hovered');
    });
});

//categories__submenu hover 시,
//categories__submenu--hovered 클래스 추가
const categorySubmenus = document.querySelectorAll('.categories__submenu');

categorySubmenus.forEach(submenu => {
    submenu.addEventListener('mouseenter', () => {
        submenu.classList.add('categories__submenu--hovered');
    });

    submenu.addEventListener('mouseleave', () => {
        submenu.classList.remove('categories__submenu--hovered');
    });
});

// 다크모드 버튼 hover 시,
// 다크모드 버튼--hovered 클래스 추가
const darkMode = document.querySelector('.dark-mode');

darkMode.addEventListener('mouseenter', () => {
    darkMode.classList.add('dark-mode--hovered');
});

darkMode.addEventListener('mouseleave', () => {
    darkMode.classList.remove('dark-mode--hovered');
});

// 다크모드 버튼 클릭 시,
// 다크모드 or 라이트 모드 활성화화
const darkModeOn = document.getElementById('darkMode');
const darkModeOff = document.getElementById('lightMode');
const htmlElement = document.documentElement;

// 로컬스토리지 여부 체크
const savedDarkMode = localStorage.getItem('darkMode');
if (savedDarkMode === 'true') {
    htmlElement.classList.add('dark');
    darkModeOn.classList.add('dark-mode__on--active');
    darkModeOff.classList.remove('dark-mode__off--active');
} else {
    htmlElement.classList.remove('dark');
    darkModeOn.classList.remove('dark-mode__on--active');
    darkModeOff.classList.add('dark-mode__off--active');
}

// 다크모드 기능 구현
if (darkModeOn) {
    darkModeOn.addEventListener('click', () => {
        htmlElement.classList.add('dark');
        darkModeOn.classList.add('dark-mode__on--active');
        darkModeOff.classList.remove('dark-mode__off--active');
        localStorage.setItem('darkMode', 'true');
    });
}
if (darkModeOff) {
    darkModeOff.addEventListener('click', () => {
        htmlElement.classList.remove('dark');
        darkModeOn.classList.remove('dark-mode__on--active');
        darkModeOff.classList.add('dark-mode__off--active');
        localStorage.setItem('darkMode', 'false');
    });
}

// 로그인 버튼 hover 시,
// 로그인 버튼--hovered 클래스 추가
const loginBtn = document.querySelector('.btn-login-nav-sticky__game-start');

loginBtn.addEventListener('mouseenter', () => {
    loginBtn.classList.add('btn-login-nav-sticky__game-start--hovered');
});

loginBtn.addEventListener('mouseleave', () => {
    loginBtn.classList.remove('btn-login-nav-sticky__game-start--hovered');
});

//banner__navigation__event-more 클릭시,
//event-modal--active 클래스 제거, 추가가
const eventMore = document.querySelector('.banner__navigation__event-more');
const eventModal = document.querySelector('.event-modal');
const eventModalClose = document.querySelector('.event-modal__close');

eventMore.addEventListener('click', () => {
    eventModal.classList.add('event-modal--active');
});

eventModalClose.addEventListener('click', () => {
    eventModal.classList.remove('event-modal--active');
});

//event-modal__close hover 시,
//event-modal__close--hovered 클래스 추가
eventModalClose.addEventListener('mouseenter', () => {
    eventModalClose.classList.add('event-modal__close--hovered');
});

eventModalClose.addEventListener('mouseleave', () => {
    eventModalClose.classList.remove('event-modal__close--hovered');
});

//.event-item hover 시,
//.event-item--hovered 클래스 추가
const eventItems = document.querySelectorAll('.event-item');

eventItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.classList.add('event-item--hovered');
    });

    item.addEventListener('mouseleave', () => {
        item.classList.remove('event-item--hovered');
    });
});

//notice-info hover 시,
//notice-info--hovered 클래스 추가
const noticeInfos = document.querySelectorAll('.notice-info');

noticeInfos.forEach(info => {
    info.addEventListener('mouseenter', () => {
        info.classList.add('notice-info--hovered');
    });

    info.addEventListener('mouseleave', () => {
        info.classList.remove('notice-info--hovered');
    });
});

//personal-default__login hover 시,
//personal-default__login--hovered 클래스 추가
const personalDefaultLogin = document.querySelector('.personal-default__login');

personalDefaultLogin.addEventListener('mouseenter', () => {
    personalDefaultLogin.classList.add('personal-default__login--hovered');
});

personalDefaultLogin.addEventListener('mouseleave', () => {
    personalDefaultLogin.classList.remove('personal-default__login--hovered');
});

//personal-default__list__item-link hover 시,
//personal-default__list__item-link--hovered 클래스 추가
const personalDefaultListItems = document.querySelectorAll('.personal-default__list__item');

personalDefaultListItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.classList.add('personal-default__list__item-link--hovered');
    });
    item.addEventListener('mouseleave', () => {
        item.classList.remove('personal-default__list__item-link--hovered');
    });
});

//youtube-link hover 시,
//youtube-link--hovered 클래스 추가
const youtubeLinks = document.querySelectorAll('.youtube-link');

youtubeLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.classList.add('youtube-link--hovered');
    });
    link.addEventListener('mouseleave', () => {
        link.classList.remove('youtube-link--hovered');
    });
});

//slide-item__img--store hover 시,
//slide-item__img--store--hovered 클래스 추가
const slideItemImgs = document.querySelectorAll('.slide-item__img--store');

slideItemImgs.forEach(img => {
    img.addEventListener('mouseenter', () => {
        img.classList.add('slide-item__img--store--hovered');
    });
    img.addEventListener('mouseleave', () => {
        img.classList.remove('slide-item__img--store--hovered');
    });
});

//patch-item hover 시,
//patch-item--hovered 클래스 추가
const patchItems = document.querySelectorAll('.patch-item');

patchItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.classList.add('patch-item--hovered');
    });
    item.addEventListener('mouseleave', () => {
        item.classList.remove('patch-item--hovered');
    });
});

//job-thumbnails__btn hover 시,
//job-thumbnails__btn--hovered 클래스 추가
const jobThumbnailsBtns = document.querySelectorAll('.job-thumbnails__btn');

jobThumbnailsBtns.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        btn.classList.add('job-thumbnails__btn--hovered');
    });
    btn.addEventListener('mouseleave', () => {
        btn.classList.remove('job-thumbnails__btn--hovered');
    });
});

//swiper-slide--job-thumbnail hover 시,
//swiper-slide--job-hovered 클래스 추가
const jobThumbnailsSwiperSlides = document.querySelectorAll('.swiper-slide--job-thumbnail');

jobThumbnailsSwiperSlides.forEach(slide => {
    slide.addEventListener('mouseenter', () => {
        slide.classList.add('swiper-slide--job-hovered');
    });
    slide.addEventListener('mouseleave', () => {
        slide.classList.remove('swiper-slide--job-hovered');
    });
});

//select-site hover 시,
//select-site--hovered 클래스 추가
const selectSite = document.querySelector('.select-site');

selectSite.addEventListener('mouseenter', () => {
    selectSite.classList.add('select-site--hovered');
});
selectSite.addEventListener('mouseleave', () => {
    selectSite.classList.remove('select-site--hovered');
});

//sns-list__item hover 시,
//sns-list__item--hovered 클래스 추가
const snsListItems = document.querySelectorAll('.sns-list__item');

snsListItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.classList.add('sns-list__item--hovered');
    });
    item.addEventListener('mouseleave', () => {
        item.classList.remove('sns-list__item--hovered');
    });
});

