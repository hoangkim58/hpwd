 
document.addEventListener('DOMContentLoaded', function () {   

    
    var getE1 = document.getElementById("root")
    var getFirstSay = document.querySelector(".screen")
    var btn1 =  document.querySelector(".click-me")  
    var getExplain = document.querySelector('.explain') 
    var icon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-laughing" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M12.331 9.5a1 1 0 0 1 0 1A4.998 4.998 0 0 1 8 13a4.998 4.998 0 0 1-4.33-2.5A1 1 0 0 1 4.535 9h6.93a1 1 0 0 1 .866.5zM7 6.5c0 .828-.448 0-1 0s-1 .828-1 0S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 0-1 0s-1 .828-1 0S9.448 5 10 5s1 .672 1 1.5z"/>
                </svg>`
    var passwordContainer = document.querySelector('.get-password__container')
    var img = document.querySelector(".img-main")

    //

    getExplain.innerHTML = icon


    //handleEvent btn-click_me 1
    btn1.addEventListener('click', func1) 
    function func1(){
    
        var str = "Hôm nay là 8/3"
       
        getFirstSay.innerHTML = str
        slideShowMove(getScreenContainer,0)
        btn1.classList.remove('b1') 
        btn1.classList.add('b2') 
        btn1.innerHTML = 'Click Again!!!' 

        hiddenElement(passwordContainer)
        hiddenElement(getTitleSupport)

        
        //event 2
        if(btn2 != 0){
            var btn2 =  document.querySelector(".b2") 

            btn2.addEventListener('click', func2)
            function func2(){
                var str1 = "Chúc bạn luôn vui vẻ, hạnh phúc và thành công trong cuộc sống!!!" 
                const p = document.createElement('p') 

                
                getExplain.innerHTML = ''
                document.querySelector('.m-t').setAttribute('style','margin: 0px')
                getExplain.classList.add('count-down')
                img.classList.remove("noneDisplay")
                img.classList.add("img")  
                img.setAttribute('style',`background-image:   url('${getImgIdentifier}')`)
                
                //set time out show flowers
                const setTimeCountDown = setInterval(yF ,1000) 
                setTimeCountDown;
                let y=3;
                var strHPWD = 'Happy Women\'s Day!!!'

                getExplain.innerHTML = `3`
                function yF(){
                    if( y <= 3 ) y--;
                    if(y===0){

                        getExplain.remove()
                        getFirstSay.innerHTML = strHPWD
                        funcFlower()
                        clearInterval(setTimeCountDown) 
                        p.innerHTML = str1

                        //audio
                        var audioMessageflowers = document.getElementById("myAudio-flowers"); 
                        audioMessageflowers.play()
                        
                        clearInterval(setTimeCountDown)
                    } 
                    getExplain.innerHTML = y
                }  
                                
                function funcFlower() { 
                    // img.setAttribute('style',`background-image: url('./hpwd/asset/img/Removal-966.png')`) 
                    var urlOfFlowers = `url('./asset/img/Removal-966.png')`
                    var getBackgrounfImg = img.style.backgroundImage
                    var imgFinal = urlOfFlowers.concat(',',`${getBackgrounfImg}`)
                    img.setAttribute('style',`background-image: ${imgFinal}`) 

                } 

                const setMessageTime = setInterval(funcMess, 5500)
                function funcMess(){
                    var audioMessage = document.getElementById("myAudio"); 
                    getNumCircle.removeAttribute('style')
                    audioMessage.play()
                    
                    //get message box
                    // getMessbox.removeAttribute('style')
                    getMessbox.setAttribute('style','right: 0px')

                    getHeaderInfo.setAttribute('data-toggle','modal')

                    handleClearMessage()

                    //clear interval
                    clearInterval(setMessageTime)
                }

                document.body.appendChild(p)  


                p.style.cssText = ` color: #1F618D; 
                                    margin: 44px 10px;
                                    font-size: 26px; 
                                    font-weight:700;  
                                    text-shadow: 0.2px 0px white;    
                                `
                p.setAttribute('id','p-js')
                getFirstSay.innerHTML = str
                getFirstSay.setAttribute('style','font-size: 28px')
                btn1.remove()

                //get btn confirm Value

                getBtnConfirm.addEventListener('click', handleBtnConfirm)

            }
        }
    }
////////

    // message new game

    var getHeaderInfo = document.querySelector('.header-info')


    // get message box 
    var getMessbox = document.querySelector('.message-container')
    // hide message box
    // function hideMessageBox(){
    //     getMessbox.setAttribute('style','right: -220px') 
    // }
    // hideMessageBox()

    //hidden circle message
    var getNumCircle = document.querySelector('.num-message')
    getNumCircle.setAttribute('style','display: none')


    function handleClearMessage(){
        getHeaderInfo.addEventListener('click', handleMessage)
    }
 
    function handleMessage(){
        
        // play audio confirm
        playAudioClick()

        //clear display Box
        getNumCircle.setAttribute('style','display: none')
        getMessbox.setAttribute('style','display: none')
        
        //
    }
    
    //
    var getBtnConfirm = document.querySelector('.btn-accept-play')
    var getMessageBoxConfirm = document.querySelector('.message__box-confirm')

    // getBtnConfirm.addEventListener('click', handleBtnConfirm)
    function handleBtnConfirm() {

        var getGreeting = document.querySelector('#p-js')

        playAudioConfirm()
        displayTimeUntilBD(strOfValueNumDayBD)
        hiddenElement(getGreeting)

        getBtnConfirm.setAttribute('data-dismiss','modal') 
        getTitleSupport.setAttribute('style','display: block')
        
        getE1.classList.add('m-t')
        
        img.remove()
        getMessageBoxConfirm.remove()
        // on/off button
        hideFirstBtn() 

        getTitleLink.setAttribute('style','display: block')

        //
        document.querySelector('.title-rule').attributes[1].value = true
        // render title of game
        getFirstSay.innerHTML = 'Remaining...'
        //
        getTitleLink.innerHTML = 'Use for another day?' 
        // background image 
        changeBackgroundBD()
    } 
    
})


//hide getTitleLink
getTitleLink.style.display = 'none'


//on/off button[2]
var hideSecondBtn = document.querySelector('.get-value-time')
hideSecondBtn.setAttribute('style','display: none')

