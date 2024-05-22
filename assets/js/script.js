const items = document.querySelectorAll('.link__item');

items.forEach( (item) => {
    item.onclick = (event) => {
        event.target.querySelector('a').click();
    }
});