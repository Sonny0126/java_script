// ----------------------------------------------------------------------------------------------------------------------------
// arguments, length, reduce //
//////////////

// function multiply(x,y){
//     console.log(x,y);
//     return x * y;
// }

// console.log(multiply(2,5)); //객체를 순환해서 출력

// function sum(){
//     let res=0;

//     for(let i=0; i<arguments.length; i++){
//         res +=arguments[i];
//     }

//     return res;
// }

// console.log(sum());
// console.log(sum(1,2));
// console.log(sum(1,2,3));

// function sum2(...args){ // ...->Rest Rapameter -> args는 전달된 모든 인자를 배열로 수집함. 
//     return args.reduce((pre, cur) => pre+ cur, 0);//배열의 모든 요소를 하나의 값으로 줄이는 메서드
// }
// console.log(sum2(1,2));
// console.log(sum2(1,2,3,4,5));

// ----------------------------------------------------------------------------------------------------------------------------
// name ///
///////////

// var namedFunc = function foo(){};
// console.log(namedFunc.name); //다시 부르기

// //함수 선언문
// function bar() {}
// console.log(bar.name); 

// ----------------------------------------------------------------------------------------------------------------------------
//prototype 접근자 프로퍼티
// const obj={a: 1};
// console.log(obj.__proto__ === Object.prototype);

// console.log(obj.hasOwnProperty('a'));
// console.log(obj.hasOwnProperty('__proto__'));

// (function () {}).hasOwnProperty('prototype');
// ({}).hasOwnProperty('prototype');