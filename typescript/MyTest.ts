let mul: (a: number, b: number) => number;

mul = function(a,b) {
    return a * b
}

type add = (a: number, arg2: number) => number;

type add_v1 = {
    (a: number, b: number): number;
    (a: number, b: number, c: number): number
}

// 오버라이딩
const add_fun: add_v1 = (a, b, c?: number) => {
    return a + b + (c ?? 0)
}

function add_fun_2(a: number, b: number): number {
    return a + b
}

const add_fun_3 = (a: number, b: number) => {
    return a + b
}

type mul = {
    <T>(a:T[]): T
}

type player<E> = {
    name: String,
    ex: E
}

type ex = {
    card: String,
    book?: String
}

let dohun: player<ex> ={
    name: "dohun",
    ex: {
        card: "kb"
    }
}

let lee: player<{
    card: String,
    book: String
}> = {
    name: "lee",
    ex: {
        card: "we",
        book: "hanbit"
    }
}

function PlayerName(a: number, b: ex): ex{
    return { card: b.card }
}

const Card = PlayerName(1,{card: "we", book: "hanbit"})
type Blends = {
    [key: string]: string
}
// 딕셔너리 생성

class Car{
    private blendGroup: Blends
    constructor(){
        this.blendGroup = {}
    }

    add(blendName: blend){
        if (this.blendGroup[blendName.name]=== undefined)
            this.blendGroup[blendName.name] = blendName.region
    }

    region(carName: string){
        console.log(this.blendGroup[carName])
    }
}

type blend = {
    name: string,
    region: string
}

const KIA: blend = {
    name: "KIA",
    region: "어디일까요?"
}

const Korea = new Car();

Korea.add(KIA)

Korea.region("KIA")

// 추상화 연습

abstract class Zoo {
    constructor(
        protected Name: string,
        protected age: string,
        protected Zone: string
    ){}

    getInfo(){
        console.log(`${this.Name} is age : ${this.age} and ${this.Zone}`)
    }

    abstract say(): void
}

class Tiger extends Zoo {
    say(): void {
        console.log("i am Tiger")
    }
}

class bird extends Zoo {
    say(): void {
        console.log("fly")
    }
}

class book extends Zoo {
    say(): void{
        console.log("i am not animal")
    }
}

