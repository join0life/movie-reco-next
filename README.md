# 오늘의 추천 영화

TMDb API를 활용해 하루에 하나씩 영화 추천하는 서비스입니다.

## ⚒️ 기술 스택

- Next.js
  - App Router
- Tailwind CSS

## 페이지 구조

```
/app
  layout.tsx
  page.tsx              // 오늘의 Pick
  /movies
    page.tsx            // 영화 목록
    [id]/page.tsx       // 영화 상세
  /(.)movies
    page.tsx
    [id]/page.tsx       // 영화 상세(모달)
  error.tsx
```
