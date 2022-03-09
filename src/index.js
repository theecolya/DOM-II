import './less/index.less'

// Your code goes here!
const funBusText = document.querySelector('.logo-heading')
const randomCommas = function(e) {
    const textArr = funBusText.textContent.split('');
    funBusText.textContent = textArr;
    if(textArr.length > 47) {
        funBusText.textContent = 'Fun Bus'
    }
}
funBusText.addEventListener('click', randomCommas)

const colors = ['red','orange','yellow','green','blue','purple']
const colorGen = function() {
    const colorPick = Math.floor(Math.random() * 7);
    return colors[colorPick]
}

const headers = document.querySelector('h2')
const rainbowText = function() {
    if(headers.classList.length < 1) {headers.classList.add(colorGen())} else {headers.classList.remove()}
}

headers.addEventListener('mouseover', rainbowText())
