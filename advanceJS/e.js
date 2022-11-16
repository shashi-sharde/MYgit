//Using call function---------------------------

var obj={a:15};

var func=function(b){
    console.log(this.a +b);
}
func.call(obj,5);

// using apply function--------------------------


var obj={a:15};

var func=function(b,c){
    console.log(this.a +b-c);
}
var arr=[4,3]
func.apply(obj,arr);

//using bind function----------------------------
var obj={a:15};

var func=function(b,c){
    console.log(this.a +b-c);
}

var d=func.bind(obj);
d(5,3);

// student age Question--------------------------

var Student={age:20};
var Age_of_Student=function(){
    console.log("age of the student is " +this.age);
}
var res=Age_of_Student.bind(Student);
res();

// Currying
let multiply =function(x,y){
    console.log(x*y);
}
let multiplyByTwo=multiply.bind(this,2); //here 2  points to x
multiplyByTwo(5);//here 5 points to y
// this is called currying as we can create multiple metthod 
//out of one function and applly for our different purpose.
let multiplyByThree=multiply.bind(this,3); //here 3  points to x
multiplyByThree(5);

// say supppose we are passing x and y both at the timeof bind function
//it will take that as complete parameter and will ignore
//the parameter if we give while envoking the bind function 
let multiplyBysix=multiply.bind(this,6,4); //here 6  points to x and 4 points to y 
multiplyBysix(5);// after taking the input x , y above 
//it will ignore the argumen we have given while 
//invoking the fucntion 
//say suppose we are not passing anythin in the bind function
//argument and we are passing the values while invoking the function 
let multiplyByfour=multiply.bind(this); //here 3  points to x
multiplyByfour(5,4);
//but this form will not be valid for currying
//except for the last function we have curried our function in different manner



//IMPORTANT ##################################################
// WE CAN ACHIEVE THIS THING BY USING FUNCTION CLOUSURE AS WELL
 let mul=function(x){ //here we are presetting the x and returning the another function which takes the parameter as y 
    return function(y){
        console.log('multiple is '+x*y);
    }
 }
 let mul2=mul(2); //2 points to x
 mul2(92); //92 points to y 

 //this is also called currying in java script