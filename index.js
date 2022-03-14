

const url = 'https://type.fit/api/quotes';

const content = document.querySelector('.content');
const btn = document.querySelector('.main-button');

const switchLang = document.querySelector('.switch-lang');
const en = document.querySelector('.en');
const ru = document.querySelector('.ru');


let title = document.querySelector('.title');
let mainButton = document.querySelector('.main-button');



getDataEN();
switchLang.addEventListener('click', getTranslate);
mainButton.addEventListener('click', changePrediction);



// english jokes  start

async function getDataEN() {

    const res = await fetch(url);
    const data = await res.json();

    let item = randomData(0, 1641);
    content.textContent = data[item].text;
}


function randomData(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}


// english jokes  end


// russian jokes  start

async function getDataRU() {  

    const quotes = 'data.json';
    const res = await fetch(quotes);
    const data = await res.json(); 

    let item = randomData(0, 100);
    content.textContent = data[item].text;
  }
  
// russian jokes  end





// lang start

function getTranslate(lang) {
    if (lang.target.classList.contains('ru') ){

        getDataRU();
        // меняется цвет кнопки при нажатии
        en.classList.remove('lang-btn-active');
        ru.classList.add('lang-btn-active');  

        // меняется язык
        title.textContent = 'Твое предсказание на сегодня:';
        mainButton.textContent = 'Другое предсказание';

    }

    else if (lang.target.classList.contains('en') ){

        getDataEN();
      // меняется цвет кнопки при нажатии
      ru.classList.remove('lang-btn-active');
      en.classList.add('lang-btn-active'); 

     // меняется язык
      title.textContent = 'Your daily prediction:';
      mainButton.textContent = 'change prediction';

  }
};


function changePrediction() {
    if (content.classList.contains('rotate') ){
        content.classList.remove('rotate');
    }
    else {
        content.classList.add('rotate');
    };

    if (ru.classList.contains('lang-btn-active') ){
        getDataRU();
    }
    else if (en.classList.contains('lang-btn-active') ){
        getDataEN();
    };
    
};

// lang end