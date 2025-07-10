// 메인 JavaScript 파일
document.addEventListener('DOMContentLoaded', function() {
    console.log('페이지 로드 완료');

    // 공통 초기화 함수
    init();
});

function init() {
    // 초기화 로직
    console.log('애플리케이션 초기화');

    // 다크모드 초기화
    initDarkMode();

    // 슬라이드 초기화
    initSlider();
    
    // 네비게이션 sticky 감지 초기화
    initStickyNav();
}

// 다크모드 토글 기능
function initDarkMode() {
    const darkModeOn = utils.select('.darkmode-group__on');
    const darkModeOff = utils.select('.darkmode-group__off');

    // 다크모드 활성화
    utils.on(darkModeOn, 'click', function() {
        document.documentElement.classList.add('dark');
        darkModeOn.classList.add('darkmode-group__on--active');
        darkModeOff.classList.remove('darkmode-group__off--active');
    });

    // 다크모드 비활성화
    utils.on(darkModeOff, 'click', function() {
        document.documentElement.classList.remove('dark');
        darkModeOff.classList.add('darkmode-group__off--active');
        darkModeOn.classList.remove('darkmode-group__on--active');
    });
}

// 슬라이드 자동 재생 기능
function initSlider() {
    const slideTrack = utils.select('.banner .slide__track');
    const slideItems = utils.selectAll('.banner .slide-item');
    const slideContainer = utils.select('.banner .slide');

    if (!slideTrack || slideItems.length === 0) {
        console.log('슬라이드 요소를 찾을 수 없습니다.');
        return;
    }

    let currentIndex = 0;
    let slideWidth = 0;
    const totalSlides = slideItems.length;

    // 슬라이드 크기 계산 및 설정
    function calculateSlideSize() {
        // 디버깅을 위한 로그
        console.log('=== 슬라이드 크기 계산 디버깅 ===');
        console.log('slideContainer:', slideContainer);
        console.log('slideContainer.offsetWidth:', slideContainer.offsetWidth);
        console.log('slideContainer.clientWidth:', slideContainer.clientWidth);
        console.log('slideTrack:', slideTrack);
        console.log('slideTrack.offsetWidth:', slideTrack.offsetWidth);

        // 부모 요소들 확인
        const bannerInner = utils.select('.banner__inner');
        const bannerOuter = utils.select('.banner__outer');
        console.log('banner__inner width:', bannerInner ? bannerInner.offsetWidth : 'not found');
        console.log('banner__outer width:', bannerOuter ? bannerOuter.offsetWidth : 'not found');

        // 컨테이너 너비 계산 (여러 방법 시도)
        let containerWidth = slideContainer.offsetWidth;

        // offsetWidth가 0이면 부모 요소에서 가져오기
        if (containerWidth === 0) {
            containerWidth = bannerInner ? bannerInner.offsetWidth : 0;
        }

        // 여전히 0이면 더 상위 요소에서 가져오기
        if (containerWidth === 0) {
            containerWidth = bannerOuter ? bannerOuter.offsetWidth : 0;
        }

        // 마지막 수단으로 viewport width 사용
        if (containerWidth === 0) {
            containerWidth = window.innerWidth;
            console.log('viewport width 사용:', containerWidth);
        }

        slideWidth = containerWidth;

        console.log(`최종 계산된 slideWidth: ${slideWidth}px`);

        // 각 슬라이드 아이템에 동적 width 설정
        slideItems.forEach(item => {
            item.style.width = `${slideWidth}px`;
        });

        // 트랙 전체 너비 설정
        slideTrack.style.width = `${slideWidth * totalSlides}px`;

        console.log(`트랙 너비 설정: ${slideWidth * totalSlides}px`);
        console.log('=== 디버깅 끝 ===');
    }

    // 슬라이드 이동 함수
    function moveSlide(index) {
        const translateX = -index * slideWidth;
        slideTrack.style.transform = `translate3d(${translateX}px, 0px, 0px)`;
        slideTrack.style.transitionDuration = '500ms';
    }

    // 다음 슬라이드로 이동
    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        moveSlide(currentIndex);
    }

    // 윈도우 리사이즈 시 슬라이드 크기 재계산
    function handleResize() {
        calculateSlideSize();
        // 현재 슬라이드 위치 재조정
        moveSlide(currentIndex);
    }

    // 페이지네이션 업데이트 함수
    function updatePagination() {
        const currentSpan = utils.select('.banner .pagination__count--current');
        const totalSpan = utils.select('.banner .pagination__count--total');
        
        if (currentSpan && totalSpan) {
            currentSpan.textContent = currentIndex + 1;
            totalSpan.textContent = totalSlides;
        }
    }

    // 이전 슬라이드로 이동
    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        moveSlide(currentIndex);
        updatePagination();
    }

    // 다음 슬라이드로 이동 (페이지네이션 업데이트 추가)
    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        moveSlide(currentIndex);
        updatePagination();
    }

    // 페이지네이션 이벤트 리스너
    function initPagination() {
        const prevBtn = utils.select('.banner .pagination__btn-prev');
        const nextBtn = utils.select('.banner .pagination__btn-next');
        
        if (prevBtn) {
            utils.on(prevBtn, 'click', prevSlide);
        }
        
        if (nextBtn) {
            utils.on(nextBtn, 'click', nextSlide);
        }
        
        console.log('페이지네이션 버튼 이벤트 추가');
    }

    // 초기 설정
    calculateSlideSize();
    updatePagination(); // 초기 페이지네이션 설정
    initPagination(); // 페이지네이션 이벤트 설정

    // 리사이즈 이벤트 리스너 추가
    utils.on(window, 'resize', handleResize);

    // 자동 재생
    setInterval(nextSlide, 5000);

    console.log(`슬라이드 자동 재생 시작 (${totalSlides}개 슬라이드)`);
    console.log('선택된 슬라이드 아이템들:', slideItems);
}

// 네비게이션 sticky 감지 기능
function initStickyNav() {
    const gnbNav = utils.select('.main__gnb');
    const header = utils.select('header');
    
    if (!gnbNav || !header) {
        console.log('네비게이션 요소를 찾을 수 없습니다.');
        return;
    }
    
    // header 높이 계산 (sticky 기준점)
    const headerHeight = header.offsetHeight;
    
    // Intersection Observer를 사용한 sticky 감지
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // header가 보이면 sticky 해제
                    gnbNav.classList.remove('fx');
                } else {
                    // header가 안보이면 sticky 활성화
                    gnbNav.classList.add('fx');
                }
            });
        },
        {
            // header가 화면 상단에서 사라질 때 감지
            threshold: 0,
            rootMargin: '0px'
        }
    );
    
    // header 관찰 시작
    observer.observe(header);
    
    console.log('네비게이션 sticky 감지 초기화 완료');
}

// 유틸리티 함수들
const utils = {
    // DOM 요소 선택
    select: (selector) => document.querySelector(selector),
    selectAll: (selector) => document.querySelectorAll(selector),

    // 이벤트 리스너 추가
    on: (element, event, handler) => {
        element.addEventListener(event, handler);
    }
};
