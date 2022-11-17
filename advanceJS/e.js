//nor mal function 
class Student{
    constructor(name,age,marks){
        this.name=name;
        this.age=age;
        this.marks=marks;
    }
    setPlacementAge(minAgeForPlacement){
        return function eligibleforcomp(minMarks) {
            if (this.marks>minMarks && this.age >minAgeForPlacement){
                console.log(this.name +" is ready for placement")
            }else{
                console.log(this.name +" is not ready for placement")
            }
        }
    }
}

const shashi=new Student("Shashi",20,85);
const Shubham=new Student("Shubham",28,62);
shashi.setPlacementAge(25)(40);

/// above code will not work as this will not be recognised by inner function which is  eligibleforcomp this will be onl recognised by lexical parent 
//hence fat arow function comes in to picture as it does not have its own this keyword hence it will not be undefind
class Student{
    constructor(name,age,marks){
        this.name=name;
        this.age=age;
        this.marks=marks;
    }
    setPlacementAge(minAgeForPlacement){
        return (minMarks) => {
            if (this.marks>minMarks && this.age >minAgeForPlacement){
                console.log(this.name +" is ready for placement")
            }else{
                console.log(this.name +" is not ready for placement")
            }
        }
    }
}

const shashi=new Student("Shashi",20,85);
const Shubham=new Student("Shubham",28,62);
shashi.setPlacementAge(25)(40);