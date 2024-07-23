let taslar = ["t0", "t1", "t2", "t3", "t4", "t5", "t6", "t7", "t8"]

function tasBul(val) {
    for (let i = 0; i < taslar.length; i++) {
        if (document.querySelector(`#${taslar[i]} a-text`).getAttribute('value') === val) {
            return taslar[i];
        }
    }
}

function degisme(id, bosTasId) {
    let yakinlar = [];
    if ([2, 5, 8].includes(parseInt(bosTasId[1]))) {
        yakinlar = [+3, -3, -1];
    } else if ([0, 3, 6].includes(parseInt(bosTasId[1]))) {
        yakinlar = [+3, +1, -3];
    } else {
        yakinlar = [+3, +1, -3, -1];
    }

    for (let i = 0; i < yakinlar.length; i++) {
        if (parseInt(bosTasId[1]) + yakinlar[i] === parseInt(id[1])) {
            return true;
        }
    }

    return false;
}

function pushed(id) {
    let btn = document.getElementById(id);
    let clickSound = document.getElementById('clickSound');
    let winSound = document.getElementById('winSound');

    if (btn.querySelector('a-text').getAttribute('value') !== " ") {
        let bosTasId = tasBul(" ");
        if (!degisme(id, bosTasId)) return;

        document.querySelector(`#${bosTasId} a-text`).setAttribute('value', btn.querySelector('a-text').getAttribute('value'));
        btn.querySelector('a-text').setAttribute('value', " ");

        clickSound.currentTime = 0;
        clickSound.play();

        if (checkWin()) {
            winSound.play();
            //alert("クリア！");
        }
    }
}

function solvable(rndList) {
    let count = 0;
    for (let i = 0; i < rndList.length - 1; i++) {
        if (rndList[i] === 0) {
            continue;
        }

        for (let j = i + 1; j < rndList.length; j++) {
            if (rndList[j] === 0) {
                continue;
            } else if (rndList[i] > rndList[j]) {
                count++;
            }
        }
    }

    return count % 2 === 0;
}

function randomTaslar() {
    let rndList = [];
    while (true) {
        rndList = [];
        while (rndList.length < 9) {
            let randomnumber = Math.floor(Math.random() * 9);
            if (rndList.indexOf(randomnumber) > -1) continue;
            rndList[rndList.length] = randomnumber;
        }
        if (solvable(rndList)) {
            break;
        }
    }

    for (let i = 0; i < taslar.length; i++) {
        let val = rndList[i] === 0 ? " " : rndList[i].toString();
        document.querySelector(`#${taslar[i]} a-text`).setAttribute('value', val);
    }
}

function checkWin() {
    for (let i = 0; i < taslar.length; i++) {
        let currentNumber = document.querySelector(`#${taslar[i]} a-text`).getAttribute('value');
        if (currentNumber.trim() !== "" && parseInt(currentNumber) !== i + 1) {
            return false;
        }
    }
    return true;
}

document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.querySelector('#startButton');
    startButton.addEventListener('click', () => {
        randomTaslar();
    });

    taslar.forEach(tas => {
        document.getElementById(tas).addEventListener('click', () => {
            pushed(tas);
        });
    });
});
