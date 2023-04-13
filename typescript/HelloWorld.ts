let message: string = 'Hello World';
console.log(message);

const Test : {
    age: number
} = {
    age : 12
}

type Player = {
    age ?: number
    readonly name : string
}

const testName : readonly string[] = ['1']

const testage : [string,number,boolean] = ['dohun',25,true]

const li :Player = {
    age: 18,
    name : "dohun"
}

function platerMaker(name: string): Player{
    return {
        name
    }
}

const nico = platerMaker("nico")

console.log(nico.name)
nico.age = 12
console.log()

let un: unknown;
// any와 다르게 타입을 확인해준 후 사용하여야한다.
//  if(typeof un === 'number'){
//
//}
// 타입 확인을 강제한다.

// void 타입
// void는 아무것도 없다 return을 하지 않는다는 말과 같다.

// never 타입
// w절대 return 하지 않을때 발생하는 타입이다.

function ErrorTest(): never {
    throw new Error("Error")
}
