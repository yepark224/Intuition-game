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

//1 부터 20 까지의 랜덤한 숫자를 생성하는 함수 
function pickRandomNum(){
    RandomNum = Math.floor(Math.random()*20)+ 1;

    console.log("정답", RandomNum)
}

pickRandomNum()