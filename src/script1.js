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

let tours_country=document.querySelectorAll('.tour_country');
for(let i=0; i< tours_country.length; i++){
	tours_country[i].addEventListener('click',showTours);
	}

function showTours(event){
	let country=event.target.innerHTML;
	console.log(country);
	let tours=document.querySelectorAll('.tour_block');
	let regex = new RegExp(country);
	for(let tour of tours){
		let info_countries=tour.children[4].innerHTML;
		if (regex.test(info_countries)){
			tour.style.display='block';
			main2.style.height='auto';
			block1.style.height='auto';
			block_tours.style.marginBottom='30px';
			block_tours.style.height='auto';
			btn_load.style.visibility='hidden';
		}
		else{
			tour.style.display='none';
		}
	}
}

let all_coutries=document.querySelector('.all_countries');
all_coutries.addEventListener('click', showAllTours);
function showAllTours(){
	let tours=document.querySelectorAll('.tour_block');
	for(let tour of tours){
		main2.style.height='2500px';
		block1.style.height='1720px';
		block_tours.style.height='1650px';
		btn_load.style.visibility='visible';
		tour.style.display='block';
	}
}

let tours_day=document.querySelectorAll('.tour_day');
for(let i=0; i< tours_day.length; i++){
	tours_day[i].addEventListener('click',showToursDays);
}



	function showToursDays(event){
		let day=event.target.innerHTML;
		let number_day=day.substr(0,1)
		console.log(number_day);
		let tours=document.querySelectorAll('.tour_block');
		let regex = new RegExp(number_day);
		for(let tour of tours){
			let info_days=tour.children[2].innerHTML;
			if (regex.test(info_days)){
				tour.style.display='block';
			}else{
				tour.style.display='none';
			}
		}
	}



	let tours_move=document.querySelectorAll('.tour_move');
	for(let i=0; i< tours_move.length; i++){
		tours_move[i].addEventListener('click',showToursMoves);
	}
	
	
	
		function showToursMoves(event){
			let move=event.target.innerHTML;
			let number_move=move.substr(0,1)
			let tours=document.querySelectorAll('.tour_block');
			let regex = new RegExp(number_move);
			for(let tour of tours){
				let info_moves=tour.children[3].innerHTML;
				if (regex.test(info_moves)){
					tour.style.display='block';
				}else{
					tour.style.display='none';
				}
			}
		}	