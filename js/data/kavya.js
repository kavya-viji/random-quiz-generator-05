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
		'question': 'Sam brought cell phone from a shop. If he sells at Rs' +" "+ + sellingPrice +" "+'and earns a profit of'+" "+ + profit  +'%. Find the cost price of the cell phone.?',
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

function problem054(){
	var inputData = [{
		'principal': 4500,
		'rateOfInterest': 4,
		'noOfYears': 6
		},
		{
		'principal': 5000,
		'rateOfInterest': 8,
			'noOfYears': 2
		},
		{
		'principal': 5000,
		'rateOfInterest': 4,
		'noOfYears': 6
		},
		{
		'principal': 7500,
		'rateOfInterest': 4,
		'noOfYears': 6
		},
		{
		'principal': 8000,
		'rateOfInterest': 4,
		'noOfYears': 6
		}],
		randomIndex = getRandomNumber(inputData.length),
		principal= inputData[randomIndex]['principal'],
		rateOfInterest = inputData[randomIndex]['rateOfInterest'],
		noOfYears = inputData[randomIndex]['noOfYears'],
		simpleInterest,
		question = {};

	principal=parseInt(principal);
	rateOfInterest=parseInt(rateOfInterest);
	noOfYears=parseInt(noOfYears);
	simpleInterest=(principal*rateOfInterest*noOfYears)/100;

	question = {
		'type': 'single',
		'id': '054',
		'question': 'Find the Simple Interest when Principal is' +" "+ + principal +" "+ ',Rate of Interest is' +" "+ + rateOfInterest  +'% per annum and Time is' +" "+ + noOfYears+ 'years.?',
		'options': {
			'A': simpleInterest + parseInt(Math.random()*10),
			'B': simpleInterest + parseInt(Math.random()*10),
			'C': simpleInterest,
			'D': simpleInterest - parseInt(Math.random()*10)
		},
		'answer': 'C',
		'author-id': '054'
	}
	
	return question;
		
}

function problem055(){
	var inputData = [{
		'principal': 12600,
		'rateOfInterest': 10,
		'noOfYears': 2
		},
		{
		'principal': 48000,
		'rateOfInterest': 8,
			'noOfYears': 1
		},
		{
		'principal': 8000,
		'rateOfInterest': 15,
			'noOfYears': 2
		},
		{
		'principal': 7500,
		'rateOfInterest': 4,
		'noOfYears': 6
		},
		{
		'principal': 8000,
		'rateOfInterest': 4,
		'noOfYears': 6
		}],
		randomIndex = getRandomNumber(inputData.length),
		principal= inputData[randomIndex]['principal'],
		rateOfInterest = inputData[randomIndex]['rateOfInterest'],
		noOfYears = inputData[randomIndex]['noOfYears'],
		amount,compoundInterest,
		question = {};

	principal = parseInt(principal);
	rateOfInterest = parseInt(rateOfInterest);
	noOfYears = parseInt(noOfYears);
	amount = principal*(1+(rateOfInterest/100))**noOfYears;
	compoundInterest = amount-principal

	question = {
		'type': 'single',
		'id': '055',
		'question': 'Find the Compound Interest on Rs' +" "+ + principal +" "+ 'for' +" "+ + noOfYears  +'years at' +" "+ + rateOfInterest+ '% per annum compounded annually.?',
		'options': {
			'A': compoundInterest + parseInt(Math.random()*10),
			'B': compoundInterest,
			'C': compoundInterest + parseInt(Math.random()*10),
			'D': compoundInterest - parseInt(Math.random()*10)
		},
		'answer': 'B',
		'author-id': '055'
	}
	
	return question;
		
}

