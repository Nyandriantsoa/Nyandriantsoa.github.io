/* Exercise 1 */
String.prototype.filter = function(text) {

    return this.split(' ').filter(word => word != text).join(" ");

}

console.log("\"This house is not nice!\".filter('not')");
console.log("Output: \"", "This house is not nice!".filter('not') , "\"" );



/* Exercise 2 */
Array.prototype.bubbleSort = function(){

    var arr = this

    for(let i = 0 ; i < arr.length - 1; i++){
        for(let j = 0 ; j < arr.length - i - 1 ; j++){
            if(arr[j] > arr[j+1]){
                var t = this[j];
                this[j] = this[j+1];
                this[j+1] = t;
            }
        }
    }

    return this;

}

console.log("\n[6,4,0, 3,-2,1].bubbleSort();");
console.log("Output :" , [6,4,0, 3,-2,1].bubbleSort());


/** Exrcise 3 */
function Person(name){
    this.name = name;
}

function Teacher(name, subject){
    Person.call(this, name);

    this.subject = subject;

    this.teach = () => console.log("\n" + name, "is now teaching", subject);
}

var teacher = new Teacher("Mike" , "WAP");
teacher.teach();


Teacher.prototype = Object.create(Person.prototype);
console.log(Teacher.prototype.constructor)
Object.defineProperty(Teacher.prototype, 'constructor', {
    value: Teacher
})
console.log(Teacher.prototype.constructor)

var teacher1 = new Teacher("Toad" , "SWE");
teacher1.teach();


/** Exrcise 4 */
function Person1(name, age){
    this.name = name;
    this.age = age;
}

Person1.prototype.greeting = function() {
    console.log("Greetings, my name is", this.name, "and I am", this.age, "years old.");
}

Person1.prototype.salute = function() { 
    console.log("Good morning!, and in case I dont see you, good afternoon, good evening and good night!");
}

function Student(name, age, major){
    Person1.call(this, name, age);
    this.major = major
}

Student.prototype = Object.create(Person1.prototype);
Object.defineProperty(Student.prototype, 'constructor', {
    value: Student
})

Student.prototype.greeting = function() { 
    console.log("Hey, my name is", this.name, "and I am studying", this.major)
};


function Professor(name, age, department){
    Person1.call(this, name, age);
    this.department = department;
}

Professor.prototype = Object.create(Person1.prototype);
Object.defineProperty(Professor.prototype, 'constructor', {
    value : Professor
})

Professor.prototype.greeting = function(){
    console.log("Good day, my name is", this.name, "and I am in the", this.department, "department")
}


const mike = new Student("Mike", 19, "CS");
mike.greeting();
mike.salute();

const prof = new Professor("Dr. G", 42, "CS");
prof.greeting();
prof.salute();