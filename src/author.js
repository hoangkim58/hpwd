 

//FirstSay
var getScreenContainer = document.querySelector(".screen__container")
var getFirstSay = document.querySelector(".screen")
var getName = document.querySelector(".screen-surf")
var letterMorn = 'Morning'
var letterAfternoon = 'Afternoon'
var letterEvening = 'Evening'
var letterNight = 'Night' 

var getHour = new Date().getHours() 
var getYear = new Date().getFullYear() 

//Calc session of day
sessionOfDay(getHour)
function sessionOfDay(getHour){
    
    if(getHour >= 20 ) showFirstSay(letterNight)
    else if(getHour >= 17 ) showFirstSay(letterEvening)
    else if(getHour >= 12 ) showFirstSay(letterAfternoon)
    else if(getHour >= 0 ) showFirstSay(letterMorn)
}

function showFirstSay(a){

    getFirstSay && (getFirstSay.innerHTML = `Good ${a}!!!`)
    
}

//getName && handle author 
let check = false;
var infoOfSonTuyen = { 
    isRight: true,
    nickName: 'L N S T',
    name: 'Sơn Tuyền',
    url : `https://scontent.fsgn5-6.fna.fbcdn.net/v/t1.6435-1/181320742_3285364635023927_6985347847371146942_n.jpg?stp=dst-jpg_p200x200&_nc_cat=108&ccb=1-7&_nc_sid=7206a8&_nc_ohc=0kxLTgFizFsAX-Km9u5&_nc_ht=scontent.fsgn5-6.fna&oh=00_AT9yUX_D0Wo_0Pogr_MX8PY3cBa7vAUBtuGU6bhCFkYhmQ&oe=630846DC`,
    dayOfBirth : 5,
    monthOfBirth : 8
} 
var infoOfMySister = { 
    name: 'Kim Ngân',
    url : `https:9//scontent.fhan5-11.fna.fbcdn.net/v/t39.30808-6/273682530_3163623703872209_3126536759135922483_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=YUT12BSBXSQAX8m9w3T&_nc_ht=scontent.fhan5-11.fna&oh=00_AT8v4i9c3dcTGpQrZMa6M7wCG0xfGi3JhOjlAspYSbcRUQ&oe=62310F0F`,
    dayOfBirth : 21,
    monthOfBirth : 3
}
var infoOfNgan = { 
    name: 'Kim Ngân',
    url : `https://sconten9t-hkt1-2.xx.fbcdn.net/v/t1.6435-9/110881162_762857647877935_4072444104669622641_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=0debeb&_nc_ohc=ow1KJ5kso60AX9tlON-&_nc_ht=scontent-hkt1-2.xx&oh=00_AT_R4pzYxZL22aPSnLjgCxU-Zm4AKPx1elBbEObTr2KY2A&oe=62514526`,
    dayOfBirth : 6,
    monthOfBirth : 11
}
var infoOfMyCC = { 
    name: 'My Củ Chi',
    url : `https://scontent.f9han5-7.fna.fbcdn.net/v/t39.30808-1/267601821_1317040615388937_365786379054233398_n.jpg?stp=dst-jpg_p200x200&_nc_cat=100&ccb=1-5&_nc_sid=7206a8&_nc_ohc=waE5kWp1ZUcAX8FGJXy&_nc_ht=scontent.fhan5-7.fna&oh=00_AT9fotRtYPzmw85Fi9kIP-XFix7cTk7dEKtsR6lHKVpYxA&oe=6230D489`,
    dayOfBirth : 11,
    monthOfBirth : 6
}
var infoOfNgH = { 
    nickName: 'Nguyễn Hữu',
    name: 'Hữu',
    url : `https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-1/280236422_3191374924413859_5601856867216808774_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=104&ccb=1-7&_nc_sid=7206a8&_nc_ohc=tjHALM48WzEAX-v5bX0&_nc_ht=scontent.fsgn5-3.fna&oh=00_AT-7ugIubsUgMtKvBGlL2iWiuawa62mCiLqXdqyQiBlh5w&oe=62DFF655`,
    dayOfBirth : 7,
    monthOfBirth : 10
}

var infoOfDefault = { 
    name: 'Guest',
    url : 'https://www.svgrepo.com/show/382097/female-avatar-girl-face-woman-user-9.svg'
}

var dataCustomer = [infoOfSonTuyen, infoOfMySister, infoOfNgan, infoOfMyCC, infoOfNgH]

var getDay = document.querySelectorAll('input')[0]
var getMonth = document.querySelectorAll('input')[1]
var getInput = document.querySelector('.input')

