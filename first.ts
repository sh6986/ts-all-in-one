// [변수 타입 정의 방법]
// const a: string = "5";  // 타입스크립트가 5라는 정확한 추론을 해줬는데 string으로 더 넓은 부정확한 타입으로 정의하였기 때문에 좋지 않은 방식이다.
// 타입스크립트가 정확히 추론을 해줬다면, 건들지 말고 그대로 쓴다. 추론을 잘못 했거나 any 타입으로 추론했을 시에 타입을 정의해준다.
const a = "5";
const b = 5;
const c = true;
const d = undefined;
const e: null = null;

// 값을 고정할수도 있음
const f: true = true;
const g: 5 = 5;
// const h: boolean = true; // true 할당한 순간 h는 평생 true값이므로 타입이 boolean일 필요가 없다. 타입은 정확하게 하는것이 좋다

// const f: any = "123"; // 모든 타입을 넣을 수 있음. 타입스크립트를 쓰는 아무의마가 없다.

// const f: symbol = Symbol.for("abc");
// const g: bigInt = 1000000n;

// [함수 타입 정의 방법]
// 1.
// function add(x: number, y: number) {
//   return x + y;
// }

// const result = add(1, 2); // add 함수 리턴타입으로 타이핑을 해주지 않았는데도 타입스크립트가 알아서 추론해준다.

// 2.
// const add: (x: number, y: number) => number = (x, y) => x + y;

// type Add = (x: number, y: number) => number;
// const add: Add = (x, y) => x + y;

// 3.
// 인터페이스 통해 함수 타입 정의
// interface Add {
//     (x: number, y: number): number;
// }

// const add: Add = (x, y) => x + y;

// [객체 타입 정의 방법]
const obj = { lat: 37.5, lon: 127.5 };

// [배열 타입 정의 방법]
const arr = ["123", "456"];
// const arr2 = [123, 456];
const arr3: [number, number, string] = [123, 456, "hello"]; // 튜플 : 길이가 고정된 배열
