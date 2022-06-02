const englishDictionary = ['apple', 'banana', 'airplane', 'airport', 'animal', 'autumm', 'balloon', 'beautiful', 'bicycle', 'brother', 'butter', 'calendar', 'captical', 'ceiling', 'chopstick', 'curtain'];

let englishDictionaryLength = englishDictionary.length;
let answer = ""
let answerLength = -1;
let life = -1;


/** 게임스타트 버튼 눌렀을때의 함수 지정**/
function startButton() {
	  
    let i = Math.floor(Math.random() * englishDictionaryLength);
    answer = englishDictionary[i];
    answerLength = englishDictionary[i].length;

    let answerStr = "";
    for (let k = 0; k < answerLength; k++) {
        answerStr += "■";
    }
    document.querySelector("#answer").innerText = answerStr;
    life = 10;
    document.querySelector("#life").innerText = life;
}


const selectElement = document.querySelector('#alphabet');
const selectAnswer = document.querySelector("#userAnswer");

let userInputValue = "";
let answerSeq = new Set();

selectElement.addEventListener('change', (firstEvent)=>{
    /* 스타트버튼 누르지 않았을때의 예외처리 */
    

    userInputValue = selectElement.value;
    if (userInputValue === "") {
        return;
    }
    life--;
    document.querySelector("#life").innerText = life;
    for (let k = 0; k < answer.length; k++) {
        if (answer[k] === userInputValue) {
            answerSeq.add(k);
        }
    }
    let answerStr = ""
    for (let k = 0; k < answer.length; k++) {
        if (answerSeq.has(k)) {
            answerStr += answer[k];

        } else {
            answerStr += "■"
        }
    }
    document.querySelector("#answer").innerText = answerStr
    if (life === 0) {
        alert('GAMEOVER 답은 "' + answer + '"입니다.');
        window.location.reload();
    }
}
);

selectAnswer.addEventListener('change', (secondEvent)=>{
    userInputAnswer = selectAnswer.value;
    if (userInputAnswer === answer) {
        alert("정답입니다!");
        window.location.reload();
    } else {
        alert('오답입니다 답은 "' + answer + '"입니다.');
        window.location.reload();
    }
}
)


