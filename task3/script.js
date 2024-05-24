const lamp = document.querySelector('.one__light__lamp');
const lampOff = document.querySelector('.one__light__off');

const colorClassNames = ['__red', '__yellow', '__green'];

lamp.onclick = () => {
    changeColor();
};

lampOff.onclick = () => {
    switchOff(lamp);
};

function changeColor() {
    const color = getCurrentColor(lamp);
    setColor(lamp, getNextColor(color));
}

function getCurrentColor(elem) {
    for (i = 0; i < colorClassNames.length; i++) {
        if (elem.classList.contains(colorClassNames[i])) {
            return colorClassNames[i];
        }
    }

    return null;
}

function getNextColor(className) {
    let idx = colorClassNames.indexOf(className);
    if (idx >= 0) {
        return colorClassNames[++idx % colorClassNames.length];
    } else {
        return '__red';
    }
}

function switchOff(elem) {
    colorClassNames.forEach((color)=> {
        elem.classList.remove(color);
    });
}

function setColor(elem, colorClass) {
    switchOff(elem);

    elem.classList.add(colorClass);
}


