const links = document.querySelectorAll('.link__item');

links.forEach( (link) => {
    link.onclick = (event) => {
        event.currentTarget.querySelector('a').click();
    }
});