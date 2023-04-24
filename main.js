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

function registerSwitchEvents(target) {
  function resetColor() {
    target.style.backgroundColor = 'white';
  }
  target.addEventListener("mousedown", () => {
    target.style.backgroundColor = 'yellow';
  });
  target.addEventListener("mouseup", resetColor);
  target.addEventListener("mouseleave", resetColor);
}
registerSwitchEvents(document.querySelector('.switch-up'));
registerSwitchEvents(document.querySelector('.switch-down'));

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


const button = document.querySelector(".select-container:last-of-type .select-3");
let isDisplayed = false;

button.addEventListener("click", () => {
  const elements = document.querySelectorAll(".panel-container3, .lever-container, .pedal-container, .save-settings");
  if (!isDisplayed) {
    elements.forEach(element => {
      element.style.display = "flex";
    });
    isDisplayed = true;
  } else {
    elements.forEach(element => {
      element.style.display = "none";
    });
    isDisplayed = false;
  }
});
