// JavaScript source code
const animals = [
    {
        name: "cat",
        sound: "meow",
        feedingRequirements: {
            food: 2,
            water: 3
        }
    },
    {
        name: "dog",
        sound: "woof"
    }
];

function useAnimals({ name, sound }) {
    return [
        name,
        function () {
            console.log(sound);
        }
    ];
}

export default animals;
export { useAnimals };
