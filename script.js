const stands = {
	photos: [
		'assets/jpg/photo1.jpg',
		'assets/jpg/photo2.jpg',
		'assets/jpg/photo3.jpg',
		'assets/jpg/photo4.jpg',
		'assets/jpg/photo5.jpg',
		'assets/jpg/photo6.jpg'
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
