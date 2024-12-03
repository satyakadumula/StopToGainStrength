const listItems = [
    "bdcbajbv am va",
    "jsbdcajvdabcajbbhjb",
    "bsdvfusv d dvavasdv",
    "sjdvbabvakbvkabva",
    "oiisuiyuFGJWVDEF ",
    "qlkwjehifahksbjvdjb",1,2,3,3,4,4,5,5,6,7,7,90
];

let quote = document.querySelector("#quote");
let btn = document.querySelector("#btn");
let currentIndex = 0;
let intervalId;

const iterator = () => {
    intervalId = setInterval(() => {
        quote.innerHTML = listItems[currentIndex];
        currentIndex = (currentIndex + 1) % listItems.length; // Loop back to start when at the end of the list
    }, 100); 
};

btn.addEventListener('click', function() {
    if (btn.textContent === "Stop") {
        btn.textContent = "For More";
        clearInterval(intervalId); 
    } else {
        btn.textContent = "Stop";
        // currentIndex = 0; 
        iterator(); 
    }
});


iterator();
