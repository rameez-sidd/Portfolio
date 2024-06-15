let words = ['Student', 'Techie', 'Coder'];
let index = 0;
// Function that executes every 2000 milliseconds 
let t = setInterval(function () {
    // Random number generator 
    // Change the word in the span for a random one in the array of words 
    document.querySelector("#yellow-font").innerText = words[index];
    index++;
    if (index >= words.length) {
        index = 0;
    }
}, 2000); 