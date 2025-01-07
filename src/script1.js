/* Create new element */

function createTour(elem, elem_image, elem_caption, elem_days, elem_moves, elem_countries,elem_towns, elem_price, elem_button){
	let parent = document.querySelector('.block_tours');	
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


let btn_load=document.getElementById('btn_load');
let for_button=document.querySelector('.for_button')
let main2=document.querySelector('.main2');
let block1=document.querySelector('.block1');
let block_tours=document.querySelector('.block_tours');
btn_load.addEventListener('click', loadTours);
function loadTours(){
	let height1 = main2.offsetHeight;
    let newHeight1 = height1 + 540;
    main2.style.height = newHeight1+ 'px';

	let height2 = block1.offsetHeight;
    let newHeight2 = height2 + 540;
    block1.style.height = newHeight2 + 'px';

	let height3 = block_tours.offsetHeight;
    let newHeight3 = height3 + 541;
    block_tours.style.height = newHeight3 + 'px';

	let pr_top = for_button.offsetTop;
	let new_top = pr_top + 540;
	for_button.style.top = new_top + 'px';

	window.scrollBy(0, 542);
	let newHeight4=block1.offsetHeight;
	console.log(newHeight4);
	if (newHeight4 > 12180)
	{
		btn_load.disabled=true;
		btn_load.style.backgroundColor='gray';
	}

}