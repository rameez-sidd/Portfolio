const quotes = {
    0 : "Code is like humor. When you have to explain it, it’s bad.",
    1 : "It’s not a bug; it’s an undocumented feature.",
    2 : "Confusion is part of programming.",
    3 : "If debugging is the process of removing bugs, then programming must be the process of putting them in.",
    4 : "God is real, unless declared integer.",
    5 : "There are two ways to write error-free programs; only the third works.",
    6 : "Coding is like poetry. It should be short and concise.",
    7 : "Programming is the art of algorithm design and the craft of debugging errant code.",

}

const quoteContainer = document.querySelector("#quotes-content");

window.addEventListener("load", () => {
    let key = Math.floor(Math.random() * 8);  
    quoteContainer.innerText = `"${quotes[key]}"`;
});