function problem056(){
	var inputData = [{
		'boatSpeed': 13,
		'streamSpeed': 4,
		'distance': 68
		},
		{
		'boatSpeed': 13,
		'streamSpeed': 3,
		'distance': 85
		},
		{
		'boatSpeed': 15,
		'streamSpeed': 9,
			'distance': 100
		},
		{
		'boatSpeed': 10,
		'streamSpeed': 2,
		'distance': 120
		},
		{
		'boatSpeed': 12,
		'streamSpeed': 3,
		'distance': 150
		}],
		randomIndex = getRandomNumber(inputData.length),
		boatSpeed= inputData[randomIndex]['boatSpeed'],
		streamSpeed = inputData[randomIndex]['streamSpeed'],
		distance = inputData[randomIndex]['distance'],
		downStreamSpeed,time,
		question = {};

	boatSpeed = parseInt(boatSpeed);
	streamSpeed = parseInt(streamSpeed);
	distance = parseInt(distance);
	downStreamSpeed = boatSpeed + streamSpeed;
	time = distance/downStreamSpeed

	question = {
		'type': 'single',
		'id': '056',
		'question': 'A Boat can travel with a speed of ' +" "+ + boatSpeed +" "+ 'km/hr in still water. If the speed of stream is ' +" "+ + streamSpeed  +'km/hr. Find the time by the boat to go' +" "+ + distance+ 'km downstream ?',
		'options': {
			'A': time,
			'B': time + parseInt(Math.random()*10),
			'C': time + parseInt(Math.random()*10),
			'D': time - parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '056'
	}
	
	return question;
		
}

function problem057(){
	var inputData = [{
		'length': 24,
		'breadth': 16
		},
		{
		'length': 13,
		'breadth': 12
		},
		{
		'length': 43,
		'breadth': 22
		},
		{
		'length': 15,
		'breadth': 10
		},
		{
		'length': 50,
		'breadth': 23
		}],
		randomIndex = getRandomNumber(inputData.length),
		length = inputData[randomIndex]['length'],
		breadth = inputData[randomIndex]['breadth'],
		area,
		question = {};

	length = parseInt (length);
	breadth = parseInt (breadth);
	area = length*breadth;

	question = {
		'type': 'single',
		'id': '057',
		'question': 'Find the Area of Rectangle with length'+" "+ + length + 'cm and breadth' +" "+ + breadth + 'cm ?',
		'options': {
			'A': area + parseInt(Math.random()*10),
			'B': area - parseInt(Math.random()*10),
			'C': area,
			'D': area - parseInt(Math.random()*10)
		},
		'answer': 'C',
		'author-id': '057'
	}
	
	return question;	
}

function problem058(){
	var inputData = [{
		'sum': 550,
		'totalNumber': 10
		},
		{
		'sum': 415,
		'totalNumber': 5
		},
		{
		'sum': 880,
		'totalNumber': 8
		},
		{
		'sum': 84,
		'totalNumber': 6
		},
		{
		'sum': 50,
		'totalNumber': 5
		}],
		randomIndex = getRandomNumber(inputData.length),
		sum = inputData[randomIndex]['sum'],
		totalNumber = inputData[randomIndex]['totalNumber'],
		average,
		question = {};

	sum = parseInt (sum);
	totalNumber = parseInt (totalNumber);
	average = sum/totalNumber;

	question = {
		'type': 'single',
		'id': '058',
		'question': ' The sum of' +" " + totalNumber + " " + 'numbers is' +" " + + sum +'. Find their average number.?',
		'options': {
			'A': average + parseInt(Math.random()*10),
			'B': average - parseInt(Math.random()*10),
			'C': average - parseInt(Math.random()*10),
			'D': average 
		},
		'answer': 'D',
		'author-id': '058'
	}
	
	return question;	
}

function problem059(){
	var inputData = [{
		'capital1': 35000,
		'capital2': 25000,
		'capital3': 10000,
		'profit': 18000
		},
		{
		'capital1': 35000,
		'capital2': 25000,
		'capital3': 20000,
		'profit': 18000
		},
		{
		'capital1': 35000,
		'capital2': 25000,
		'capital3': 30000,
		'profit': 18000
		},
		{
		'capital1': 35000,
		'capital2': 25000,
		'capital3': 40000,
		'profit': 18000
		},
		{
		'capital1': 35000,
		'capital2': 25000,
		'capital3': 60000,
		'profit': 18000
		}],
		randomIndex = getRandomNumber(inputData.length),
		capital1 = inputData[randomIndex]['capital1'],
		capital2 = inputData[randomIndex]['capital2'],
		capital3 = inputData[randomIndex]['capital3'],
		profit = inputData[randomIndex]['profit'],
		shareA,
		question = {};

	capital1 = parseInt (capital1);
	capital2 = parseInt (capital2);
	capital3 = parseInt (capital3);
	shareA = (capital1*profit)/(capital1+capital2+capital3);

	question = {
		'type': 'single',
		'id': '059',
		'question': 'A, B and C are partners. They have invested Rs.' + capital1  +" " +',Rs.' + capital2  +" " +'and Rs.' + capital3 +" " + 'respectively for the same period. If the total profit is Rs.' + profit + ', find the share of A ?',
		'options': {
			'A': shareA + parseInt(Math.random()*10),
			'B': shareA,
			'C': shareA - parseInt(Math.random()*10),
			'D': shareA - parseInt(Math.random()*10)
		},
		'answer': 'B',
		'author-id': '059'
	}
	
	return question;	
}
function problem0510(){
	var inputData = [{
		'length': 24,
		'breadth': 16
		},
		{
		'length': 13,
		'breadth': 12
		},
		{
		'length': 43,
		'breadth': 22
		},
		{
		'length': 15,
		'breadth': 10
		},
		{
		'length': 50,
		'breadth': 22
		}],
		randomIndex = getRandomNumber(inputData.length),
		length = inputData[randomIndex]['length'],
		breadth = inputData[randomIndex]['breadth'],
		perimeter,
		question = {};

	length = parseInt (length);
	breadth = parseInt (breadth);
	perimeter = 2*(length+breadth);

	question = {
		'type': 'single',
		'id': '0510',
		'question': 'Find the Perimeter of the Rectangle with length'+" "+  length +'cm and breadth' +" "+ breadth + 'cm ?',
		'options': {
			'A': perimeter + parseInt(Math.random()*10),
			'B': perimeter - parseInt(Math.random()*10),
			'C': perimeter,
			'D': perimeter - parseInt(Math.random()*10)
		},
		'answer': 'C',
		'author-id': '0510'
	}
	
	return question;	
}

function problem0511(){
	var inputData = [{
		'x': 3000,
		'y': 2000
		},
		{
		'x': 9000,
		'y': 3000
		},
		{
		'x': 5000,
		'y': 2000
		},
		{
		'x': 1500,
		'y': 1000
		},
		{
		'x': 4000,
		'y': 1000
		}],
		randomIndex = getRandomNumber(inputData.length),
		x = inputData[randomIndex]['x'],
		y = inputData[randomIndex]['y'],
		z,
		question = {};

	x = parseInt (x);
	y = parseInt (y);
	z = ((x-y)/x)*100;

	question = {
		'type': 'single',
		'id': '0511',
		'question': 'Anu salary is Rs.' +" "+ x +'and Mani salary is Rs.' +" "+ y + '.How much % is Mani salary is less than Anu salary?',
		'options': {
			'A': z,
			'B': z - parseInt(Math.random()*10),
			'C': z + parseInt(Math.random()*10), 
			'D': z - parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '0511'
	}
	
	return question;	
}

function problem0512(){
	var inputData = [{
		'side': 5,
		},
		{
		'side': 4,
		},
		{
		'side': 7,
		},
		{
		'side': 9,
		},
		{
		'side': 2
			
		}],
		randomIndex = getRandomNumber(inputData.length),
		side = inputData[randomIndex]['side'],
		surfaceArea,
		question = {};

	side = parseInt (side);
	surfaceArea = 6*side*side;

	question = {
		'type': 'single',
		'id': '0512',
		'question': 'Find the total surface area of a cube with side' +" "+ side + 'cm?',
		'options': {
			'A': surfaceArea - parseInt(Math.random()*10),
			'B': surfaceArea - parseInt(Math.random()*10),
			'C': surfaceArea + parseInt(Math.random()*10), 
			'D': surfaceArea
		},
		'answer': 'D',
		'author-id': '0512'
	}
	
	return question;	
}




























