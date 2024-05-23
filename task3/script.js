const oneLight = document.querySelector('.one__light__switch');
const oneLightOff = document.querySelector('.one__light__switch__off');

const colorClassNames = ['__red', '__yellow', '__green'];

oneLight.onclick = () => {
    changeColor();
};

oneLightOff.onclick = () => {
    switchOff(oneLight);
};

function changeColor() {
    const currentColor = getCurrentColorClassName(oneLight);
    setColor(oneLight, getNextColor(currentColor));
}

function getCurrentColorClassName(elem) {
    for (i = 0; i < colorClassNames.length; i++) {
        if (elem.classList.contains(colorClassNames[i]))
            return colorClassNames[i];
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


