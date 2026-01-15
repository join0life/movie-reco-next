# 오늘의 추천 영화

TMDb API를 활용해 오늘의 트렌딩 영화를 추천하는 Next.js 앱입니다.

## ⚒️ 기술 스택

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- TMDb API

## 페이지 구조

```
/app
  layout.tsx
  page.tsx              // 오늘의 Pick
  /movies
    page.tsx            // 영화 목록
    [id]/page.tsx       // 영화 상세
  /@modal               // 모달 슬롯
    /(.)movies          // 가로채기 라우트 폴더
      page.tsx
      [id]/page.tsx     // 영화 상세(모달)
  /components             
  error.tsx
  not_found.tsx
```

## 주요 기능

- 오늘의 트렌딩 영화 1편 추천
- Next Image 최적화 적용
- 로딩시 스켈레톤 UI
- '/movies'에서 영화 아이템 클릭했을 때 모달창으로 보여줌 (<-> Url 파라미터로 전달시 전체 페이지로 보여줌)
- 초기 페이지는 서버 컴포넌트, 추가 페이지 로딩은 클라이언트 컴포넌트로 처리

## 실행 방법

```bash
npm install
npm run dev
```
