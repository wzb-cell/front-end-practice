let accountCode = '123';
let test = 2;
// let castedAccountCode = accountCode as number;
let temp = accountCode.length


type User = {
    name: string,
    age: number
  }
  
  const u1 = {} as User
  
  console.log(u1.name) // 这里就会有提示
  