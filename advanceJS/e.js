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