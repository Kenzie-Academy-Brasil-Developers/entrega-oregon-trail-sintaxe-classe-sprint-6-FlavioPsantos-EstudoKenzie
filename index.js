class Traveler {
    food = 1;
    isHealthy = true;
    constructor(name) {
        this.name = name;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name
    }
    hunt() {
        return this.food += 2;
    }
    eat() {
        if (this.food <= 0) {
            this.isHealthy = false;
        } else {
            this.food -= 1;
        }

    }
}
class Wagon {
    passageiros = [];
    empetyPlace = 0;
    constructor(capacity) {
        this.capacity = capacity;
    }
    get capacity() {
        return this._name;
    }
    set capacity(capacity) {
        this._capacity = capacity
    }

    getAvailableSeatCount() {
        this.empetyPlace = this.capacity - this.passageiros.length;
        if (this.empetyPlace < 0) {
            this.empetyPlace = 0;
        }
        return this.empetyPlace;



    }
    join(traver) {
        if (this.empetyPlace > 0) {
            this.passageiros.push(traver)
        }

    }

    shouldQuarantine() {
        for (let i = 0; i < this.passageiros.length; i++) {
            if (this.passageiros[i].isHealthy === false) {
                return true
            }
        }
        return false;
    }
    totalFood() {
        let foodAcuracy = 0;
        for (let i = 0; i < this.passageiros.length; i++) {
            foodAcuracy += this.passageiros[i].food
        }
        return foodAcuracy;

    }

}


// Criar uma carroça que comporta 2 pessoas
let wagon = new Wagon(2);
// Criar três viajantes
let henrietta = new Traveler('Henrietta');
let juan = new Traveler('Juan');
let maude = new Traveler('Maude');

console.log(`${wagon.getAvailableSeatCount()} should be 2`);

wagon.join(henrietta);
console.log(`${wagon.getAvailableSeatCount()} should be 1`);

wagon.join(juan);
wagon.join(maude); // Não tem espaço para ela!
console.log(`${wagon.getAvailableSeatCount()} should be 0`);

henrietta.hunt(); // pega mais comida
juan.eat();
juan.eat(); // juan agora está com fome (doente)

console.log(`${wagon.shouldQuarantine()} should be true since juan is sick`);
console.log(`${wagon.totalFood()} should be 3`);