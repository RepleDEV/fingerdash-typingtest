const menu_start = document.getElementsByClassName("menu-start");
const menu_main  = document.getElementsByClassName("menu-main");

const outbox = document.getElementById("outbox");

const genRanWords = n => randomWords(n);

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

function startTest(time) {
    var generatedWords = genRanWords(120);
    const updateWords = () => outbox.innerHTML = `${generatedWords.join(" ")}...`;
    updateWords();
    //That's the setup. Next is the TRUE mechanics ;)
    test_normal(time);
}

function test_normal(time) {
    var timer = time;

    loop();

    function loop() {
        if (timer <= 0)return;
        console.log(timer);
        setTimeout(() => {
            timer--;
            loop();
        }, 1000);
    }
}