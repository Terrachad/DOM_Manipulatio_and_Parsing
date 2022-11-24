//DOM Manipulation 

//Event Listeners

// element.addEventListener("click", function, bool);
// bool is false by default

const buttonTwo = document.querySelector('.btn-2');
console.log(buttonTwo);

function alertOnBtn (){
    alert('I also love javascript');
}

buttonTwo.addEventListener("click", alertOnBtn);


//Mouse over

const newBackgroundColor = document.querySelector('.box-3');

function changeBG(){
    newBackgroundColor.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
}

function changeBGout(){
    newBackgroundColor.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
}

newBackgroundColor.addEventListener('mouseover', changeBG);
newBackgroundColor.addEventListener('mouseout', changeBGout);
