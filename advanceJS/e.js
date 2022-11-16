//house
//this.table='window table'; //global scope
//console.log(window.table);
this.garage={
    table:'garage table',
    cleanTable(){

        console.log(`cleaning ${this.table}`);
    }
};
this.garage.table; //when you said 'this.' then you are creating a public property
//this inside an object 
// let johnRoom={
//     table:'johns table'
// };
// console.log(johnRoom.table);
// this inside a method
let johnRoom={
    table:'johns table',
    cleanTable(){

        console.log(`cleaning ${this.table}`);
    }
};
console.log(johnRoom.table);
johnRoom.cleanTable();//caling from method inside the private object
this.garage.cleanTable() //caling from method inside the public object
// this inside a function
// this.table='window table'; //global scope
// const clean=function(soap){
//     console.log(`cleaning ${this.table} using ${soap}`);
// };
// clean.call(this, 'surf-excel');
// clean.call(this.garage,'vimbar');
// clean.call(johnRoom,'harpic');

//this inside an inner function
this.table='window table'; //global scope
const clean=function(soap){
    const inner=(_soap) => {
        console.log(`cleaning ${this.table} using ${soap}`);

    }
    //inner.call(this)(soap); or
    inner(soap);

};
clean.call(this, 'surf-excel');

//this inside a constructor
let createRoom=function(name){
    this.table= `${name}'s room`

}
const jillsRoom=new createRoom('jill');
const shashiRoom=new createRoom("shashi");
clean.call(shashiRoom,'harpic');

//this inside class
class Room{
    constructor(name){
        this.table= `${name}'s table`


    }
    clea(soap){

        console.log(`cleaning ${this.table} using ${soap}`);
    }
}
const illsRoom=new Room('ill');
illsRoom.clea("lux");
