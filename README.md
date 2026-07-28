# HenDo Privacy

HenDo가 제공하는 앱의 개인정보처리방침을 공개하는 Next.js 사이트입니다.

- 공개 사이트: <https://privacy-two-flame.vercel.app>
- SIKKU 개인정보처리방침: <https://privacy-two-flame.vercel.app/sikku>

## 기술 구성

- Next.js App Router
- TypeScript
- Tailwind CSS
- Vercel

## 로컬 실행

```bash
npm install
npm run dev
```

`http://localhost:3000`에서 확인할 수 있습니다.

## 품질 검사

```bash
npm run typecheck
npm run lint
npm run build
npm audit --omit=dev
```

## 프로젝트 구조

```text
src/
├── app/
│   ├── [appSlug]/page.tsx    # 앱별 동적 정책 라우트
│   ├── layout.tsx            # 공통 레이아웃
│   └── page.tsx              # 기본 정책 페이지
├── components/
│   ├── layout/               # 헤더와 푸터
│   └── privacy/              # 정책 표시 컴포넌트
├── config/site.ts            # 사이트 제목과 내비게이션
├── data/privacy-policies.ts  # 앱별 개인정보처리방침 데이터
└── types/privacy-policy.ts   # 정책 데이터 타입
```

## 새 앱 정책 추가

1. `src/data/privacy-policies.ts`에 `PrivacyPolicy` 형식의 정책을 추가합니다.
2. 추가한 정책을 `privacyPolicies` 배열에 등록합니다.
3. 빌드하면 정책의 `slug`를 사용하는 경로와 헤더 메뉴가 자동으로 생성됩니다.

예를 들어 `slug`가 `sample`이면 `/sample`에서 정책을 확인할 수 있습니다.

## 배포

GitHub `main` 브랜치가 Vercel 프로젝트 `privacy`와 연결되어 있습니다. `main`에 푸시하면 프로덕션 배포가 자동으로 실행됩니다.
