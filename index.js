class Traveler {
    constructor(name, food, isHealthy) {
        this.name = name;
        this.food = food;
        this.isHealthy = isHealthy;
    }
    hunt() {
        this.food += 1;
    }
    eat() {
        if (this.food > 0) {
            this.food -= 1;
        } else {
            this.isHealthy = false;
        }
    }
}
class Wagon {
    constructor(capacity, passageiros) {
        this.capacity = capacity;
        this.passageiros = passageiros;
    }
    getAvailableSeatCount() {
        return this.capacity;
    }
    join(traver) {
        this.passageiros = []
        this.passageiros.push(traver)
        this.capacity -= 1;
        if (this.capacity < 1) {
            this.capacity = 0;
        }
    }
    shouldQuarantine() {
        if (Traveler.food === 0) {
            return true
        } else {
            return false
        }
    }
    totalFood() {
        let totalFood = 0
        for (let i = 0; i < this.capacity; i++) {
            totalFood += this.passageiros.food
        }
        return totalFood;
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