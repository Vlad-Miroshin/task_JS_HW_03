const a = document.querySelector('#anchor');

a.onclick = (event) => {
    event.preventDefault();

    const answer = prompt('Новый текст ссылки', 'Изменённый текст ссылки');

    if (answer) {
        a.textContent = answer;
    }
};



