const switchContainerList = document.querySelectorAll(".switch-container");
for(let i = 0; i < switchContainerList.length; i++) {
  const switchContainer = switchContainerList[i];
  const switchOnButton = switchContainer.querySelector(".switch-on");
  const switchOffButton = switchContainer.querySelector(".switch-off");
  switchOffButton.classList.add("clicked");
  switchOffButton.onclick = function() {
    switchOffButton.classList.add("clicked");
    switchOnButton.classList.remove("clicked");
  }
  switchOnButton.onclick = function() {
    switchOnButton.classList.add("clicked");
    switchOffButton.classList.remove("clicked");
  }
}
const switchContainerOnList = document.querySelectorAll(".switch-container-ON");
for(let i = 0; i < switchContainerOnList.length; i++) {
const switchContainer = switchContainerOnList[i];
const switchOnButton = switchContainer.querySelector(".switch-on");
const switchOffButton = switchContainer.querySelector(".switch-off");
switchOnButton.classList.add("clicked");
switchOffButton.onclick = function() {
  switchOffButton.classList.add("clicked");
  switchOnButton.classList.remove("clicked");
}
switchOnButton.onclick = function() {
  switchOnButton.classList.add("clicked");
  switchOffButton.classList.remove("clicked");
}
}


const selectContainerList = document.querySelectorAll(".select-container");
for(let i = 0; i < selectContainerList.length; i++) {
  const selectContainer = selectContainerList[i];
  const select1 = selectContainer.querySelector(".select-1");
  const select2 = selectContainer.querySelector(".select-2");
  const select3 = selectContainer.querySelector(".select-3");
  select1.classList.add("clicked");
  select1.onclick = function() {
    select1.classList.add("clicked");
    select2.classList.remove("clicked");
    select3.classList.remove("clicked"); 
  }
  select2.onclick = function() {
    select1.classList.remove("clicked");
    select2.classList.add("clicked");
    select3.classList.remove("clicked"); 
  }
  select3.onclick = function() {
    select1.classList.remove("clicked");
    select2.classList.remove("clicked");
    select3.classList.add("clicked"); 
  }
}

const switchUp = document.querySelector('.switch-up');
const switchDown = document.querySelector('.switch-down');
const switchContainerSP = document.querySelector('.switch-container-SP');

function setColorYellow() {
switchContainerSP.style.backgroundColor = 'yellow';
}

function setColorWhite() {
switchContainerSP.style.backgroundColor = 'white';
}

console.log(switchUp);
switchUp.addEventListener('mousedown', setColorYellow);
switchDown.addEventListener('mousedown', setColorYellow);

switchUp.addEventListener('mouseup', setColorWhite);
switchDown.addEventListener('mouseup', setColorWhite);

switchUp.addEventListener('mouseleave', setColorWhite);
switchDown.addEventListener('mouseleave', setColorWhite);


const circle = document.querySelector('.circle');

circle.addEventListener('mousedown', () => {
  circle.style.backgroundColor = 'yellow';
});
circle.addEventListener('mouseup', () => {
  circle.style.backgroundColor = 'white';
});
circle.addEventListener('mouseleave', () => {
  circle.style.backgroundColor = 'white';
});
