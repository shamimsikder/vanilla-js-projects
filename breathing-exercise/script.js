const container = document.getElementById('circle-container');
const text = document.getElementById('text');

const totalTime = 7500;
const breathTime = (totalTime / 5) *2;
const holdTime = (totalTime / 5);

breathAnimation()

function breathAnimation(){

    text.innerText = 'Breath In!';
    container.className = 'circle-container circle-grow';

    setTimeout(() => {

        text.innerText = 'Hold';

        setTimeout(() => {

            text.innerText = 'Breath Out!';
            container.className = 'circle-container circle-shrink';

        },holdTime);

    },breathTime);

}

setInterval(breathAnimation, totalTime);