document.addEventListener('DOMContentLoaded', function () {


let button = document.querySelector('.btn');
let messageArea = document.querySelector('.message-area');
let answer = document.querySelector('.answer');
let answerBoxText = answer.querySelector('.text');



function takeMessage(e) {
    e.preventDefault();

//    Answer box
    const div = document.createElement('div');
    div.classList.add('answer-box');

    let data = document.createElement('div');
    data.setAttribute('class', 'data');


    const currentDate = new Date();

    function leadingZero(i) {
        return (i < 10) ? '0' + i : i;
    }

    let actuallyTime = currentDate.getDate() + '-' + (currentDate.getMonth() + 1) + '-' + currentDate.getFullYear() + ' godz: ' + leadingZero(currentDate.getHours()) + ':' + leadingZero(currentDate.getMinutes());

    data.innerHTML = actuallyTime;

//    Text
    
    let text = document.createElement('div');
    text.setAttribute('class', 'text')

    text.innerHTML = messageArea.value;
    
//    cross

    let cross = document.createElement('div');
    cross.setAttribute('class', 'cross')

    const crossMark = '<i class="fa fa-times"></i>'

    cross.innerHTML = crossMark;

    div.appendChild(data);
    div.appendChild(text);
    div.appendChild(cross)
    answer.appendChild(div);
    
    messageArea.value = ''
    
    
//    Remove box
    
    function removeBox(e){    
    div.style.setProperty('display', 'none');
    }
    
    cross.addEventListener('click', removeBox)

}

    
    button.addEventListener('click', takeMessage);

});

