/* Create new element */

function createTour(elem, elem_image, elem_caption, elem_days, elem_moves, elem_countries,elem_towns, elem_price, elem_button){
	let parent = document.querySelector('.list_tours');	
	let tour_block = document.createElement('div');
	tour_block.classList.add('tour_block');
	parent.appendChild(tour_block);
	
	/* Add image */
    let tour_image = document.createElement('img');
    tour_image.src = elem_image;
    tour_block.appendChild(tour_image);

	/* Add caption */
	let tour_caption = document.createElement('div');
	tour_caption.classList.add('tour_caption');
    tour_caption.innerHTML = elem_caption;
	tour_block.appendChild(tour_caption);


	/* Add days */
	let tour_days = document.createElement('div');
	tour_days.classList.add('tour_days');
    tour_days.innerHTML = 'Days: '+elem_days;
	tour_block.appendChild(tour_days);

	/* Add moves */
	let tour_moves = document.createElement('div');
	tour_moves.classList.add('tour_moves');
    tour_moves.innerHTML = 'Night moves: '+elem_moves;
	tour_block.appendChild(tour_moves);

	/* Add countries */
	let tour_countries = document.createElement('div');
	tour_countries.classList.add('tour_countries');
    tour_countries.innerHTML = 'Countries: '+elem_countries;
	tour_block.appendChild(tour_countries);

	/* Add towns */
	let tour_towns = document.createElement('div');
	tour_towns.classList.add('tour_towns');
    tour_towns.innerHTML = 'Towns: '+elem_towns;
	tour_block.appendChild(tour_towns);

	/* Add price */
	let tour_price = document.createElement('div');
	tour_price.classList.add('tour_price');
    tour_price.innerHTML = 'Price: '+elem_price;
	tour_block.appendChild(tour_price);

	/* Add button */
	let tour_btn= document.createElement('button');
    tour_btn.classList.add('tour_btn');
	tour_btn.innerHTML = 'Order tour';
	tour_block.appendChild(tour_btn);


}


for(let tour of tours){
	createTour(tour, tour.image, tour.caption, tour.days, tour.moves, tour.countries, tour.towns, tour.price, tour.button)
}