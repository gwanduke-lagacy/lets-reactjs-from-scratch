# Let's ReactJS From Scratch

다음 스택을 사용하는 간단한 Todo App.

- [x] ReactJS
- redux
- redux-saga

- 스타일링
  - Material-UI
  - [x] Sass

- 개발환경
  - TypeScript
  - [x] prettier (포맷팅)
  - [x] webpack
  - [x] babel

- 테스트
  - Jest/Enzyme (unit/integration test)
  - Nightwatch (e2e)
  - CircleCI

- 서버사이드 렌더링
  - Express.js

- 배포
  - AWS EC2

## 구현 목표

- CRA를 사용하지 않는 ReactJS 세팅
- 서버사이드 렌더링
- REST API는 ~~만들기가 귀찮으므로~~ [MockAPI 서비스](https://www.mockapi.io)를 이용한다. 사용자 구분은 없다.

## API

HOST: `http://5cbe1ec6ecded20014c20e48.mockapi.io`

- `GET /todos` - 모든 투두를 가져온다
- `POST /todos/:id` - 투두를 생성한다.
- `PUT /todos/:id` - 투두를 업데이트한다.
- `DELETE /todos/:id` - 투두를 삭제한다.

todo 리소스 응답 예시

```js
{
  id: "3",
  createdAt: "2019-04-22T09:06:54.861Z",
  body: "...",
  completed: false
},
```

## 구현 기능

- [ ] 서버로부터 투두 리스팅
- [ ] 투두 입력
- [ ] 투두 완료
- [ ] 투두 삭제
