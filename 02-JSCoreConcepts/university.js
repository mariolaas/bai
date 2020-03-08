names = ['Piotr', 'Anna', 'Michał', 'Paulina', 'Mateusz', 'Magda'];

class Students {
    constructor(names) {
        this.names = names
    }

    // names (array) which starts with the letter
    startWith(letter){ 
        let arr = new Array();
        for(let i=0; i<this.names.length(); i++){
            if(this.names[i].startWith(letter)){
                arr.push(this.names[i]);
            }
        }
        return arr;
    }

    // names (array) in alphabetical order 
    sort() { 
        let arr = this.names.sort();
        return arr;
    }

    // names (array) in natural order
    get() {
        return this.names;
    }

    // get first 'n' names (array) 
    getFirst(n) {
        return this.names.slice(0, n-1); 
    }
}

students = new Students(names);
console.log(students.get());
console.log(students.sort());
console.log(students.startWith('P'));
console.log(students.startWith('M').sort());
console.log(students.sort().getFirst(4));
console.log(students.startWith('M').sort().getFirst(2));
console.log(students.get());



