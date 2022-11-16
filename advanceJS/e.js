class Student{
   static No_of_student=0;
    constructor(Name,age,ph_no,marks){
        this.Name=Name;
        this.age=age;
        this.ph_no=ph_no;
        this.marks=marks;
        Student.studentsNumber();
    }
    static studentsNumber(){
        return (Student.No_of_student++);
    }
    

    }Student.prototype.findeligibllity=function findeligibllity(){
        if(this,this.marks >40){
            console.log(this.Name + " is eligible")
        } else{
            console.log(this.Name + " is not eligible")
        }
    }

const s1=new Student("Shashi",20,1234,89);
const s2=new Student("Shash",21,12345,39);
const s3=new Student("Raju",22,123,49);
const s4=new Student("Raj",26,1236,19);
const s5=new Student("Rajan",29,1253,69);
console.log(s1);
console.log(s2);
console.log(s3);
console.log(s4);
console.log(s5);
console.log(Student.studentsNumber());
s1.findeligibllity()
s2.findeligibllity()
s3.findeligibllity()
s4.findeligibllity()
s5.findeligibllity()
