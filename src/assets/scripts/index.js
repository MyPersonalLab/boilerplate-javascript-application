import style from "../styles/main.scss";

const [first, ...rest] = [1, 2, 3];


class People{
    constructor(name, age, gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    describe(){
        console.log(`${this.name} ${this.age} ${this.gender}`);
    }
}

let simao = new People('Daniel', 28, 'male');

function fn2({ name, age, gender}) {
    console.log(name, age, gender)
}

fn2(simao);

// console.log(simao.describe());
// console.log(first, rest);
document.write('<h1>Hello World</h1>');