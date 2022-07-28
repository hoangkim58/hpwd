
function  handleBirthday() {
    handleIdentifiedInfo()
    hiddenElement(getTitleLink)
}

function handleIdentifiedInfo(){
    
    //get value time
    handleValueTime()
    var info = loadStuff() 
    
    //YYYY/MM/DD
    var isDateValid = testDateValid(getYear, info.month, info.day)
    if(isDateValid ){ 
 
        // surt to right banner
        slideShowMove(getScreenContainer,1) 

        hiddenElement(passwordContainer)
        addClickMe(activeClickMe) 

        //disabled input day, month
        hideInput(getDay, getMonth)
        getName.innerHTML = 'Hello, '
        getTitleSupport.innerHTML = 'Check password completed!!!' 
        
        //get data customer
        handleInfoCustumer( info.day, info.month)  

        getAccountName.innerHTML = `${infoData.nickName}`  || `${infoData.name}` || `Guest`
        getName.innerHTML += `${infoData.name}!!!`  
        getImgIdentifier = infoData.url
 
        showPersonalPicture(getPicIndentifier,infoData.url)
        return infoData.url
    }
}

function handlePartyBD() {  

    infoData.nickName == 'L N S T' ? changeBackgroundBD(true) : changeBackgroundBD()
    console.log(infoData);
    setTimeout(() => {
        showCountDownHPBD(0, 0, 1)

    }, 1500);
    displayTimeUntilBD()
  
    //hide element nitification, btn1
    hiddenElement(activeClickMe)
    hiddenElement(getTitleLink)
}

let getImgCountDown =  document.querySelector(".screen-surf-second")  
var getName =  document.querySelector(".screen-surf")
var i = 0;

function showCountDownHPBD(a, b, c) {  
    
    let getTime = document.querySelector('.title-rule').innerHTML.split(' ') 
    var isDate = (getTime[0] == a ) && (getTime[0] != 364)
    var isHour = getTime[2] == b
    var isMinute = getTime[4] == c
    let i = getTime[6]
     

    getName.innerHTML = 'Have a nice day!'
    getName.style.fontSize = '30px' 

    if(isDate && isHour && isMinute){ 
        showCircleCountDown()
        
        const countDownHPBD = setInterval(() => {
            if(i == '0') {

                //audio 
                playAudioSayingHPBD()
                playAudioApplause()
                playAudioSayingCrowd() 
                beginPartyBD()
                //
                getName.innerHTML = "Happy Birthday!!!"
                getName.style.fontSize = '40px'  
                hiddenElement(getImgCountDown)
                hiddenElement(imgCountdowBG)  
                clearInterval(countDownHPBD)
            } 
            if(i <= 59 && i > 0) {
                getName.innerHTML = `Waiting...`
                getImgCountDown.innerHTML = `<p style='font-size: 150px;'>  ${i}</p>` 
                playAudioTimeRun()
                prepareEffectHPBD()
            } 
            i-- 
         }, 1000);   
    
    }
    if(getTime[0] == 364){ 
        let i = 6

        getName.innerHTML = 'Today is a special day with you!'
        getName.style.fontSize = '22px' 

        showCircleCountDown()

        const countDownHPBD = setInterval(() => {
            if(i == '0') {

                //audio 
                playAudioSayingHPBD()
                playAudioApplause()
                playAudioSayingCrowd()
                beginPartyBD()
                //
                getName.innerHTML = "Happy Birthday!!!" 
                getName.style.fontSize = '40px'
                hiddenElement(getImgCountDown)
                hiddenElement(imgCountdowBG) 
                clearInterval(countDownHPBD)
            } 
            if(i <= 3 && i > 0) {
                playAudioTimeRun()
                getName.innerHTML = `Waiting...` 
                getImgCountDown.innerHTML = `<p style='font-size: 150px;'>${i}</p>` 
                prepareEffectHPBD()
 
                // console.log(i)

            } 
            i-- 
         }, 1000);   
    
    }
   
}

function showCircleCountDown(){
    setTimeout(() => {

        activeFlexElement(getImgCountDown)
        activeFlexElement(imgCountdowBG) 
    }, 4000)
}

var img = document.querySelector('.img-main')
function prepareEffectHPBD() {

    showHPDBContainer(imgHPBDContainer)
    hiddenElement(getTitleSupport)
    hiddenElement(passwordContainer)

    
    document.querySelector('.m-t').setAttribute('style','margin: 0px')

    // add img frame
    img.classList.remove("noneDisplay")
    img.classList.add("img")  
    // img.setAttribute('src',`${getImgIdentifier}`)
    img.setAttribute('style',`background-image:   url('${getImgIdentifier}')`)

}

var imgHPBDContainer = document.querySelector('.hpbd-container')
var imgCountdowBG = document.querySelector('.sreen-surf-background')

//hide screen-surf-2
hiddenElement(getImgCountDown)
hiddenElement(imgCountdowBG)
//

var imgContainer = document.querySelector('.img-container')
function showHPDBContainer(a) {
    imgHPBDContainer.style.display = 'inline-block'
    imgContainer.style.height = '430px'
}

function innerFirstSay(s) {
    getName.innerHTML = `${s}`
}

function beginPartyBD(){
    var getCake = document.querySelector('.hpbd-container')
    var getIndentifiedBG= document.querySelector('.img-main').style.backgroundImage
    img.style.cssText = `background-image: url(./asset/img/birthday-confetti-background.png),
                            ${getIndentifiedBG};
                        background-size: contain;`
    getCake.classList.add('hpbd-card--active')
}

//

//////////////audio 
// audio children saying HPBD
var getAudioSayingHPBD = document.querySelector('#myAudio-saying-hpbd')
function playAudioSayingHPBD(){
    getAudioSayingHPBD.play()
}

// audio applause 
var getAudioApplause = document.querySelector('#myAudio-applause')
function playAudioApplause(){
    getAudioApplause.play()
}
 
// audio saying hpbd crowd 
var getAudioSayingCrowd = document.querySelector('#myAudio-saying-hpbd-crowd')
function playAudioSayingCrowd(){
    getAudioSayingCrowd.play()
}

// audio time run
var getAudioTimeRun = document.querySelector('#myAudio-time-run')
function playAudioTimeRun(){
    getAudioTimeRun.play()
}
 
function hiddenElement(a){
    a.setAttribute('style','display: none;')
}