function handleValueTime(callback){
    var dayNum = parseInt(getDay.value)
    var monthNum = parseInt(getMonth.value)
    var infoObj = {}
    
    infoObj = {
        day: dayNum,
        month: monthNum
    }

    var isDateValid = testDateValid(getYear, monthNum, dayNum)
    if(isDateValid ){ 

        //storage Obj of Info day, month value
        saveStuff(infoObj) 
        getTitleLink.innerHTML = 'Success!!!' 
         
    }
    else{
        // alert('Invalid Info')
        getTitleLink.innerHTML = 'Invalid Info, please check again...' 
        callShakeEffect(getDay,getMonth)
       
        getDay.value = ''
        getMonth.value = ''
        // clearInterval(intervalCountDown) 
        // intervalCountDown = 0
        getTitleSupport.style.display = 'block'
    }  


    if(callback != null) callback()
}

//

//Call shake effect
function callShakeEffect(a, b){
    a.classList.add('effect-warning')
    b.classList.add('effect-warning')

    setTimeout(() => {
            
        isRemoveBorderWarning(a,b)
    }, 500);
}

function isRemoveBorderWarning(a, b){
    a.classList.remove('effect-warning')
    b.classList.remove('effect-warning')
}

var activeClickMe =  document.querySelector(".click-me")  
var getSubmit = document.querySelector('.get-password') 
var passwordContainer = document.querySelector('.get-password__container')
var getPassword = document.querySelector('.get-password') 

var getAccountName = document.querySelector('.text-account')
var getPicIndentifier = document.querySelector('.logo-account') 

var infoData = { name: infoOfDefault.name, url: infoOfDefault.url}
let getImgIdentifier = '' 
function handleInfoCustumer( a, b) {
    for (let i = 0; i < dataCustomer.length; i++) {
        if((dataCustomer[i].dayOfBirth === a) && (dataCustomer[i].monthOfBirth === b)){
            
             infoData = { nickName: dataCustomer[i].nickName, name: dataCustomer[i].name, url: dataCustomer[i].url}
        } 
    } 
}



function handleButtonPass(){
    let userName =  `${infoData.nickName}` || `${infoData.name}` || 'Guest'

    console.log(username);
    //get value time
    handleValueTime()
    var info = loadStuff() 
    //YYYY/MM/DD
    var isDateValid = testDateValid(getYear, info.month, info.day)
    if(isDateValid ){ 
 
        // surt to right banner
        hiddenElement(getPassword)
        addClickMe(activeClickMe) 
        slideShowMove(getScreenContainer,1) 

        //disabled input day, month
        hideInput(getDay, getMonth)
        getName.innerHTML = 'Hello, '
        getTitleSupport.innerHTML = 'Check password completed!!!' 
        
        //get data customer
        handleInfoCustumer( info.day, info.month)  
        getAccountName.innerHTML = userName
        getName.innerHTML += `${infoData.name}!!!`  
        getImgIdentifier = infoData.url

        showPersonalPicture(getPicIndentifier,infoData.url)
        return infoData.url
    }
}


// toggle input day, month
    function hideInput(a,b) {
        a.disabled = true
        b.disabled = true
    }
    function showInput(a,b) {
        a.disabled = false
        b.disabled = false
    }


//  


function showSecondBtn(){
    hideSecondBtn.removeAttribute('style')
}

//on/off button[1]
var getFirstBtn = document.querySelector('.get-password')

function hideFirstBtn() {
    getFirstBtn.setAttribute('style','display: none')
}

function showPersonalPicture(a,b){
    a.src = `${b}`
}
function hiddenElement(a){
    a.setAttribute('style','display: none;')
}
function activeElement(a){
    a.setAttribute('style','display: block;')
}
function activeFlexElement(a){
    a.setAttribute('style','display: flex;')
}
function addClickMe(a){
    a.classList.remove('noneDisplay')
} 
function slideShowMove(a,b){
    a.setAttribute('style',`right:${b}00%;`) 
}
function setFontSize(a, b){
    a.style.fontSize = `${b}`
}

//countDown to Your birthday
var strOfValueNumDayBD = ''
var leftSecond = ''

