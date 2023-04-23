/*
 * @PackageName: 
 * @Description: 
 * @Author: Man
 * @Date: 2022-06-20 15:23:48
 * @LastModifiedBy: git config user.name
 * @LastEditTime: 2023-04-09 23:02:18
 */
const reverse = (s: string): string => s.split('').reverse().join('');

reverse('elon musk'); // -> 'ksum nole'
console.log(reverse('elon musk'))
let str: string = "jimmy";
let num: number = 24;
let bool: boolean = false;
let u: undefined = undefined;
let n: null = null;
let obj: object = {x: 1};
let big: bigint = 100n;
let sym: symbol = Symbol("me"); 
console.log(obj)

interface Arrobj{
    name:string,
    age:number
}
let arr3:Arrobj[]=[{name:'jimmy',age:22}]

console.log(arr3);

// type Combinable = string | number
// function add(a: Combinable, b: Combinable) {
//     if (typeof a === 'string' || typeof b === 'string') {
//      return a.toString() + b.toString();
//     }
//     return a + b;
// }
// console.log(add(1, 2))
// console.log(add('1', '2'))


interface numberIndex {
    [x: number]: string
}
// 相当于声明了一个字符串类型的数组
let chars: numberIndex = ['A', 'B']
console.log(chars)
console.log(chars[1])

type Types = number | string
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(a:Types, b:Types) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}
const result = add('Semlinker', ' Kakuqo')
const result2 = add(1, 2)
console.log(result.split(' '))
// console.log(result2.split(' '))
// let lowerCaseObject: object;
// lowerCaseObject = 1; // ts(2322)
// lowerCaseObject = 'a'; // ts(2322)
// lowerCaseObject = true; // ts(2322)
// lowerCaseObject = null; // ts(2322)
// lowerCaseObject = undefined; // ts(2322)
// lowerCaseObject = {}; // ok

const arrayNumber: number[] = [1, 2, 3, 4];
const greaterThan2: number = arrayNumber.find(num => num > 2) as number
console.log(greaterThan2);

type NumGenerator = () => number;

function myFunc(numGenerator: NumGenerator) {
  // Object is possibly 'undefined'.(2532)
  // Cannot invoke an object which is possibly 'undefined'.(2722)
//   const num1 = numGenerator(); // Error
  const num2 = numGenerator!(); //OK
  console.log(num2);
  
}
myFunc(function (){return 1})

type Name = 'clz' | 123 | true | { name: 'clz' }

const myname1: Name = 'clz'
const myname2: Name = 123
const myname3: Name = true
const myname4: Name = {
    name: 'clz'
}

// const myname5: Name = 'ccc'
// const myname6: Name = 124
// const myname7: Name = false
// const myname8: Name = {
//     name: 'czh'
// }

// const str2 = 'this is string'; // str: 'this is string'
// const num2 = 1; // num: 1
// const bool2 = true; // bool: true
// for(let index = 1; index < 10; index++){
//     console.log(index);
// }
interface Vector3 {
    x: number;
    y: number;
    z: number;
}
function getComponent(vector: Vector3, axis: 'x' | 'y' | 'z'){
    return vector[axis]
}
const x = 'x'
let vec = {x: 10, y: 10, z: 10}
console.log(getComponent(vec, x))
let  strTest:string = 'sss'
strTest  = undefined

interface StringArray {
    // 字符串索引 -> keyof StringArray => string | number
    [index: string]: string; 
  }
  type Todo = {
    id: number;
    text: string;
    done: boolean;
  }
  
  const todo: Todo = {
    id: 1,
    text: "Learn TypeScript keyof",
    done: false
  }
  
  function prop<T extends object, K extends keyof T>(obj: T, key: K) {
    return obj[key];
  }
  
  const id = prop(todo, "id"); // const id: number
  const text = prop(todo, "text"); // const text: string
  const done = prop(todo, "done"); // const done: boolean
  console.log(id, text, done);

  type DeepPartial<T> = {
         // 如果是 object，则递归类型
        [U in keyof T]?: T[U] extends object
          ? DeepPartial<T[U]>
          : T[U]
    };
    
    
    // type PartialedWindow = DeepPartial<T>; 
    type DeepPartial2<T> = {
        [U in keyof T]? : T[U] extends object ? DeepPartial2<T[U]> : T[U] 
    }
    
    interface UserInfo {
        id: string;
        name: string;
        fruits: {
            appleNumber: number;
            orangeNumber: number;
        }
    }
    type UserInfoTest =  DeepPartial<UserInfo>
    const xiaoming: UserInfoTest = {
        name: 'xiaoming',
        fruits: {
            orangeNumber: 1,
        }
    }
    console.log(xiaoming);
    type UserInfoTest2 =  DeepPartial<UserInfo>
    const xiaoming2: UserInfoTest = {
        name: 'xiaoming',
        fruits: {
            orangeNumber: 2,
        }
    }
    console.log(xiaoming2);

    interface Todo2 {
        title: string;
        description: string;
        completed: boolean;
      }
      
      type TodoPreview = Pick<Todo2, "title" | "completed" | "completed">;
      
      const todo2: TodoPreview = {
        title: "Clean room",
        completed: false,
      };
    
      interface StringArray1 {
        // 数字索引 -> keyof StringArray1 => number
        [index: number]: string;
      }
      type P = keyof StringArray1
 
      