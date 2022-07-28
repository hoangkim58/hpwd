//function index.html
// format move ' % '
var getCardContainer = document.querySelector('.card-container ')
var getArrowLeft = document.querySelector('.card-arrow-left')
var getArrowRight = document.querySelector('.card-arrow-Right')

var quatityOfCard = document.querySelectorAll('.card').length
var getAudioClick = document.querySelector('#myAudio-message-appear')

function autoTransitionCard(x) {

    getCardContainer.style.right = `${x}00%`
    
}


var getCard = document.querySelectorAll('.card')

let i = 0;
function isArrowRight(){ 
    playAudioClick()
    if(i < quatityOfCard){

        // next(i)
        i++
        autoTransitionCard(i)
    }
    if(i === quatityOfCard){
        // getCard[quatityOfCard].classList.remove('disable')
        // getCard[0].classList.add('disable')
        autoTransitionCard(0)
        i = 0
    }
}

function next(i){
    if(i >= 0) {
        getCard[i].classList.add('next')
        getCard[i+1].classList.add('next')
        setTimeout(() => {
            getCard[i+1].classList.add('active')
            getCard[i].classList.remove('active')
            getCard[i].classList.remove('next')
            getCard[i+1].classList.remove('next')
            // hiddenElement(getCard[i])
        },500)
    }
}


function isArrowLeft() {
    playAudioClick()
    if(i === 0){
        autoTransitionCard(quatityOfCard - 1) 
        i = quatityOfCard
    }
    if(i > 0) {
        i--
        autoTransitionCard(i)
    }
}

function playAudioClick(){
    getAudioClick.play()
}
