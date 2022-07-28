var monthLetters = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                    'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

function handleCountDownToDate() {
    
    handleValueTime()
    displayTimeUntilBD()
    
    getDateMonth = loadStuff()

    let i = getDateMonth.month - 1

    if(getDateMonth !== null) {
        
        getFirstSay.innerHTML = `${monthLetters[i]} ${getDateMonth.day} is must wait:`
    }

}