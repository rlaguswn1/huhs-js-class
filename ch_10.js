/* fetch
json
js에 가져오려면 문자형으로 가져와야함  보통 백틱으로 많이 쓰나봄
활용하려면 객체로 만들어줘야함
*/

const data = `
    {
        "name": "hyunju",
        "age" : 25
    }
`;

const result=JSON.parse(data); // json을 객체로 만들어줌
const result2=JSON.stringify(result); // 객체를 json으로 만들어줌
/* 객체로 만든걸 왜 또 json으로 만드냐?
json을 js에서 갖고 놀려면 객체로 만들어야 key, value를 뽑아올 수 있고 (parse)
그걸 업데이트하거나 해서 다른 데로 보내주려면 다시 json으로 만들어야함 (stringfy)
*/

console.log(result2);

/*fetch

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))

프로미스 형태임
fetch(url)에서 데이터를 잘 가져오면 resolve 함수를 실행시켜서 then 2개 넘어갈 수 있고, 아니면 뭘 못하는데, catch를 추가로 붙여서 오류를 잡을수도 있음

fetch는.. 잘 모르겠지만 확장 프로그램 느낌..? open with live server하면 잘 돌아가는데, nodejs에서 돌리면 오류남
웹은 기본적으로 import 되어있는 느낌, nodejs에서는 기본제공은 아닌 느낌
ㄴ 브라우저에서 제공하는 api라고 한다

npm: 자바스크립트 라이브러리. 다른 사람들이 만든걸 쉽게 설치할 수 있도록함

*/

//nodejs에 import하는 방법
const fetch = require('node-fetch');
//인증서 문제로, 아래 코드 추가하여 해결함
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

// new Promise ((resolve, reject) => {


// })

fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((e) => {console.error(e)});

/* 링크에서 데이터를 가져오고, 결과값이 response에 있음
그 response를 json형태로(우리가 읽을 수 있는 형태로) parsing (.json() 메소드 이용)

*/
