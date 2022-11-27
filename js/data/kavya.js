function getRandomNumber(max){
	var randomNumber = max * Math.random();
	randomNumber = parseInt(randomNumber);
	return randomNumber;
}


function problem051(){
	var inputData = [{
		'distance': 100,
		'time': 50
		},
		{
		'distance': 80,
		'time': 20
		},
		{
		'distance': 90,
		'time': 30
		},
		{
		'distance': 70,
		'time': 10
		},
		{
		'distance': 50,
		'time': 25
		}],
		randomIndex = getRandomNumber(inputData.length),
		distance= inputData[randomIndex]['distance'],
		time = inputData[randomIndex]['time'],
		speed,
		question = {};

	distance=parseInt(distance);
	time=parseInt(time);
	speed=(distance/time);

	question = {
		'type': 'single',
		'id': '051',
		'question': 'A car travels a distance of'+" "+ + distance + 'km in'+" "+ + time + 'hours. What is its speed in km/hr?',
		'options': {
			'A': speed,
			'B': speed - parseInt(Math.random()*10),
			'C': speed + parseInt(Math.random()*10),
			'D': speed - parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '051'
	}
	
	return question;
	
}

function problem052(){
	var inputData = [{
		'streamSpeed': 10,
		'boatSpeed': 25
		},
		{
		'streamSpeed': 5,
		'boatSpeed': 15
		},
		{
		'streamSpeed': 19,
		'boatSpeed': 35
		},
		{
		'streamSpeed': 7,
		'boatSpeed': 10
		},
		{
		'streamSpeed': 2,
		'boatSpeed': 5
		}],
		randomIndex = getRandomNumber(inputData.length),
		streamSpeed= inputData[randomIndex]['streamSpeed'],
		boatSpeed = inputData[randomIndex]['boatSpeed'],
		upStream,
		question = {};

	streamSpeed=parseInt(streamSpeed);
	boatSpeed=parseInt(boatSpeed);
	upStream=(boatSpeed - streamSpeed);

	question = {
		'type': 'single',
		'id': '052',
		'question': 'The speed of boat in still water is' +" "+ + boatSpeed + 'kmph. The speed of current is'+" "+ + streamSpeed + 'kmph. What is its Up stream speed in kmph?',
		'options': {
			'A': upStream + parseInt(Math.random()*10),
			'B': upStream - parseInt(Math.random()*10),
			'C': upStream + parseInt(Math.random()*10),
			'D': upStream
		},
		'answer': 'D',
		'author-id': '052'
	}
	
	return question;
	
	
}

function problem053(){
	var inputData = [{
		'sellingPrice': 8400,
		'profit': 12
		},
		{
		'sellingPrice': 800,
		'profit': 25
		},
		{
		'sellingPrice': 1925,
		'profit': 25
		},
		{
		'sellingPrice': 198,
		'profitprofit': 32
		},
		{
		'sellingPrice': 625,
		'profit': 25
		}],
		randomIndex = getRandomNumber(inputData.length),
		sellingPrice= inputData[randomIndex]['sellingPrice'],
		profit = inputData[randomIndex]['profit'],
		costPrice,
		question = {};

	sellingPrice=parseInt(sellingPrice);
	profit=parseInt(profit);
	costPrice=(100/(100+profit)*sellingPrice);

	question = {
		'type': 'single',
		'id': '053',
		'question': 'Sam brought cell phone from a shop. If he sells at Rs' +" "+ + sellingPrice +" "+'and earns a profit of'+" "+ + profit  +'%. Find the cost price of the cell phone.',
		'options': {
			'A': costPrice + parseInt(Math.random()*10),
			'B': costPrice,
			'C': costPrice + parseInt(Math.random()*10),
			'D': costPrice - parseInt(Math.random()*10)
		},
		'answer': 'B',
		'author-id': '053'
	}
	
	return question;
	
	
	
}