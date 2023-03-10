window.addEventListener('load', init)

// Load More Words From Text File
function loadMoreWord(){

    let xml;

    if(window.XMLHttpRequest){
        xml = new XMLHttpRequest()
    }

    else{
        xml = new ActiveXObject("Microsoft.XMLHTTP")
    }

    xml.onReadyStateChange = function(){

        if(xml.readyState === 4 && xml.status === 200){
            let words = xml.responseText.split("\n") 
        }

    }

    xml.open("GET", "words.txt", true)
    xml.send()

}

const levels = {

    easy: 5,
    medium: 3,
    hard: 1

}

const currentLevel = levels.easy

let time = currentLevel
let score = 0
let isPlaying

const input = document.getElementById('input-field')
const currentWord = document.getElementById('word')
const message = document.getElementById('message')
const totalTime = document.getElementById('total-time')
const timeLeft = document.getElementById('time')
const totalScore = document.getElementById('score')

let words = [

    'hat',
    'river',
    'lucky',
    'statue',
    'generate',
    'stubborn',
    'cocktail',
    'runaway',
    'joke',
    'developer',
    'establishment',
    'hero',
    'javascript',
    'nutrition',
    'revolver',
    'echo',
    'siblings',
    'investigate',
    'horrendous',
    'symptom',
    'laughter',
    'magic',
    'master',
    'space',
    'definition',
    'champion',
    'ghost',
    'fierce'

]

function init(){

    totalTime.innerHTML = currentLevel

    showWord(words)

    input.addEventListener('input', startMatch)

    setInterval(countdown, 1000)
    setInterval(checkStatus, 50)

    setTimeout(loadMoreWord(), 1000)

}

function startMatch(){

    if(matchWords()){

        isPlaying = true
        time = currentLevel + 1
        showWord(words)

        input.value = ''

        score++

    }

    if(score === -1){
        totalScore.innerHTML = 0
    }

    else{
        totalScore.innerHTML = score
    }

}

function matchWords(){

    if(input.value === currentWord.innerHTML){

        message.innerHTML = 'Matched !!!!'

        return true

    }

    else{

        message.innerHTML = ''

        return false

    }

}

function showWord(words){

    const randIndex = Math.floor(Math.random() * words.length);

    currentWord.innerHTML = words[randIndex]

}

function countdown(){

    if(time > 0){

        time--

    }

    else if(time === 0){

        isPlaying = false

    }

    timeLeft.innerHTML = time

}

function checkStatus(){

    if(!isPlaying && time === 0){

        message.innerHTML = 'Game Over !!!'

        score = -1

    }

}