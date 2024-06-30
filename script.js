let randomNum = 0
let playBtn = document.getElementById("play-button")
let inputArea = document.getElementById("input-area")
let resultArea = document.getElementById("result-area")
let resetBtn = document.getElementById("reset-button")
let countArea = document.getElementById("count-area")
let correct = document.getElementById("correct");
let correctNumber = document.getElementById("correct-number");
let count = 5
let history = []
let sojuTop = 700

// 플레이 버튼 이벤트 추가
playBtn.addEventListener('click', play)
// 리셋 버튼 이벤트 추가
resetBtn.addEventListener('click', reset)

inputArea.addEventListener('focus', function(){inputArea.value=""})

function changeSojuCupAfterTop(topValue) {
    const styleSheet = document.styleSheets[0];
    const rules = styleSheet.cssRules || styleSheet.rules;
    for (let i = 0; i < rules.length; i++) {
        if (rules[i].selectorText === '.sojuCup.active::after') {
            rules[i].style.top = `${topValue}px`;
            break;
        }
    }
}

// 1 ~ 50 사이의 난수 발생 함수
function createRandomNumber(){
    randomNum = Math.floor((Math.random() * 100) / 2 + 1)
}

function play(){
    let userNum = inputArea.value


    // 중복 입력 방지
    if (history.includes(userNum)){
        resultArea.textContent = '이미 입력한 숫자임'
        return
    }
    // 지정 외 숫자 입력 방지
    if (userNum < 1 || userNum > 50){
        resultArea.textContent = '1 ~ 50 사이의 숫자가 아님'
        return
    }

    count--;
    countArea.textContent = `남은 기회 : ${count}`

    sojuTop -= 140;
    changeSojuCupAfterTop(sojuTop)

    // 기회를 다 사용하면 버튼 disable
    if (count < 1){
        playBtn.style.display = "none"
        correct.style.display = "block";
        correctNumber.textContent = randomNum;
        resultArea.textContent = `내가 이김 한잔하셈ㅋ`
        return;
    }

    if (userNum < randomNum){
        resultArea.textContent = `업!`
    } else if (userNum > randomNum){
        resultArea.textContent = `다운!`
    } else{
        resultArea.textContent = `이걸 맞추네 굿`
        playBtn.style.display = "none"
    }
    history.push(userNum)
}

function reset(){
    createRandomNumber()
    resultArea.textContent = "한잔해!"
    count = 5;
    countArea.textContent = `남은 기회 : ${count}`
    playBtn.style.display = "inline-block"
    history = []
    sojuTop = 700
    changeSojuCupAfterTop(sojuTop)
    correct.style.display = "none";
}
createRandomNumber()

let gamestartBtn = document.getElementById("gamestartBtn")

gamestartBtn.addEventListener('click', start)

function start(){
    const sojuCup = document.querySelector('.sojuCup');
    const innerElements = sojuCup.querySelectorAll('h2, p, img, div');
    innerElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transition = 'opacity 0.2s ease';
    });

    setTimeout(() => {
        sojuCup.style.width = '0';
        sojuCup.style.padding = '0';
        
        // width와 padding이 0이 된 후 display를 none으로 설정
        setTimeout(() => {
            sojuCup.style.display = 'none';
        }, 400); // 추가 지연 시간을 줌 (0.25초)
    }, 250); // 첫 번째 지연 시간 (0.25초)
}

