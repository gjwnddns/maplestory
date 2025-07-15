# 메이플스토리 홈페이지 클론

넥슨 메이플스토리 공식 홈페이지를 클론하여 만든 프로젝트입니다.

## 🛠️ 기술 스택

-   **HTML5**: 시맨틱 마크업
-   **CSS3**: BEM 방법론 적용, CSS Variables 활용
-   **JavaScript**: 바닐라 JS로 인터랙션 구현
-   **Prettier**: 코드 포맷팅

## 📁 프로젝트 구조

```
├── index.html          # 메인 페이지
├── css/
│   ├── common.css      # 공통 스타일 (변수, 폰트, 리셋, 다크모드)
│   └── style.css       # 컴포넌트별 스타일
├── js/
│   ├── commonScript.js # 공통 인터랙션 스크립트
│   └── script.js       # 메인 페이지 스크립트
├── img/                # 이미지 리소스
├── .gitignore         # Git 제외 파일 설정
├── .prettierrc         # 코드 포맷팅 설정
└── README.md          # 프로젝트 문서
```

## 🎨 스타일 가이드

### CSS 속성 선언 순서
1. **Positioning**: position, top, right, bottom, left, z-index
2. **Box-model**: display, float, flex, width, height, margin, padding
3. **Typography**: font, line-height, color, text-align
4. **Background**: background-color, background-image
5. **Border**: border, border-radius
6. **기타**: opacity, transition, transform

### CSS 코드 스타일
- 속성이 1개일 경우: 한 줄로 작성
- 속성이 여러 개일 경우: 여러 줄로 작성
- 같은 블록 내의 선택자들은 띄어쓰기 없이 연속 배치
- 소수점 표시: 1보다 작은 경우 정수 제거 (예: 0.28 → .28)

### BEM 방법론 적용

-   **Block**: 독립적인 컴포넌트 (`.menu-toggle`, `.personal-box`, `.notice`)
-   **Element**: Block의 구성 요소 (`.menu-toggle__btn`, `.personal-box__inner`)
-   **Modifier**: 상태나 변형 (`.menu-toggle__btn--hovered`, `.notice-info--hovered`)

### 네이밍 컨벤션

#### Block 네이밍
-   **컴포넌트 역할**: `.menu-toggle`, `.nexon-hyundai-card`, `.search-pcbang`
-   **의미적 그룹**: `.user-menu` (유저 관련 메뉴)

#### Element 네이밍
-   **기능별 구분**: `.menu-toggle__btn`, `.user-menu__item`
-   **역할별 아이콘**: `.menu-icon`, `.user-menu-icon`

#### Modifier 네이밍
-   **상태 표현**: `--hovered` (hover 상태)
-   **가시성 제어**: `--visible` (표시 상태)

#### 공통 클래스 네이밍
-   **UI 요소**: `.hidden-name` (툴팁), `.name` (텍스트 라벨)
-   **장식 요소**: `.badge` (알림 배지), `.text` (일반 텍스트)

#### Hover 시스템 네이밍 규칙
```css
/* Block 단위 hover 상태 */
.nexon-hyundai-card--hovered .user-menu-icon { }
.search-pcbang--hovered .user-menu-icon { }

/* 공통 Element hover 상태 */
.hidden-name--hovered { }
.menu-icon--hovered { }
```

## 💡 기술적 특징

### CSS Variables 활용
```css
:root {
    --header-height: 62px;
    --main-max-width: 1696px;
    --titleColor: #454757;
    --textColor: #3D3F4C;
    --transition-speed: .4s;
}
```

### 다크모드 지원
- CSS Variables를 활용한 테마 전환
- 다크모드 토글 버튼 구현
- 색상 변수 자동 변경

### BEM + JavaScript 패턴
```javascript
// Block 단위 hover 상태 관리
element.classList.add('personal-box--hovered');
```

### 반응형 레이아웃
- **Flexbox**: 대시보드 및 컨텐츠 영역 배치
- **Sticky Navigation**: 스크롤 시 고정 네비게이션
- **Swiper 슬라이드**: 배너, 뉴스, 직업 소개 등에 활용

## 🎯 학습 성과

1. **BEM 방법론** 실무 적용 및 혼합 전략
2. **CSS Variables** 활용한 테마 관리 및 다크모드 구현
3. **JavaScript DOM 조작** 및 이벤트 핸들링
4. **코드 품질 관리** (Prettier 적용, CSS 코드 스타일 가이드)
5. **컴포넌트 기반 설계** 사고
6. **Swiper.js** 활용한 인터랙티브 UI 구현

## 📌 주요 기능

- 헤더 네비게이션 (sticky 동작)
- 다크모드 토글
- 배너 슬라이드
- 공지사항 리스트
- 로그인/게임시작 영역
- 뉴스 슬라이드
- 직업 소개 탭 및 슬라이드
- 유튜브 썸네일 갤러리
- 메이플 스토어 상품 슬라이드
