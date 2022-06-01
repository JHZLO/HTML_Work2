const englishDictionary = ['apple','banana','airplane','airport','animal','autumm','balloon','beautiful','bicycle','brother','butter','calendar','captical','ceiling','chopstick','curtain'];
		
		let englishDictionaryLength = englishDictionary.length;
		let answer = ""
    let answerLength = -1;
    let life = -1;
		/** 게임스타트 버튼 눌렀을때의 함수 지정**/
		function startButton(){
			let i = Math.floor(Math.random()*englishDictionaryLength);
			answer = englishDictionary[i];
			answerLength = englishDictionary[i].length;
      
			
		let answerStr = "";
		for (let k = 0; k < answerLength; k++) {
			answerStr += "■";	
		}
		document.querySelector("#answer").innerText = answerStr;
    life = 10;
	}	
		

		/* 5번의 기회동안 알파벳을 맞출기회를 줌 맞추면 알파벳이 보임
		while(k<5){
			for(l=0;l<answerLength;l++){
				if (alphabet in englishDictionary[i][l]){
					document.querySelector("#answer").innerText =englishDictionary[i][l];
				}
				else{
					
					document.querySelector("#answer").innerText = "■ ";
				}
			}
		k++; 
			
		}*/
    
    
const selectElement = document.querySelector('#alphabet');
const selectAnswer = document.querySelector("#userAnswer");

let userInputValue = "";
let answerSeq = new Set();



selectElement.addEventListener('change', (firstEvent) => {
  userInputValue = selectElement.value;
  if(userInputValue === ""){
    return;
  }
  life--;
  for( let k=0; k<answer.length; k++ ){
    if( answer[k] === userInputValue){
      answerSeq.add(k); 
    }
  }
  let answerStr = ""
  for(let k=0; k<answer.length; k++){
    if( answerSeq.has(k)){
      answerStr += answer[k];
    } else{ 
      answerStr += "■"
    }
  }
  document.querySelector("#answer").innerText = answerStr
  if(life === 0){
    alert('GAMEOVER 답은 "'+answer+'"입니다.');
    window.location.reload();
  }
});

selectAnswer.addEventListener('change',(secondEvent) =>{
  userInputAnswer = selectAnswer.value;
  if(userInputAnswer === answer){
    alert("정답입니다!");
  }else{
    alert('오답입니다 답은 "'+answer+'"입니다.');
    window.location.reload();
  }
})