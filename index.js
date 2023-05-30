let value = "I am a string"; // Try changing this value to different types


if (value === "I am a string") { // This is a string
    console.log(true); // This will print true
}  else if (value === false) { // This is a boolean
    console.log("The boolean value is falsy"); // This will print false
    } else if (value === null) { // This is a null
        console.log("The null value is falsy"); // This will print false
    } else if (value === undefined) { // This is a undefined
        console.log("undefined is falsy"); // This will print false
    } else if (value === 0) { // This is a number
        console.log("The number 0 is falsy (the only falsy number)"); // This will print false
    } else if (value === "") { // This is a empty string
        console.log("The empty string is falsy (the only falsy string)"); // This will print false
        
    }
  

    console.log("The boolean value is falsy"); // This will print false
    console.log("The null value is falsy"); // This will print false
    console.log("undefined is falsy"); // This will print false
    console.log("The number 0 is falsy (the only falsy number)"); // This will print false
    console.log("The empty string is falsy (the only falsy string)"); // This will print false
