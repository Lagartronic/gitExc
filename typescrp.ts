let id:number = 5
let company: string = "nada"
let isPub: boolean = true
let x:any = 3

let arreglo: number[] = [1,3]
let arr: number[] = []
arr.push(1)
let person:[number,string,boolean] = [1,"asdf",false] //tupla
let employee: [number,string][] //arreglo de tuplas

employee = [
    [1,"laja"]
]
//enum, cada uno está asociado a su posición dentro del objeto del 0 al N
enum PuntosCardinales {
    norte,
    sur,
    este,
    oeste
}
//object
type user ={
    id: number,
    name: string

}
const usuario:user = {
    id:2,
    name:"loscar"
}
//type assertion
let cid: any = 1
let customerId = <number>cid
//functions
function addNum(x:number,y:number):number{
    return x+y
}
//void se usa cuando la función no retorna valor alguno. Solo hace algo
function calculate(num:number):void{
    console.log("nada",num)
}
// interfaces
interface login  {
    userId:number,
    pwd:string,
    again?:boolean // este parámetro en la interface es opcional
}
// Classes
class Persona {
    private id: number // solo se podrá accesar desde adentro de la clase, si uso protected, los datos se podrán agregar desde objetos heredados
    name: string

    constructor(id: number, name:string){
        this.id = id
        this.name = name
    }
}

const brad = new Persona(3,"Jorge")


