const form = document.querySelector('#form');
const input = document.querySelector('#input');
const dpl_container = document.querySelector('#duplicate__container');
const dpl_content = document.querySelector('#duplicate__content');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    console.log(input.value);

    input.value = '';
    setDuplicate(input.value);
});

input.addEventListener('input', () => {
    setDuplicate(input.value);
});

function setDuplicate(val) {

    dpl_content.textContent = val;

    if (!val || val.length == 0) {
        dpl_container.style.display = 'none';
    } else {
        dpl_container.style.display = 'block';
    }
}

