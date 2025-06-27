# Frontend Project Starter

> 프론트엔드 개발 환경

---

## 🛠️ 주요 스택 및 도구

- **React 19 + React DOM**
- **TypeScript 5**
- **Vite**
- **Tailwind CSS 3**
- **shadcn/ui**
- **Zustand**
- **TanStack Query**
- **React Router DOM v7**
- **Prettier, ESLint**

---

## 📂 폴더 구조 (중요 파일 기준)

```
├── public/ # 정적 파일(이미지, favicon 등)
│
├── src/ # 소스 코드 루트
│ ├── assets/ # 프로젝트 리소스(이미지, 폰트 등)
│ │
│ ├── components/ # 재사용 가능한 컴포넌트
│ │ └── ui/ # shadcn 기반 UI 컴포넌트
│ │
│ ├── hooks/ # 커스텀 리액트 훅
│ │ └── useQuery.ts # React Query 기반 데이터 페칭 훅 모음
│ │ └── useToast.ts # shadcn 토스트용 커스텀 훅
│ │
│ ├── lib/ # 유틸 함수, 공통 로직
│ ├── stores/ # zustand 스토어
│ ├── pages/ # 라우팅 페이지 컴포넌트
│ ├── styles/ # Tailwind, 전역 CSS 등 스타일 파일
│ ├── App.tsx # 루트 앱 컴포넌트
│ ├── main.tsx # 엔트리포인트
│ └── main.css # 전역 스타일(Tailwind base 포함)
```

---

## 🚀 사용 방법

### 1. 의존성 설치

```
yarn install
```

### 2. 개발 서버 실행

```
yarn dev
```

---

## ✨ **shadcn 컴포넌트 추가 명령어**

```bash
npx shadcn@latest add <component>


npx shadcn@latest add button
npx shadcn@latest add input
npx shadcn@latest add dialog
컴포넌트명 참고주소: https://ui.shadcn.com/docs/components
```
