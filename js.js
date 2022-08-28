var length = prompt('Длина участка в мм?', 100);


function rigIntervalFunc(length) {
	for (let rigInterval = 3; rigInterval < 13; rigInterval++) {
		let roundRigDistance  = Math.round (length/rigInterval);
		if (roundRigDistance>96 && roundRigDistance<113) {
			return rigInterval;			
		}
}
	
}

let rigInterval = rigIntervalFunc(length);// Получили количество промежутков между ригелями
let rigNumber = rigInterval - 1; // А это количество ригелей

function rigDistance(length, rigInterval) {
	let clearLength = length - (16*(rigInterval-1));
	let distance =clearLength/rigInterval;
	return distance;
}

let distance = Math.round(rigDistance(length, rigInterval)); // Расстояние между ригелями, не по центру, между ними. 

function  rigLayout(distance, rigNumber, length) {
	/* функция для вычисления разметки ригелей 
	distance - растояние между ригелями
	rugNumber - количество ригелей
	
	
	*/
	const rigDiam = 16; // диаметр ригеля
	let rigLayoutText = "";
	rigLayoutText += "1 - " + (distance/10) + " cм <br>"
	let disPlusDiam = distance + 16;
	let lengthSum = 0;
	for ( let i = 1; i<10; i++) {
		if (lengthSum < length) {
			lengthSum = (i * disPlusDiam + distance)/10;
			let rigPlace = i+1;
			rigLayoutText += rigPlace + " - " + lengthSum + " cм <br>"
		}
		else break;

	}





	return rigLayoutText;

	
}


let rigLayoutText = rigLayout(distance, rigNumber,length);
console.log(rigLayoutText)

var text1 = "Длина участка " + length + " мм <br> "

var text2 = "Количество ригелей " + rigNumber + " штук"



var textOutput = text1 + text2
document.getElementById("length").innerHTML = textOutput;
document.getElementById("layout").innerHTML = rigLayoutText;

