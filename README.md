# 메이플스토리 홈페이지 클론

넥슨 메이플스토리 공식 홈페이지 헤더 영역을 클론하여 만든 프로젝트입니다.

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
│   └── script.js       # 인터랙션 스크립트
├── .prettierrc         # 코드 포맷팅 설정
└── README.md          # 프로젝트 문서
```

## 🎨 스타일 가이드

### BEM 방법론 적용

-   **Block**: 독립적인 컴포넌트 (`.menu-toggle`, `.nexon-hyundai-card`, `.search-pcbang`)
-   **Element**: Block의 구성 요소 (`.menu-toggle__btn`, `.user-menu__item`)
-   **Modifier**: 상태나 변형 (`.menu-toggle__btn--hovered`, `.nexon-hyundai-card--hovered`)

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
    --titleColor: #454757;
    --textColor: #3D3F4C;
}
```

### BEM + JavaScript 패턴
```javascript
// Block 단위 hover 상태 관리
element.classList.add('nexon-hyundai-card--hovered');
```

### 반응형 레이아웃
- **Flexbox**: 헤더 요소 배치 (`justify-content: space-between`)
- **Absolute 위치**: 로고 중앙 정렬
- **공통 아이콘 스타일**: 일관된 크기 (22px × 22px)

## 🎯 학습 성과

1. **BEM 방법론** 실무 적용 및 혼합 전략
2. **CSS Variables** 활용한 테마 관리
3. **JavaScript DOM 조작** 및 이벤트 핸들링
4. **코드 품질 관리** (Prettier 적용)
5. **컴포넌트 기반 설계** 사고
