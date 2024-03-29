# Movie Finder
### [페이지로 이동하기](https://comfy-sprite-042a7c.netlify.app)
![스크린샷 2023-01-09 오후 3 54 51](https://user-images.githubusercontent.com/99096272/211254504-7144f2c2-ba50-4664-83bd-2f7d95bd0b9a.png)
![스크린샷 2023-01-09 오후 3 56 08](https://user-images.githubusercontent.com/99096272/211254657-9eee7a34-3271-4cf9-9ffc-ddd41ea9a2d6.png)


## 느낀 점 🤔
- 이번 과제에서 Webpack을 처음 사용해 보았는데 꾸준히 사용해보아야 익숙해지고 이해가 될것 같습니다.

- 처음 기능을 만들떄 하나의 함수에 많은것을 담다보니 다른 기능으로 발전시킬떄 어려움을 겪었습니다. 다시 차분히 기능별로 함수를 나누어두고 생각하니 기능 구현이 훨씬 쉬워진 것을 느꼈습니다.

- 개인적으로 JS 로직을 만들떄 퍼즐을 푸는 느낌이라 이전 과제인 HTML, CSS 클론코딩 보다 재미있고 해결했을 때 뿌듯함이 더욱 크게 느껴졌습니다.

</br>

## 공부할 점 🤓


> ### 클라이언트에서 API Key가 노출되지 않도록 만들어보세요.
API key 노출을 피하기 위해 서버리스 함수에 대해 찾아보았지만 영화 정보를 불러오는 함수를 다시 분리해 작업을 해야해 시간을 두고 연구해 볼 예정입니다.

</br>

> ### SCSS, Bootstrap 등을 구성해 프로젝트를 최대한 예쁘게(?) 만들어보세요.
웹팩에서 부트스트랩을 받아 적용해보려 했지만 수 많은 에러에 접었습니다.😢
과제를 우선 끝내는게 목표라 에러에 대해 깊히 찾아보지 못했지만 다음과제에서 적용할 수 있도록 찾아볼 예정입니다!

</br>

~~> ### 영화 포스터 주소에 포함된 `SX300`를 `SX700`과 같이 더 큰 숫자로 수정해 요청하세요.  ~~
~~> ### 실시간으로 이미지의 크기를 다르게 요청하는 것이 어떤 원리로 가능한지 조사해보세요.~~
~~이 부분에 대해서 검색을 하면 img태그에 직접 width, height 속성을 부여하는 방법만 나와 아직 찾는 중입니다.😭   ~~
~~혹시 검색 키워드 힌트 알려주실 수 있을까요?🥺~~
- 자료 찾았습니다!😊

</br>

~~### iOS 모바일 환경에서 모달창 X(close)버튼 작동 안됨~~
~~아이폰으로 확인했을때 모달창 닫기버튼이 실행되지 않는 에러가 있는데 어떻게 개선할 수 있을까요?ㅠㅠ~~
- 개선 전  
클릭된 모달 닫기 버튼 요소(e.target)의 속성으로 깊이 들어가 조상요소에 hidden class를 붙여 모달창이 닫히도록 함.  
e.target의 기준을 설정하지 않음  
- 개선 후  
e.target의 기준을 설정하며 구체적인 클릭된 요소를 입력하니 잘 작동함
- 알게된 점
모바일 웹에서도 잘 작동시키려면 선택 요소를 구체적으로 지정해야 함을 알게 되었다.


</br>

---
# 🎥 영화 검색 프로젝트

- 과제 기한:
  - 과제 수행 기간: 04월 28일(목) ~ 05월 19일(목)
  - 코드 리뷰 기간: 05월 19일(목) ~ 05월 27일(금)
- 내용:
  - 주어진 API를 활용해 영화 검색 프로젝트를 만들어보세요.

## 요구사항

### 필수 요구사항

- [X] 검색어를 입력해 영화를 검색할 수 있어야 합니다.
- [X] 검색된 결과(영화 목록)을 출력해야 합니다.
- [X] 프론트엔드 프레임워크 없이 바닐라 자바스크립트만으로 개발해야 합니다.
- [X] 실제 서비스로 배포하고 접근 가능한 링크를 추가해야 합니다.

### 선택 요구사항

- [X] Webpack 프로젝트로 구성해보세요.
- [ ] 클라이언트에서 API Key가 노출되지 않도록 만들어보세요.
- [X] 무한 스크롤을 위한 'Intersection Observer'를 활용해보세요.
- [X] 최초 API 요청(Request)에 대한 로딩 애니메이션을 추가해보세요.
- [X] SCSS, Bootstrap 등을 구성해 프로젝트를 최대한 예쁘게(?) 만들어보세요.
- [X] 영화 포스터 주소에 포함된 `SX300`를 `SX700`과 같이 더 큰 숫자로 수정해 요청하세요.
- [ ] 실시간으로 이미지의 크기를 다르게 요청하는 것이 어떤 원리로 가능한지 조사해보세요.
- [X] 요청 주소에 HTTP가 아닌 HTTPS 프로토콜을 사용해야 하는 이유를 조사해보세요.
