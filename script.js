const stands = {
	photos: [
		'assets/jpg/photo1.jpg',
		'assets/jpg/photo2.jpg',
		'assets/jpg/photo3.jpg',
		'assets/jpg/photo4.jpg',
		'assets/jpg/photo5.jpg',
		'assets/jpg/photo6.jpg'
  ],
  jewerly:  [
    'assets/jpg/card1.jpg',
		'assets/jpg/card2.jpg',
		'assets/jpg/card3.jpg',
		'assets/jpg/card4.jpg',
		'assets/jpg/card5.jpg',
		'assets/jpg/card6.jpg',
    
  ],
  candles:  [
    'assets/jpg/свечи6-1.jpg',
    'assets/jpg/свечи2.jpg',
    'assets/jpg/свечи3.jpg',
		'assets/jpg/свечи4.jpg',
		'assets/jpg/свечи5.jpg',
		'assets/jpg/свечи1.jpg',
  ],
  
}

function changeImage (event) {
  const stand = event.target.dataset.stand;
  const standImages = document.querySelector('.availability').children;
  Array.from(standImages).forEach((image, index) => image.src = stands[stand][index]);
  
  
  const staticButtons = document.querySelector('.blueBlock').children;
  Array.from(staticButtons).forEach(staticButton => {
    if (staticButton.dataset.stand == stand) {
      staticButton.classList.add('button_color');
    } else {
      staticButton.classList.remove('button_color');
    };
  });
  
};

function buttonClick (event) {
  if (event.target.classList.contains('staticButton')) {
    changeImage (event);
  };
};

document.querySelector('.blueBlock').addEventListener('click', buttonClick);
