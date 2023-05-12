const cost = document.querySelector('.total-cost');

const ACTION = {
    PLUS: 'plus',
    MINUSE: 'minuse'
}

const setTotalPrice = (value) => {
    cost.textContent = `${value} $`;
    cost.dataset.value = value;
}

function init() {
    const elements = document.querySelectorAll('.container');
    
    let totalCost = 0;
    elements.forEach((elem) => {
        totalCost += Number(elem.querySelector('.container__input').value) * Number(elem.querySelector('.container__input').dataset.price);
    });
    setTotalPrice(totalCost);
}



const calc = document.getElementById('calcul');

calc.addEventListener('click', (e)=>{
    if(e.target.classList.contains('container__button-minuse')){
        console.log('Минус');
        const input = e.target.closest('.container').querySelector('.container__input')
        if(Number(input.value) !== 0){
            calculateSeparateAnswee(e.target.closest('.container'), ACTION.MINUSE);
        }
    }
    if (e.target.classList.contains('container__button-plus')) {
        console.log('Плюс');
        calculateSeparateAnswee(e.target.closest('.container'), ACTION.PLUS)
    }
});

init();