// 비동기, 콜백 함수, 프로미스

// 동기 vs 비동기

// 동기: 그동안 했던거랑 비슷하다. 그 코드를 평가?해서 바로 실행 >> 순서대로
console.log(1);
console.log(2);
console.log(3);

//비동기: 

function func() {
    console.log("빵!")
}

// 함수를 넘겨주고 기다렸다가 실행 >> 넘겨줬다 >> 콜백함수
setTimeout(func, 1000) //숫자는 시간의 '초'고, ms 단위

/* set timeout을 1000ms로 주면 1, 3 출력 > 1초후 2 출력 이렇게 되는데 0ms로 주면 어케될까? 쭉 이어서? >> 1, 3, 2로 나옴
왜냐? > 비동기 코드고, 비동기 방식으로 출력돼서

힙: 콜스택에서 사용될때 변수/객채를 가져올때 잠시 저장해두는 메모리 공간
콜 스택: 1 > 2 > 3
1 > 실행
2 > settimeout이므로 webapi, nodejs로 일단 이동 > 거기서 타임아웃을 하고, 콜백함수가 태스크큐로 갔다가 콜스택으로 감
3 > 실행
태스크 큐: 
web api, nodejs:

비동기: 타이머 함수, 이벤트, fetch함수 - 콜스택이 비어있을때만 일을 줌
*/
console.log(1); // 1번
setTimeout(() => { // 2번
    console.log("2");
}, 0);
console.log(3); // 3번

/* 콜백 헬

(a, callback) => {
    (b,callback2) => {
        (c, callback3) => {

        }
    }
}

어디서 뭐 하고 넘겨주고, 그 결과값으로 넘겨서 또다른 콜백을 하고.... 엄청 중첩돼서 복잡해짐
이게 콜백헬인듯
이거 해결해야돼 >> 프로미스 등장
*/

/* 프로미스: 객체
js에서 제공하는 타입


function func1(resolve, reject) {
    let a = 1;
    if (a===1) {
        resolve("good");
    } else {
        reject("bad");
    }
}

const result = new Promise(func1);
console.log(result);

 저거 출력하면 good이 출력이 된다 프로미스는 객체다~ 근데 보통 저렇게 안씀
*/

/*
보통은 아래처럼 쓴다

resolve: 성공시
reject: 실패시

저 값을 받아서 then에 넘겨줌
아마.. if 돌려보고 then을 해라
if 결과값을 res로 넘겨주겠다

저 then 다음에 또 then 이어서 붙일 수 있음
>> a한 다음에 a_return 갖고 b하고, b한 다음에 b_return 갖고 c 하고....
>> callback을 간단하게 쓸 수 있겠군

catch: 에러 잡는것. 파라미터는 보통 e로 쓴다
웹프 시간에 배웠던 try-catch랑 같은거 같음

throw new Error: res가 good이면 에러를 띄워라
에러가 잡히면 맨 아래 catch로 넘어가서 콘솔에 에러를 띄움
*/

new Promise((resolve, reject) => {
    let a = 1;
    if (a===1){
        resolve("good");
    } else {
        reject("bad");
    }
})
.then((res) => {
    console.log(res);
    if (res==="good"){
        throw new Error("에러!");
    }
    return "hello"
})
.then((res) => {
    console.log(res);
})
.catch((e) => {
    console.error(e);
});

/* 통신 - HTTP
ajax: 웹 동작중 비동기적으로 통신 > 사용자가 웹 동작중 다른 작업을 수행해도 비동기적으로 동작하기 때문에 알아서 필요한 작업을 수행, 웹 ui를 업데이트함
(ex. 구글어스 - 지도를 클릭하면 프리징현상(멈춤) 없이 각 부분마다 api를 통해 통신하여 화면이 업데이트)

api: 내가 지금 갖고있는 자원을 다른 사람들/장치에게 활용하도록 주는것
*/