# 오늘의 추천 영화

TMDb API를 활용해 오늘의 트렌딩 영화를 추천하는 Next.js 앱입니다.
<br/>
<br/>
**[제작 기간]** 25. 01. 13 ~ 25. 01. 15
<img width="3360" height="1798" alt="Image" src="https://github.com/user-attachments/assets/a09be14e-0add-48bf-ac2f-ccea8cf94b63" />
<img width="3360" height="3060" alt="Image" src="https://github.com/user-attachments/assets/419a123f-438c-40dc-aabd-c5f0daa2e028" />
<img width="871" height="462" alt="Image" src="https://github.com/user-attachments/assets/7cd9ad2c-5717-40fc-b024-b9d3365b5217" />

## ⚒️ 기술 스택

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- TMDb API
- Next Image(이미지 최적화)

## 프로젝트 구조

```
/app
  layout.tsx
  page.tsx                    // 오늘의 Pick
  /movies
    page.tsx                  // 영화 목록
    [id]/page.tsx             // 영화 상세
  /@modal                     // 모달 슬롯
    /(.)movies                // 가로채기 라우트 폴더
      page.tsx
      [id]/page.tsx           // 영화 상세(모달)
  /api
    /movies
      route.ts                // 페이지 번호로 영화 리스트 가져오는 API 함수   
  /components
    load-more-page-button.tsx // 더보기 버튼
    modal.tsx                 // 모달 컴포넌트(클라이언트 컴포넌트)
    movie-detail.tsx          // 재사용 컴포넌트
    movie-item.skeleton.tsx   // 스켈레톤
    movie-list-skeleton.tsx
    movie-list.tsx            // 영화 목록(클라이언트 컴포넌트)   
  error.tsx
  not_found.tsx
```

## 주요 기능

- 오늘의 트렌딩 영화 1편 추천
- TMDb API 기반 영화 목록 및 상세 정보 제공
- Next Image를 활용한 이미지 최적화
- 로딩 상태를 고려한 Skeleton UI 구현
- 가로채기 라우트를 활용한 모달 UI
  - /movies에서 클릭 시 → 모달
  - URL 직접 접근 시 → 전체 페이지
- 초기 데이터 로딩은 서버 컴포넌트
- 추가 페이지 로딩은 클라이언트 컴포넌트로 분리 처리

## 실행 방법

```bash
npm install
npm run dev
```
