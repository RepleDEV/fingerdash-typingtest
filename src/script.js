const menu_start = document.getElementsByClassName("menu-start");
const menu_main  = document.getElementsByClassName("menu-main");

const timer = document.getElementById("timer");

const outbox = document.getElementById("outbox");
const inbox = document.getElementById("inbox");

const genRanWords = n => randomWords(n);
var generatedWords = genRanWords(120);
const updateWords = () => outbox.innerHTML = `${generatedWords.join(" ")}...`;

const updateTimer = time => timer.innerHTML = time;

function buttonClick(e) {
    switch (e){
        case "start":
            menu_start[0].classList.add("hidden");
            menu_main[0].classList.remove("hidden");
            setInterval(() => {
                menu_main[0].classList.remove("transparent");
            }, 1);

            startTest(10);

            break;
    }
}

var startTestTog = 0;

function startTest(time) {
    updateWords();
    //That's the setup. Next is the TRUE mechanics ;)
    inbox.oninput = () => {
        if (startTestTog == 0)test_normal(time);
        startTestTog = 1;
    }   
}

function test_normal(time) {
    var timer = time;

    loop();

    function loop() {
        updateTimer(timer);
        if (timer <= 0)return;
        console.log(timer);
        setTimeout(() => {
            timer--;
            loop();
        }, 1000);
    }
}