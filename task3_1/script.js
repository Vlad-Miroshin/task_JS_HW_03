const trafficLight = document.querySelector('.traffic__light');
const lamp__red = document.querySelector('#lamp__red');
const lamp__yellow = document.querySelector('#lamp__yellow');
const lamp__green = document.querySelector('#lamp__green');
const trafficLightOff = document.querySelector('.traffic__light__off');

const lamps = [lamp__red, lamp__yellow, lamp__green];
const states = ['__red', '__yellow', '__green'];

document.addEventListener("DOMContentLoaded", ()=> {
    showCurrentState();
});


trafficLight.onclick = () => {
    changeSate();
};

trafficLightOff.onclick = () => {
    switchOff();
};

function showCurrentState() {
    setState(trafficLight, getState(trafficLight));
}

function changeSate() {
    const state = getState(trafficLight);
    setState(trafficLight, getNextState(state));
}

function getState(elem) {
    return elem.getAttribute('data-state');
}

function getNextState(state) {
    let idx = states.indexOf(state);
    if (idx >= 0) {
        return states[++idx % states.length];
    } else {
        return '__red';
    }
}

function switchOff() {
    lamps.forEach((lamp)=> {
        states.forEach((state) => {
            lamp.classList.remove(state);
        })
    });
}

function setState(elem, state) {
    elem.setAttribute('data-state', state);

    switchOff();

    const lamp = getLamp(state);
    if (lamp) {
        lamp.classList.add(state);
    }
}

function getLamp(state) {
    switch (state) {
        case '__red': return lamp__red;
        case '__yellow': return lamp__yellow;
        case '__green': return lamp__green;
        default: return null;
    }
}


