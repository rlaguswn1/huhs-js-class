// 제어문
// 조건문, 반복문

let a=1;
let b=2;

if (a===b) {
    console.log("같다");
}
else if (a>b){
    console.log("다르다")
}
else{console.log("랄라")}




for (let i=0; i<10; i++){
    console.log(i);
}


//break
for (let i=0; i<10; i++){
    if(i === 5){
        break;
    }
    console.log(i);
}

//continue
for (let i=1; i<=10; i++){
    if(i%2===1){
        continue;
    }
    console.log(i);
}