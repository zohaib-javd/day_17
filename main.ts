// Question 49: Function with Rest Parameters: Write a function that takes a rest parameter representing multiple hobbies. It should log each hobby with a statement saying you enjoy that hobby.

function logHobbies(...hobbies: string[]) {
    hobbies.forEach(hobby => {
        console.log(`I enjoy ${hobby}.`);
    });
}

logHobbies("traveling", "coding", "gyming");

// Question 50: Multiline Template Literals: Use template literals to create a multiline string that describes your ideal day. Include at least three different activities.

let myIdealDay = `My ideal day would involve:
1. Waking up early and have a cup of coffee.
2. Spending a few hours coding on a personal project.
3. Ending the day by having a good session at the gym.`;

console.log(myIdealDay)

// Question 51: Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor it into an arrow function.

function calculateArea(width: number, height: number): number {
    return width * height;
}

let calculateAreaArrow = (width: number, height: number): number => width * height;

console.log(calculateAreaArrow(10, 10)); //Square
