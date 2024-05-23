const links = document.querySelectorAll('#action');

links.forEach( (link) => {
    link.onclick = (event) => {
        const kind = event.currentTarget.getAttribute('data-kind');
        switch (kind) {
            case 'consoleLog': 
                console.log('Пример сообщения в консоли');    
                break;
            case 'alert': 
                alert('Пример сообщения');    
                break;
            case 'prompt': 
                const answer = prompt('Введите значение', 'что угодно');    
                if (answer) {
                    alert(`Введено значение: '${answer}'`);
                }
                break;
            case 'confirm': 
                const res = confirm('Подтвердите выполнение операции?');    
                alert(res ? 'Подтверждено' : 'Нет подтверждения');
                break;
            default:
                alert(`Неизвестное значение: '${kind}'`);
                break;
        }
    }
});