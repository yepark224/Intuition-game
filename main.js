// 랜덤번호 지정
// 유저가 번호 입력한다,  그리고 go 버튼 누름
// 만약에 유저가 랜덤번호를 맞추면, 맞췄습니다!
// 랜덤번호가 < 유저번호 Down!!! 
// 랜덤번호가 > 유저번호  Up!
// Reset 버튼을 누르면 게임이 리셋된다.
// 5번의 기회를 다쓰면 게임이 끝난다. (버튼 disable)

// 유저가 1~100 범위 밖에 숫자를 입력하면 알려준다. 기회를 깍지 않는다.

// 유저가 이미 입력한 숫자를 또 입력하면, 알려준다, 기회를 깍지 않는다. 


let RandomNum = 0
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");
let chances = 5 ;
let gameOver = false;
let chanceArea = document.getElementById("chance-area")
let history = [];

//playbutton 을 클릭했을때 click 시 play 함수를 실행 --> 함수도 매개변수로 넘길 수 있다.
playButton.addEventListener("click",play);
resetButton.addEventListener("click",reset);
userInput.addEventListener("focus",function(){
    userInput.value="";
})


//1 부터 20 까지의 랜덤한 숫자를 생성하는 함수 
function pickRandomNum(){
    //0 부터라서 +1 함
    computerNum = Math.floor(Math.random()*20) + 1;
    console.log("정답", computerNum);
}

function play(){
    let userValue = userInput.value;

    // 유효성검사
    if (userValue < 1 || userValue > 20){
        resultArea.textContent = "input numbers that are between 1-20";
        return;
    }

    if(history.includes(userValue)){
        resultArea.textContent="Input different number";
        return;
    }    
    
    chances -- ;
    // 동적인 값을 백틱 ' ' 안에 ${} 을 이용해 쓸 수 있음
    chanceArea.textContent = `left chances : ${chances}` ;
    
    console.log("chance : ", chances);

    if(userValue < computerNum){
        resultArea.textContent = "UP!"
    }else if(userValue > computerNum){
        resultArea.textContent = "DOWN!"
    }else {
        resultArea.textContent = "CORRECT 🎉!"
        gameOver = true;
    }

    history.push(userValue);
    console.log(history);

    if(chances <1 ){
        gameOver = true ; 
    }

    if (gameOver == true){
        playButton.disabled = true;
    }

    
}

function reset(){
    // user input 창 정리
    userInput.value = "";
    // 새로운 번호 생성
    pickRandomNum();

    resultArea.textContent = "Result block";
}

pickRandomNum()