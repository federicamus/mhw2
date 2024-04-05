function resetImage() {
    const old_img = event.currentTarget;
    old_img.src = 'https://iperborea.com/files/website/HeaderHomepage/iperborea-template-hp-desktop_kjc6Fhy.jpg';
}

function changeImage() {
    const new_main_img = event.currentTarget;
    new_main_img.src = 'https://iperborea.com/files/website/HeaderHomepage/iperborea-template-hp-desktop_v6CSXys.jpg';
    new_main_img.addEventListener('mouseout', resetImage);
}

const main_img = document.querySelector(".main-img");
main_img.addEventListener('mouseover', changeImage);


function onClickTurnRight() {
    const tabs = document.querySelectorAll('.temi-tab');

    for(const tab of tabs) {
        const index = parseInt(tab.dataset.index);

        if(index === 0) {
            tab.classList.add('hidden');
        }
        else if(index === 1) {
          tab.classList.remove('hidden');
        }
    }
}

const turnright_buttons = document.querySelectorAll('.turn-right');
for (const turnright_button of turnright_buttons) {
    turnright_button.addEventListener('click', onClickTurnRight);
}

function onClickTurnLeft() {
    const tabs = document.querySelectorAll('.temi-tab');

    for(const tab of tabs) {
        const index = parseInt(tab.dataset.index);

        if(index === 1) {
            tab.classList.add('hidden');
        }
        else if(index === 0) {
          tab.classList.remove('hidden');
        }
    }
}

const turnleft_buttons = document.querySelectorAll('.turn-left');
for (const turnleft_button of turnleft_buttons) {
    turnleft_button.addEventListener('click', onClickTurnLeft);
}

function onClickNascondi() {
    const nascondi_button = event.currentTarget;
    const news_testo = document.querySelector('.news-leggi-testo');
    const news_leggi = document.querySelector('.news-leggi');

    nascondi_button.classList.add('hidden');
    news_testo.classList.add('hidden');
    news_leggi.classList.remove('hidden');
}

function onClickLeggi() {
    const news_leggi = event.currentTarget;
    const news_testo = document.querySelector('.news-leggi-testo');
    const nascondi_button = document.querySelector('.nascondi-news');

    news_leggi.classList.add('hidden');
    news_testo.classList.remove('hidden');
    nascondi_button.classList.remove('hidden');

    nascondi_button.addEventListener('click', onClickNascondi);
}

const read_button = document.querySelector('.news-leggi');
read_button.addEventListener('click', onClickLeggi);

const ricezione_iscr = document.createElement('h1');
ricezione_iscr.textContent = 'CONGRATULAZIONI, SEI UFFICIALMENTE ISCRITTO ALLA NOSTRA NEWSLETTER!';
const exit = document.createElement('button');
exit.textContent = 'torna nella homepage';

function onClickExit() {
    const iscrizione_form = document.querySelector('.newsletter-iscrizione');
    const iscrizione_text = document.querySelector('.newsletter-iscrizione div');

    iscrizione_form.classList.add('hidden');
    iscrizione_form.removeChild(ricezione_iscr);
    iscrizione_form.removeChild(exit);
    iscrizione_text.classList.remove('hidden');
}

function onClickIscrizione() {
    const iscrizione_form = document.querySelector('.newsletter-iscrizione');
    const iscrizione_text = document.querySelector('.newsletter-iscrizione div');

    iscrizione_text.classList.add('hidden');
    iscrizione_form.appendChild(ricezione_iscr);
    iscrizione_form.appendChild(exit);

    exit.addEventListener('click', onClickExit);
}

function onClickNewsletter() {
    const iscrizione_form = document.querySelector('.newsletter-iscrizione');
    const iscriviti_button = document.querySelector('.iscriviti');
    const x = document.querySelector('.esci-newsletter');

    iscrizione_form.classList.remove('hidden');

    x.addEventListener('click', onClickExit);
    iscriviti_button.addEventListener('click', onClickIscrizione);
}

const newsletter_button = document.querySelector('.newsletter-link');
newsletter_button.addEventListener('click', onClickNewsletter);