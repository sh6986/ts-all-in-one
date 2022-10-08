// [변수 타입 정의 방법]
const a: string = "5";
const b: number = 5;
const c: boolean = true;
const d: undefined = undefined;
const e: null = null;

// 값을 고정할수도 있음
const f: true = true;
const g: 5 = 5;
// const h: boolean = true; // true 할당한 순간 h는 평생 true값이므로 타입이 boolean일 필요가 없다.

// const f: any = "123"; // 모든 타입을 넣을 수 있음. 타입스크립트를 쓰는 아무의마가 없다.

// const f: symbol = Symbol.for("abc");
// const g: bigInt = 1000000n;

// [함수 타입 정의 방법]
// 1.
// function add(x: number, y: number): number {
//   return x + y;
// }

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
// const obj: { lat: number; lon: number } = { lat: 37.5, lon: 127.5 };

// [배열 타입 정의 방법]
const arr: string[] = ["123", "456"];
// const arr2: Array<number> = [123, 456];
const arr3: [number, number, string] = [123, 456, "hello"]; // 튜플 : 길이가 고정된 배열
