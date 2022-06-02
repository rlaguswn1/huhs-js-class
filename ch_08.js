// 객체

let name;
let age;

class Person {
    name;
    age;

    // 아래 사용예제를 보니 constructor라는 함수를 따로 호출하지는 않았다 >> 생성자인가보다
    constructor(a,b) {
        //this를 안쓰면 클래스 밖에서 해당 변수를 찾음 >> 매개변수 받아온걸 못씀
        // 클래스 같은걸 만들면 웬만하면 this를 써주자. 정확히 찍어줘야 잘 찾음
        this.name =a;
        this.age=b;
    }
}

const hyunju = new Person ("hyunju", 25)
hyunju
console.log(hyunju.age)
console.log(hyunju.name)

//객체와 인스턴스의 차이
/*
인스턴스는 실제로 메모리안에 존재하는 것을 보통 가리킴
객체는 좀 더 넓은 의미로 쓰임. 메모리 안에 존재할 수는 있지만 어떤 틀을 가리키거나 할수도 있음
*/

/*
보통 클래스보단 아래처럼 쓴다 (객체를 바로 만듦)
클래스가 타입에 강하게 의존하는 문법이기 때문에.. 타입스크립트에서 씀
*/
const hyunju2 = {
    name: 'hyunju',
    age: 25
}

console.log(hyunju2)
console.log(typeof hyunju2)

hyunju2.major="산융"
hyunju2
hyunju2.major="정융"
hyunju2

// 객체 순회 >> 키/밸류 뽑는법..인가보다. 파이썬 딕셔너리랑 비슷하네
const a = Object.keys(hyunju2);
a
const b= Object.values(hyunju2);
b


// 보통 이렇게 쓴다

// 키만 뽑는구나'-'
for (const i in hyunju2){
    console.log(i)
}

delete hyunju2.major
hyunju2