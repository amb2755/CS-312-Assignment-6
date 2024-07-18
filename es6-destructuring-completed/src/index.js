import React from "react";
import ReactDOM from "react-dom";
import animals, { useAnimals } from "./data";
import cars from "./practice";

// Destructuring Arrays
const [cat, dog] = animals;

const [animal, makeSound] = useAnimals(cat);
console.log(animal); // Output: "cat"
makeSound(); // Output: "meow"

// Destructuring Objects for car stats
const [honda, tesla] = cars;

const {
    speedStats: { topSpeed: hondaTopSpeed }
} = honda;
const {
    speedStats: { topSpeed: teslaTopSpeed }
} = tesla;

const {
    coloursByPopularity: [hondaTopColour]
} = honda;
const {
    coloursByPopularity: [teslaTopColour]
} = tesla;

ReactDOM.render(
    <table>
        <thead>
            <tr>
                <th>Brand</th>
                <th>Top Speed</th>
                <th>Top Colour</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{tesla.model}</td>
                <td>{teslaTopSpeed}</td>
                <td>{teslaTopColour}</td>
            </tr>
            <tr>
                <td>{honda.model}</td>
                <td>{hondaTopSpeed}</td>
                <td>{hondaTopColour}</td>
            </tr>
        </tbody>
    </table>,
    document.getElementById("root")
);

