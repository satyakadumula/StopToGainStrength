const listItems = [
    "bdcbajbv am vajdscxscvrtfh xzXCWREre scrdvbfngh jhugy ftrdrX$ ztyst dy5r6tntfr ",
    "jsbdcajvdabcajbbhjb jsbdcajvd  abcajbbh jbjsb dcajvdabc ajbbhjbj sbdcajvda bcajbbh jbjsb dcajvdabc ajbbhjb",
    "bsdvfusv d dvavasdv jsbdcajv dabcajbb hjbjs  bdcajvda bcajb bhjbjsb dcajvdab cajbbhj bjsbdc ajvdabca  jbbhjb",
    "sjdvba bvakbv kabvajsbd cajvdabcaj bbhj bjsbdcajv dabcaj bbhjb",
    "oiisuiyu FGJWVDEF jsbdcajvd abcajbbh  jbjsb dcajvdab cajbbh jbjsbd cajvdabc ajbbhjbj sbdcajvd abcajbbh jbjsb dcajvd abcajbb hjb jsbdcaj vdabcaj bbhjb ",
    "qlkwjeh ifahksbjvdjbj sbdcajvdab  cajbbhjbj  sbdcajv dabcaj bbhjbjs  bdcajv dabca  jbbhjb",1,2,3,3,4,4,5,5,6,7,7,90
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


// iterator();
