//배열

const arr=[];
const arr2=[1,2,3];

arr.push(1)
arr

arr.push(2)
arr.push(3)
arr[1]=''
arr


// arr.pop()
// arr.pop()
// arr

//slice: 지정된 범위를 잘라옴. 범위 지정하는건 파이썬 생각하면 됨 
const arr3 = arr.slice(0,1);
arr3
const arr4 = arr.slice(2)
arr4

const arr6=[4,5,6];

// 더하면? >> 1+3=13 일케됨
arr5=arr3+arr4+arr6
arr5

//... >> 대괄호 안의 원소만 꺼내서 배열 생성. 스프레드 문법이라고 한다~
arr5=[...arr3,...arr4,...arr6]
arr5

// slice 숫자 하나만 쓰면 거기부터 다 갖고온다~
console.log(arr5.slice(3))

// 다른건 걍 쳐도 옆에 초록색으로 띄워주는데 인덱스 지정해서 볼땐 안그러네ㅠ
console.log(arr5[0])

// 다 출력할때
for (let i=0; i<arr.length; i++){
    console.log(i)
}

// 다 출력할때 이렇게도 가능. 파이썬 for랑 비슷
for (const i of arr5){
    console.log(i);
}

// 인덱스만 뽑고 싶을때. 근데 이게 파이썬 for라서 넘 헷갈리네
for (const i in arr5){
    console.log(i);
}

// (+) map, forEach, filter...