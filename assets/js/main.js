window.addEventListener('load', async () => {
    const getData = async () => {
        const response = await fetch('./assets/db.json');
        const data = await response.json();
        return data;
    }
    const { data } = await getData();
    
    const mainContainer = document.querySelector('.main-container');

    data.forEach(item => {
        const card = document.createElement('form');
        card.className = 'card';
        card.action = 'player.html';
        card.method = 'get';

        const hiddenInput = document.createElement('input');
        hiddenInput.type = 'hidden';
        hiddenInput.name = 'ID';
        hiddenInput.value = item.id;

        const button = document.createElement('button');
        button.className = 'card';

        const img = document.createElement('img');
        img.src = item.poster;
        img.alt = item.title;

        const title = document.createElement('p');
        title.textContent = item.title;

        button.appendChild(img);
        button.appendChild(title);
        card.appendChild(hiddenInput);
        card.appendChild(button);
        mainContainer.appendChild(card);
    });
});