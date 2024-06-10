# 🍎 MoonJi Portfolio !! *^-^*
# 퍼블리싱 가이드 #

## primary
 - pc 작업 기준 : 1920px
 - 폰트사이즈 px 기준
 - 이미지는 % 기준
 - 좌우여백 5vw (요소는 가운데 정렬이 기본)
 
 ***주석***
 - 큰 섹션: = x 5
 - 중간 섹션: = x 3
 - 구분선: - x 5
 - 기타: 기본

***이미지 네이밍 규칙***
- 콘텐츠이름-순번.확장자 (appleImg-1.png)
- 긴 이름은 케밥표기법으로 단어를 줄여서 사용 (apple-img-1.png x, appleImg-1.png o)

## HTML
***문서구성 순서***   
        
    `<!--===== og =====-->`
       
    `<!--===== favicon =====-->`   
       
    `<!--===== meta =====-->`   
       
    `<!--===== style =====-->`   
    `<!--=== reset ===-->`    
    `<!--=== plugIn ===-->`    
    `<!--=== font ===-->`    
    `<!--=== global ===-->`    
    `<!--=== indec.css ===-->`  
       
    `<!--===== js =====-->`    
    `<!--=== js.min ===-->`      
    `<!--=== js.ui.min ===-->`      
        
    `<body>`   
     `<!--===== js pluIgn =====-->`    
    `</body>`     


# 스타일 가이드 #
  
# 디렉토리 구성 #

## 240610_월 
 - 모바일 구현하기
 - 미디어쿼리 완벽하게 계속 수정 

## 240605_수
 - 가로스크롤 구현 완료 !! (오른쪽 여백은 해결해야함)
 - title 이벤트 수정
 - 오픈그라피 설정

#### 오늘안에 꼭 마무리하기 ! ####

## 240604_화 
전체적인 마무리 들어감 !!!!
     
 - 미디어쿼리 좀 더 세세하게 맞추기
 - 마우스 이미지 이벤트 구현 할 수 있다면 꼭 하기 ! (욕심1)
 - project 가로 스크롤 가능하다면 변경하기 !! (욕심 2)
    
## 240603_월
 - 메인 이벤트 구현하기
 - dropDown 이벤트 구현하기
 - svg 이벤트 구현   
      
전체적인 레이아웃 다시 수정
수정에 또 수정을 거치며 점점 나아지는 중이라 생각.. 
원래 구현하고자 했던 메인 이벤트 제외,
svg 이벤트로 변경 !

 - 전체적인 타이밍 맞추기
 - 미디어쿼리에 맞춰 반응형으로 제작
 - 자잘한 모션 추가
 - 프로젝트에 들어갈 이미지 제작

## 240602_일
 - title 이벤트 구현하기 
 - project 레이아웃 다시 고민해보기 (약긴 심심하고 눈에 잘 안 들어오는 거 같음)     
   -> 슬라이드 되는 레이아웃으로 변경. hover이벤트를 넣어 이미지가 보여지게 구성

## 240531_금     
    
문제가 발생했다. 사용하려던 GSAP가 유료라 사용할 수 없게 되었다.    
다른 방안을 찾아야한다.     
-> 간단하지 않은 text event를 주고싶어서 사용한 gsap의 SplitText플러그인이 아직 시범 적용이라 codePen에서만     
   사용할 수 있다는 것을 알게 되었다. 사용했던 플러그인을 삭제하고, css와 java를 결합하여 더 나은 event를 만들어냈다.     

  - 구현 계속하기
  - 파피콘 넣기 완료 !!

## 240530_목
 - html + scss 시작 !
 - header footer 작업 먼저
 - 변수 저장
 - 플러그인 찾기

 - gsap ScrollTrigger 사용하여 사과가 굴러가는 모션 구현
 - gsap SplitText 사용하여 메인에 글자 이벤트 구현
 - java 마우스 좌표를 활용하여 눈동자가 마우스를 따라가는 이벤트 구현

## 240529_수
  **디자인 수정**
  - 전체적인 레이아웃 (특히 Skill)
  - 사과 일러스트에 대한 고민
  - 여백이나 폰트 사이즈 등 통일
  - 스타일 가이드 재정리  
     
  -> 전체적으로 많이 수정이 필요하다 !  

  - index문서 기본틀 만들기
  - 코드 정리하기
  - 플러그인 찾기

## 240528_화
  - 디자인 다끝내기 !! - 아직 .. 허허
  - 디렉토리 구성 정리
  - 스타일가이드 정리
  - 사용할 플러그인 정리
  - 애벌레 코드로 구현 가능한지 확인 (구현 가능, 방향성은 여러가지)
  - skill과 project section 재구성

## 240527_월
  - 와이어프레임 완성시키기
  - 디자인도 끝낼 수 있는 만큼 끝내기 !

**일러스트작업 목록**
  - 로고, 파비콘 O (애벌레로)
  - 나무 O
  - 메인사과(5개 과정으로) O
  - 애벌레 O
  - 오픈그라피

## 240524_금
  - portfolio 작업 시작
  - 래퍼런스 서치

  **컨셉 정하기**    
  토마토 익는 모습 or 사과 먹는 모습 => 사과로 결정 !!
  전체적인 컬러는 베이지톤, 포인트 컬러로 레드와 그린     
  종이나 모레 질감을 넣어 부드럽게 표현
  전체적인 선을 굵게 할지 얇게 할지 고민
     
  **레이아웃 정하기**       
  메인 -> 자기소개 -> 스킬 -> 작업물 -> 컨택     
  순으로 진행       
