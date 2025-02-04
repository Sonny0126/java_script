// function Circle(radius){
//     this.radius = radius;
//     this.getArea = function(){
//         return Math.PI * this.radius **2;
//     };
// }

// const circle1 = new Circle(1);
// const circle2 = new Circle(2);

// console.log(circle1.getArea === circle2.getArea);
// console.log(circle1.getArea());
// console.log(circle2.getArea());

//모든 객체는 __proto__ 접근자 프로퍼티를 이용해 자시닁 프로토 타입
// 내부 슬롯에 간접적으로 접근할 수 있다.

// const obj ={};
// const parent = {x: 1};

// console.log(parent.x);
// obj.__proto__;
// // parent -> __proto__
// obj.__proto__=parent;

// /*
// 여기서 핵심 질문은 "왜 기존의 parent.x를 출력해도 값이 변하지 않는가?"
// ✔️ obj.__proto__ = parent;는 obj의 프로토타입 체인을 변경하는 것이지, parent 자체를 변경하는 것은 아닙니다.
// ✔️ parent.x는 여전히 parent 객체에 존재하는 프로퍼티이므로 1을 반환
// */
// console.log(parent.x);
// console.log(obj.x);


//그러면 왜 __proto__ 접근자 프로퍼티를 이용하여 접근하는가?
// const parent = {};
// const chile ={};

// child.__Proto__=parent;
// parent.__Proto__=child;
//-> 에러 발생 서로 가리킴
// 프로토타입 체인은 단방향 링크드 리스트 구조로 이루어져야 한다.
// 코드내에서 __proto__ 접근자를 사용하는것은 권해지지 않는다.
// __proto__ 대신 Object.getPrototypeOf 메서드를 이용하자

const obj ={};
const parent = {x:1};
Object.getPrototypeOf(obj);
Object.setPrototypeOf(obj, parent);

console.log(obj.x);
// 1 출력

//함수 각체는 prototype 프로퍼티 소유 O
//일반 객체는 prototype 프로퍼티 소유 X
//화살표 함수는 prototype 프로퍼티 소유 X
//즉, prototype 프로퍼티는 생성자 함수에 사용

//책 271쪽 그림 참조
// function Person(name){
//     this.name = name;
// }

// const me = new Person('Lee');

// console.log(Person.prototype === me.__proto__);

//리터럴 표기법
//책 276 그림 참조
// //객체 리터럴
// const obj ={};
// //함수 리터럴
// const add = function(a,b) { return a + b};
// //배열 리터럴
// const arr = [1,2,3];
// // 정규 표현식 리터럴
// const regexp = /is/ig;

//프로토 타입은 생성자 함수가 생성되는 시점에 더불어 생성된다.

//프로토타입 체인
function Person(name){
    this.name = name;
}

Person.prototype.sayHello =function(){
    console.log(`Hi! my name is ${this.name}`);
};

const me = new Person('Lee');

console.log(me.hasOwnProperty('name'));
