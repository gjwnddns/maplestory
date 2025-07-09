// 메인 JavaScript 파일
document.addEventListener('DOMContentLoaded', function() {
    console.log('페이지 로드 완료');
    
    // 공통 초기화 함수
    init();
});

function init() {
    // 초기화 로직
    console.log('애플리케이션 초기화');
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