// 함수

function adder(a, b){
    return a+b;
}

console.log(adder(1, 2));

const res=adder(1,2)
res

a=undefined;

// undefined: 선언됐지만 값이 할당되지 않음. 근데 그러면 undefined랑 let a 일케 선언하는거랑 뭐가 다르지??
// null: 의도적으로 빈값을 넣음

// adder2라는 상수에 함수를 할당. 위랑 똑같은데 표현 방법만 다름. =>는 비교연산자가 아니라 화살표다
const adder2=(a,b) => {
    return a+b
}

const res2=adder2(2,3)
res2

//js는 웬만하면 변수보다 상수를 쓰는게 좋다. 타입 지정을 따로 안해서 웬만하면 바꾸지 말자라는 의미로