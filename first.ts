// [변수 타입 정의 방법]
// const a: string = "5";  // 타입스크립트가 5라는 정확한 추론을 해줬는데 string으로 더 넓은 부정확한 타입으로 정의하였기 때문에 좋지 않은 방식이다.
// 타입스크립트가 정확히 추론을 해줬다면, 건들지 말고 그대로 쓴다. 추론을 잘못 했거나 any 타입으로 추론했을 시에 타입을 정의해준다.
// const a = "5";
// const b = 5;
// const c = true;
// const d = undefined;
// const e: null = null;

// 값을 고정할수도 있음
// const f: true = true;
// const g: 5 = 5;
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

// ++ 심화 과정
function add(x: number, y: number): number; // 위에는 타이핑만 되어있고
function add(x, y) {
  // 아래는 선언만 되어있다.
  return x + y;
}

// [객체 타입 정의 방법]
const obj = { lat: 37.5, lon: 127.5 };

// [배열 타입 정의 방법]
// const arr = ["123", "456"];
// const arr2 = [123, 456];
// const arr3: [number, number, string] = [123, 456, "hello"]; // 튜플 : 길이가 고정된 배열
// const tuple: [string, number] = ["1", 1];
// tuple[2] = "hello";  // 얘는 에러나지만
// tuple.push("hello");  // 얘는 에러나지 않는다.
// 빈배열은 never 타입이기 때문에 선언시 반드시 타이핑을 해줘야 한다. 그래야 나중에 push 등 할 수 있다.
// try {
//   const array2: string[] = [];
//   array2.push("hello");
// } catch (err) {
//   err;
// }

// ** 자바스크립트로 변환할 때 사라지는 부분 **
// 이런것들 없이도 돌아갈 수 있게끔 만들어야 함
// 1. : (타이핑 시 콜론)
// const f: true = true; => const f = true;
// 2.
// type Add = () => number;
// 3.
// interface Minus {}
// 4.
// Array<string>;
// 5.
// function add(x: number, y: number): number;  // 요부분 사라짐
// function add(x, y) {
//     return x + y;
// }
// 6. as
// let aa = 123;
// aa = 'hello' as unknown as number ;  // 타입을 강제로 바꿔준다.

// [느낌표(!)]
// 타입이 Element | null 일때 해당 값이 null 이 아닐거라고 확신할 때 ! 를 사용해서 Element로 타이핑 할 수 있다.
// 따라서 무조건 존재하는, null이나 undefined가 아님을 보증하는 방식
// 권장하지는 않는다. if 문을 통해서 사용하는 방식 권장
// const head = document.querySelector("#head")!;
// console.log(head);

const head = document.querySelector("#head");
if (head) {
  console.log(head);
}

// string 과 String 구분 주의. 서로 다른 타입이다. String은 래퍼 개체 (new String 할때 사용함)
const a: string = "hello";
const b: String = "hell";

function c(a1: string, b1: string) {}
c(a, b);

// 템플릿 리터럴 타입이 존재 (유니언 등 사용 가능)
type World = "world" | "hell";
const d: World = "world";

type Greeting = `hello ${World}`;

//      hello world, hello hell 둘다 자동완성 된다.
const e: Greeting = "hello hell";

// rest
function rest(...args: string[]) {}

// enum
// 여러개의 변수들을 하나의 그룹으로 묶고 싶을 때 사용
const enum Editrection {
  Up,
  Down,
  Left,
  Right,
}
const f = Editrection.Up;
const g = Editrection.Left;
// 첫 값 지정 가능
const enum Editrection2 {
  Up = 3,
  Down,
  Left,
  Right,
}
// 각자 불규칙하게 지정 가능
const enum Editrection3 {
  Up = 3,
  Down = 5,
  Left = 4,
  Right = 6,
}
// 문자열도 지정 가능
const enum Editrection4 {
  Up = "123",
  Down = "hello",
  Left = "wow",
  Right = "enum",
}
// enum은 타입으로 사용할 수도 있음
function walk(dir: Editrection) {}
walk(Editrection.Down);

// enum 말고 객체를 사용할 수 도 있음
// enum 사용 -> 자바스크립트로 변환시 사라짐
// 객체 사용 -> 자바스크립트로 변환시 사라지지 않음
// const ODirection = {
//   Up: 0,
//   Down: 1,
//   Left: 2,
//   Right: 3,
// };
// 각 속성에 대한 추론을 이상하게 하므로 직접 타이핑을 해줘야 한다. as const를 붙여준다.
// const ODirection: { Up: 0; Down: 1; Left: 2; Right: 3 } = {
//   Up: 0,
//   Down: 1,
//   Left: 2,
//   Right: 3,
// };
// 이 방식보다 좀 더 간편한게 as const이다. (해당 값을 상수로 쓰겠다.)
// 수정못하도록 읽기전용으로 readonly도 정확하게 고정된다.
const ODirection = {
  Up: 0,
  Down: 1,
  Left: 2,
  Right: 3,
} as const;
// 객체방식을 타입으로 사용하려면 좀 복잡하다.
type Direction = typeof ODirection[keyof typeof ODirection];
function run(dir: Direction) {}
run(ODirection.Right);

const obj2 = { a: "123", b: "hello", c: "world" } as const;
type Key = keyof typeof obj2; // 키값들
type Key2 = typeof obj2[keyof typeof obj2]; // value들
