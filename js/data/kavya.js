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

function problem0513(){
	var inputData = [{
		'population': 12600,
		'rate': 10,
		'noOfYears': 1
		},
		{
		'population': 1450000,
		'rate': 10,
		'noOfYears': 1
		},
		{
		'population': 6250,
		'rate': 8,
		'noOfYears': 1
		},
		{
		'population': 26400,
		'rate': 4,
		'noOfYears': 1
		},
		{
		'population': 19855,
		'rate': 5,
		'noOfYears': 1
		}],
		randomIndex = getRandomNumber(inputData.length),
		population= inputData[randomIndex]['population'],
		rate = inputData[randomIndex]['rate'],
		noOfYears = inputData[randomIndex]['noOfYears'],
		presentPopulation,
		question = {};

	population = parseInt(population);
	rate = parseInt(rate);
	noOfYears = parseInt(noOfYears);
	presentPopulation = population*(1-(rate/100))**noOfYears;

	question = {
		'type': 'single',
		'id': '0513',
		'question': 'The population of a state is decreasing at a rate of' +" "+ rate +'% per annum. If the population'+" "+ noOfYears +" "+ 'year ago was' +" "+ population  +" "+'. what is the present population?',
		'options': {
			'A': presentPopulation + parseInt(Math.random()*10),
			'B': presentPopulation,
			'C': presentPopulation + parseInt(Math.random()*10),
			'D': presentPopulation - parseInt(Math.random()*10)
		},
		'answer': 'B',
		'author-id': '0513'
	}
	
	return question;
		
}

function problem0514(){
	var inputData = [{
		'downstreamStreamSpeed': 20,
		'upstreamSpeed': 15
		},
		{
		'downstreamStreamSpeed': 55,
		'upstreamSpeed': 15
		},
		{
		'downstreamStreamSpeed': 80,
		'upstreamSpeed': 20
		},
		{
		'downstreamStreamSpeed': 70,
		'upstreamSpeed': 10
		},
		{
		'downstreamStreamSpeed': 25,
		'upstreamSpeed': 5
		}],
		randomIndex = getRandomNumber(inputData.length),
		downstreamStreamSpeed= inputData[randomIndex]['downstreamStreamSpeed'],
		upstreamSpeed = inputData[randomIndex]['upstreamSpeed'],
		stillWaterSpeed,
		question = {};

	downstreamStreamSpeed=parseInt(downstreamStreamSpeed);
	upstreamSpeed=parseInt(upstreamSpeed);
	stillWaterSpeed = 1/2 *(downstreamStreamSpeed + upstreamSpeed);

	question = {
		'type': 'single',
		'id': '0514',
		'question': 'A man rows downstream at' +" "+ downstreamStreamSpeed + 'km/hr and rows upstream at' +" "+ upstreamSpeed + 'km/hr. At what speed he can row in still water ?',
		'options': {
			'A': stillWaterSpeed + parseInt(Math.random()*10),
			'B': stillWaterSpeed - parseInt(Math.random()*10),
			'C': stillWaterSpeed + parseInt(Math.random()*10),
			'D': stillWaterSpeed
		},
		'answer': 'D',
		'author-id': '0514'
	}
	
	return question;
		
}


function problem0515(){
	var inputData = [{
		'sellingPrice': 8400,
		'costPrice': 12
		},
		{
		'sellingPrice': 800,
		'costPrice': 25
		},
		{
		'sellingPrice': 1925,
		'costPrice': 25
		},
		{
		'sellingPrice': 198,
		'costPrice': 32
		},
		{
		'sellingPrice': 625,
		'costPrice': 25
		}],
		randomIndex = getRandomNumber(inputData.length),
		sellingPrice= inputData[randomIndex]['sellingPrice'],
		costPrice = inputData[randomIndex]['costPrice'],
		profit,
		question = {};

	sellingPrice=parseInt(sellingPrice);
	costPrice=parseInt(costPrice);
	profit= (sellingPrice - costPrice/costPrice)*100;

	question = {
		'type': 'single',
		'id': '0515',
		'question': 'A Shopkeeper sold an article for Rs.'+ sellingPrice + '. If the cost price of the article is Rs.'+ costPrice + ', Find the profit percent ?',
		'options': {
			'A': costPrice + parseInt(Math.random()*10),
			'B': costPrice,
			'C': costPrice + parseInt(Math.random()*10),
			'D': costPrice - parseInt(Math.random()*10)
		},
		'answer': 'B',
		'author-id': '0515'
	}
	
	return question;
		
}

