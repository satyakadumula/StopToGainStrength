const listItems = [
    "We cannot solve problems with the kind of thinking we employed when we came up with them.",
    "The struggle doesn't define you. it transforms you into someone wiser, braver and ready for the life you deserve.",
    "Learn as if you will live forever, live like you will die tomorrow",
    "When was the last time you stopped to ask yourself 'Am i okay?'. Sometimes you have to make yourself happy.",
    "Choose peace over chaos, calm your conflict",
    "You can't undo the past, but can create a future where you don't make the same choices.",
    "Protect your peace rather than trying to prove your point.",
    "Prioritize your happiness and let go of anything that disturbss it.",
    "Life feels better when you choose what truly matters.",
    "Growth demands courage. It asks you to face your mistakes...not as failures, but as lessons.",
    "Everyone you meet is carrying a story you can't see. So be kind.",
    "The most important thing in your life is you are still alive right now, because quarter of people in this world dies every single day...",
    "It's just a bad day, not a bad life...",
    "Sometimes, life has to break you, not to destroy you, but to rebuild you into someone who can withstand the storms you once feared.",
    "Lif only gets harder when you choose the easy way out.",
    "Stop doubting yourself, Be proud of how far you've come.",
    "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.",
    "Success is getting what you want; happiness is wanting what you get.",
    "How can you blame the rain for the mess it made when it was you who opened the window?. It's not about the rain.",
    "Stop worrying about who you lose. Start caring about the people who choose you.",
    "Once you realise that you are mortal, nothing will be considered serious except to live with eagerness as intense as possible.",
    "Stop waiting for things to happen, Start making them happen. The longer you wait, the more the life slips by.",
    "Life is a book, some chapters are sad while some are happy but you will never know if you never turn the page.",
    "Remember the journey to finding love isn't just about searching, it's about preparing yourself to be discovered.",
    "Who you're striving to be now matter more than who you used to be before.",
    "It may be dark right now and 'Hope' seems hard to be found. But remember it's your determination that will always 'Shine the brightest'.",
    "When one door closes, another door will open. Look close...you'll find that.",
    "Don't let the past hold your back. The future is waiting to be written. Every end is chance to a new beginning.",
    "Success is not final, failure is not fatal. It is the courage to continue that counts.",
    "Bad chapters can still create great stories, wrong decisions can still lead to right places, Bad experiences can still make good memories.",
    "We lose our passion not because it fades, but because we bury it under other's expectations. Don't wear masks jsut to pretend."
];

let quote = document.querySelector("#quote");
let btn = document.querySelector("#btn");
let currentIndex = 0;
let intervalId;

const iterator = () => {
    intervalId = setInterval(() => {
        quote.innerHTML = '<em>"'+listItems[currentIndex]+'"</em>';
        currentIndex = (currentIndex + 1) % listItems.length; 
    }, 150); 
};

btn.addEventListener('click', function() {
    if (btn.textContent === "Stop") {
        btn.textContent = "Start";
        clearInterval(intervalId); 
    } else {
        btn.textContent = "Stop";
        // currentIndex = 0; 
        iterator(); 
    }
});


// iterator();
