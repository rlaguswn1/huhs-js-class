// 변수
// 세미콜론 있어도 없어도 노상관

let a;

a = 1;
a = false;
a = undefined;
console.log(typeof a);
a = null;
console.log(typeof a);
a="hello";

let b = true;
console.log(b)
console.log(typeof b)

const c=1; //상수
c=4 //새로 할당할 수 없다는 에러남 >> 처음 할당한 값을 유지하기 위해 이용하는 const
