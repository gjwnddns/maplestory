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