function problem0516(){
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
		amount,
		question = {};

	principal = parseInt(principal);
	rateOfInterest = parseInt(rateOfInterest);
	noOfYears = parseInt(noOfYears);
	amount = principal*(1 + (rateOfInterest*noOfYears)/100);

	question = {
		'type': 'single',
		'id': '0516',
		'question': 'Sona has borrowed a Rs.' + principal +" "+ 'at the rate of' +" "+ rateOfInterest +" "+ '% simple interest. What amount he needs to pay after'+" "+noOfYears+" "+ 'years to clear the debt?',
		'options': {
			'A': amount + parseInt(Math.random()*10),
			'B': amount + parseInt(Math.random()*10),
			'C': amount,
			'D': amount - parseInt(Math.random()*10)
		},
		'answer': 'C',
		'author-id': '0516'
	}
	
	return question;
		
}

function problem0517(){
	var inputData = [{
		'length': 40,
		'breadth': 25,
		'height': 20,
		'spaceOccupied': 200
		},
		{
		'length': 50,
		'breadth': 35,
		'height': 40,
		'spaceOccupied': 200
		},
		{
		'length': 70,
		'breadth': 20,
		'height': 10,
		'spaceOccupied': 200
		},
		{
		'length': 80,
		'breadth': 40,
		'height': 10,
		'spaceOccupied': 200
		},
		{
		'length': 80,
		'breadth': 40,
		'height': 30,
		'spaceOccupied': 200	
		}],
		randomIndex = getRandomNumber(inputData.length),
		length= inputData[randomIndex]['length'],
		breadth = inputData[randomIndex]['breadth'],
		height = inputData[randomIndex]['height'],
		spaceOccupied = inputData[randomIndex]['spaceOccupied'],
		volume,noOfPerson,
		question = {};

	length = parseInt(length);
	breadth = parseInt(breadth);
	height = parseInt(height);
	spaceOccupied = parseInt(spaceOccupied);
	volume = length*breadth*height;
	noOfPerson = volume/spaceOccupied;

	question = {
		'type': 'single',
		'id': '0517',
		'question': 'The dimensions of a hall are'+" " + length +'m,'+" " + breadth +'m and' +" "+ height + 'm. If each person requires' +" "+ spaceOccupied +" "+ 'cubic metre, then the number of persons who can be accomodated in the hall are ?',
		'options': {
			'A': noOfPerson,
			'B': noOfPerson + parseInt(Math.random()*10),
			'C': noOfPerson + parseInt(Math.random()*10),
			'D': noOfPerson - parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '0517'
	}
	
	return question;
		
}

function problem0518(){
	var inputData = [{
		's1': 815,
		's2': 854,
		'y1': 3,
		'y2': 4
		},
		{
		's1': 815,
		's2': 854,
		'y1': 8,
		'y2': 5
		},
		{
		's1': 815,
		's2': 859,
		'y1': 5,
		'y2': 9
		},
		{
		's1': 815,
		's2': 853,
		'y1': 8,
		'y2': 2
		}],
		randomIndex = getRandomNumber(inputData.length),
		s1= inputData[randomIndex]['s1'],
		s2= inputData[randomIndex]['s2'],
		y1= inputData[randomIndex]['y1'],
		y2= inputData[randomIndex]['y2'],
		a,
		b,
		principal,
		question = {};
		
		a=s2-s1;
		b=a*y1;
		principal=s1-b;

	question = {
		'type': 'single',
		'id': '0518',
		'question': 'A sum of money at simple interest amounts to Rs. ' + s1 + ' in ' + y1 + '  years and to Rs.' + s2 + ' in ' + y2 + ' years. The sum is:',
		'options': {
			'A': principal, 
			'B': principal - parseInt(Math.random()*10),
			'C': principal + parseInt(Math.random()*10),
			'D': principal - parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '0518'
	}
	
	return question;
	
}






















