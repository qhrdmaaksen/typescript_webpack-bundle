import Dog from "./Dog";
import ShelterDog from "./ShelterDog";
import { add, multiply, divide } from "./utils";

console.log("index.js file loaded");
const elton = new Dog("Woomi", "maltese", 15);
elton.bark();

const Buffy = new ShelterDog("Buffy","Pitbull", 5,"Desert Springs Shelter")


console.log(add(4, 5));
console.log(multiply(4, 5));
console.log(divide(4, 5));
