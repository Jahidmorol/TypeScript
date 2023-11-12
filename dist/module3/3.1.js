"use strict";
{
    //
    // oop - class
    // class Animal {
    //     name: string;
    //     species: string;
    //     sounds: string;
    //     constructor( name: string, species: string, sounds: string){
    //         this.name = name;
    //         this.species = species;
    //         this.sounds = sounds;
    //     }
    //     makeSound() {
    //         console.log(`The ${this.name} says ${this.sounds}`);
    //       }
    // }
    class Animal {
        constructor(name, species, sounds) {
            this.name = name;
            this.species = species;
            this.sounds = sounds;
        }
        makeSound() {
            console.log(`The ${this.name} says ${this.sounds}`);
        }
    }
    const dog = new Animal("Porba", "Dog", "ghew ghew");
    console.log(dog);
    dog.makeSound();
    //
}
