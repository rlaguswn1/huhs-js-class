// 비동기, 콜백 함수, 프로미스

// 동기 vs 비동기

//동기: 그동안 했던거랑 비슷하다. 그 코드를 평가?해서 바로 실행 >> 순서대로
console.log(1);
console.log(2);
console.log(3);

//비동기: 

function func() {
    console.log("빵!")
}

// 함수를 넘겨주고 기다렸다가 실행 >> 넘겨줬다 >> 콜백함수
setTimeout(func, 1000) //숫자는 시간의 '초'고, ms 단위

// 보통 setTimeout은..

setTimeout(() => {
    console.log("2");
}, 1000);