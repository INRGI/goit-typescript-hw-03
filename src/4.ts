class Key {
    private signature: number;

    constructor() {
        this.signature = Math.random();
    }

    getSignature(): number {
        return this.signature;
    }
};

class Person {
    private key: Key;
    
    constructor(key: Key) {
        this.key;
    }

    getKey(): Key{
        return this.key;
    }
};

abstract class House {
    protected door: boolean;
    protected key: Key;
    protected tenants: Person[] = [];

    constructor(key: Key) {
        this.door = false;
        this.key = key;
    }

    comeIn(person: Person) {
        if (this.door) {
            console.log('Door is open');
            this.tenants.push(person);
        } else {
            console.log('Door is closed');
        }
        
    }

    abstract openDoor(key: Key): void;
}

class MyHouse extends House{
    openDoor(key: Key): void {
        if (key.getSignature() === this.key.getSignature()) {
            this.door = true;
            console.log('Open door')
        } else {
            console.log('Wrong key')
        }
    }
};


const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};