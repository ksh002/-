// 랜덤번호 지정
// 유저가 번호를 입력한다. 그리고 go 라는 버튼을 누름
// 만약에 유저가 랜덤번호를 맞추면, 맞췄습니다!
// 랜덤번호 < 유저번호 Down
// 랜덤번호 > 유저번호 Up
// Reset버튼을 누르면 게임이 리셋됨
// 5번의 기회를 다 쓰면 게임오버 (버튼 disable)
// 유저가 1 ~ 100 범위 밖에 숫자를 입력하면 알려준다. (기회소모x)
// 유저가 이미 입력한 숫자를 또 입력하면 알려준다. (기회소모x)

let randomNum = 0
let playButton = document.getElementById("play-button")
let userInput = document.getElementById("user-input")
let resultArea = document.getElementById("result-area")

playButton.addEventListener('click',play)

function pickRandomNum(){
    randomNum = Math.floor((Math.random() * 100) + 1)
    console.log(randomNum)
}
function play(){
    let userValue = userInput.value
    if(userValue < randomNum){
        resultArea.textContent = "Up!!!"
    } else if(userValue > randomNum){
        resultArea.textContent = "Down!!!"
    } else{
        resultArea.textContent = "정답"
    }
}
pickRandomNum()

