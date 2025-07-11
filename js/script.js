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
