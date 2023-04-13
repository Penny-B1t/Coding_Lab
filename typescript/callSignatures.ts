function add_v1(a: number , b: number) {
    return a + b
}
/**
 * 
 * * sdasdad
 * ! ASDASD
 * ? SDADAD
 * TODO:
 * 
 * 
 */

const add_v2 = (a: number, b: number) => a+b      // return number

const add_v3 = (a: number, b: number) => {a+b}    // return void
// 1, 2는 같은 실행문이지만 {}를 넣은 3은 return 없는 실행문만 존재하는 상황과 같다

//call signatures

type Add = (a: number, b: number) => number;

const add:Add = (a1, b1) => a1+b1
// Add를 정의하여 주었으므로 정의된 형식을 적용한다.
// 매개변수 이름은 사용자가 지정하여 사용하면 된다.

// 함수에서의 오버라이딩의 의미
// 여러 call sinatures를 가지고 있는 alice를 말한다.

type Config = {
    path: string,
    state: object
}

type Push = {
    (path: string): void,
    (config: Config): void
}

const push: Push = (config) => {
    if(typeof config === "string") { console.log(config) }
    else {
        console.log(config.path)
    }
}

type Add_1 = {
    (a: number, b: number): number
    (a: number, b: number, c: number): number
}

const add_1: Add_1 = (a,b,c?: number) =>{
    return a + b
}

// 다형성
// 다향한 형태를 지니는것을 말한다.

type SuperPrint = {
    <TypePlaceholder>(arr: TypePlaceholder[]): TypePlaceholder,
}

const superPrint: SuperPrint = (arr) => arr[0]