// format time: DD/MM
function handleCountDownBD(a,b){
    var getCurrentYear = new Date().getFullYear()
    var dateToday = new Date().getDate()
    var monthToday = new Date().getMonth() + 1
    

    var currentTime = new Date().getTime()    
    var getBDTime = 0
    var getYear = 0
    if(  dateToday >= a && monthToday >= b ){

        getBDTime = new Date( getCurrentYear + 1, ( b - 1 ) , a ).getTime()
        getYear = getCurrentYear + 1
    }   
    else{

        getBDTime = new Date( getCurrentYear , ( b - 1 ) , a ).getTime()
        getYear = getCurrentYear
    }

    var info = loadStuff()
    var isDateValid = testDateValid( getYear, info.month, info.day)
    
    if(isDateValid === true){

        leftSecond = (getBDTime - currentTime)/1000
    
        var valueDays = (getBDTime - currentTime)/1000/60/60/24 
        var valueDaysInt =  Math.floor(valueDays)
        
        var valueHours = (valueDays - valueDaysInt)*24
        var valueHoursInt = Math.floor(valueHours)
    
    
        var valueMinutes = (valueHours - valueHoursInt)*60
        var valueMinutesInt = Math.floor(valueMinutes)
    
    
        var valueSeconds = Math.floor( (valueMinutes - valueMinutesInt)*60 ) 
        var valueSecondsInt = Math.floor(valueSeconds) 
        
        strOfValueNumDayBD = `${valueDaysInt} Day: ${valueHoursInt} Hour: ${valueMinutesInt} Minute: ${valueSecondsInt} Second`
         
        // console.log(strOfValueNumDayBD)
        //render number of days left until birthday
        renderTimeUntilBD(strOfValueNumDayBD) 
    }
    return strOfValueNumDayBD
} 
// render time to display
var intervalCountDown = null
function displayTimeUntilBD(){ 
    getTitleSupport.innerHTML = 'Processing...'   

    // deplay display result
    setTimeout(() => {
        // Count down time left until birthday 
        intervalCountDown = setInterval( countUntilBD,1000);  
    }, 300);
 
} 
 


function countUntilBD(){
    // var isValueOfBirthday = loadStuff()
    var infoOfBirthday = loadStuff()

    if(infoOfBirthday !== '') { 

        handleCountDownBD(infoOfBirthday.day, infoOfBirthday.month)
    } 
}

var getTitleSupport = document.querySelector('.title-rule') 

function renderTimeUntilBD(str){
    let i=0
    if(i < leftSecond){ 
        getTitleSupport.innerHTML = `${str}` 
    }
}


// save data to local storage 
var saveData = JSON.parse(localStorage.saveData || null) || {};

// Store your data.
function saveStuff(obj) {
  saveData.obj = obj;
  // saveData.foo = foo;
//   saveData.time = new Date().getTime();
  localStorage.saveData = JSON.stringify(saveData);
}

// get your data.
function loadStuff() {
  return saveData.obj || "";
}
 
function removeLocalS() {
    localStorage.removeItem("saveData")
}

var getTitleLink = document.querySelector('.title-link-notify')
function toggleInPutValue() {
    var isDisplay = passwordContainer.style.display
    if(isDisplay == 'none'){
        
        passwordContainer.setAttribute('style','display: block')
        showSecondBtn()
        // enable input 1,2
        showInput(getDay,getMonth)
        getDay.value = ''
        getMonth.value = ''
        getDay.focus()
        
    }
    else{
        passwordContainer.setAttribute('style','display: none')

    }
}

//YYYY/MM/DD
function testDateValid(a,b,c){
    
    var sss = new Date(a, b-1, c).toDateString()
    var timeArray = sss.split(' ')
    var dayInt = parseInt(timeArray[2])

    //check day is real?
    if(c <= 31 && b <= 12 ){

        var isDayValid = c === dayInt
    }
    else {
        getDay.value = ''
        getMonth.value = ''
        getDay.focus() 
    }
     
    return isDayValid
    
} 



//show background --calc Count down until BD
var urlBackgroundImg = `https://i.pinimg.com/originals/5d/f6/c2/5df6c2a82066a17d2091a33cd62dd775.png`
var urlSTBackgroundImg = `https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-6/295324370_3646488522244868_5276155090151038463_n.jpg?stp=dst-jpg_p843x403&_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=6UaeeZaYpWsAX8Lvasa&_nc_oc=AQm0Igl14_nb2vvSWx4eoD5zp9dtWckLjyBnzsDpCWnvc4I8uMsPq705Yl1TNn_JRlM&_nc_ht=scontent.fsgn5-11.fna&oh=00_AT-Rf3o9zrhQIJUqK64XeOnHQ_coqpUXqx-qqZ5G4I5aUg&oe=62ECCE6A`

function changeBackgroundBD(check) {
    check 
        ? document.body.style.backgroundImage = `url(${urlSTBackgroundImg})` 
        : document.body.style.backgroundImage = `url(${urlBackgroundImg})` 
    
    document.body.style.backgroundPosition = 'center'
}
///////////////////////
//////// Audio 
// audio dismiss btn
var getBtnDismiss = document.querySelector('.btn-dismiss-play')
var getAudioDismiss= document.querySelector('#myAudio-message-exit')
getBtnDismiss?.addEventListener('click', playAudioDismiss)
function playAudioDismiss() {
    getAudioDismiss.play()
}

// audio confirm btn
var getAudioClick = document.querySelector('#myAudio-message-appear')
function playAudioClick(){
    getAudioClick.play()
}

// audio accept play next game
var getAudioConfirm = document.querySelector('#myAudio-accept-quiz')
function playAudioConfirm(){
    getAudioConfirm.play()
}


//reload page 
function reloadPage() {
    location.reload()
}

