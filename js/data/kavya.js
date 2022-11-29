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
		distance = inputData[randomIndex]['distance'],
		time = inputData[randomIndex]['time'],
		speed,
		question = {};

	distance = parseInt(distance);
	time = parseInt(time);
	speed = (distance/time);

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
		streamSpeed = inputData[randomIndex]['streamSpeed'],
		boatSpeed = inputData[randomIndex]['boatSpeed'],
		upStream,
		question = {};

	streamSpeed = parseInt(streamSpeed);
	boatSpeed = parseInt(boatSpeed);
	upStream = (boatSpeed - streamSpeed);

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

	sellingPrice = parseInt(sellingPrice);
	profit = parseInt(profit);
	costPrice = (100/(100+profit)*sellingPrice);

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
		principal = inputData[randomIndex]['principal'],
		rateOfInterest = inputData[randomIndex]['rateOfInterest'],
		noOfYears = inputData[randomIndex]['noOfYears'],
		simpleInterest,
		question = {};

	principal = parseInt(principal);
	rateOfInterest = parseInt(rateOfInterest);
	noOfYears = parseInt(noOfYears);
	simpleInterest = (principal*rateOfInterest*noOfYears)/100;

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
		principal = inputData[randomIndex]['principal'],
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
		boatSpeed = inputData[randomIndex]['boatSpeed'],
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
		population = inputData[randomIndex]['population'],
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
		downstreamStreamSpeed = inputData[randomIndex]['downstreamStreamSpeed'],
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
		sellingPrice = inputData[randomIndex]['sellingPrice'],
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
		principal = inputData[randomIndex]['principal'],
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
		length = inputData[randomIndex]['length'],
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
		s1 = inputData[randomIndex]['s1'],
		s2 = inputData[randomIndex]['s2'],
		y1 = inputData[randomIndex]['y1'],
		y2 = inputData[randomIndex]['y2'],
		a,
		b,
		principal,
		question = {};
		
		a = s2-s1;
		b = a*y1;
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

function problem0519(){
	var inputData = [
		{
		'distance':200,
		'speed': 18
		},
		{
		'distance':100,
		'speed': 18
		},
		{
		'distance':150,
		'speed': 17
		},
		{
		'distance':250,
		'speed': 18
		}
	],
		randomIndex = getRandomNumber(inputData.length),
		speed = inputData[randomIndex]['speed'],
		distance = inputData[randomIndex]['distance'],
    	time,
		question = {};
		
	    speed=parseInt(speed*5/18);
		distance=parseInt(distance);
		time=(distance/speed);
		
	question = {
		'type': 'single',
		'id': '0519',
		'question': 'A jogger is running at a speed of '+ speed +' km/hr. In what time he will cross a track of length '+ distance+' meters?',
		'options': {
			'A':  time+parseInt(Math.random()*10),
			'B':  time-parseInt(Math.random()*10),
			'C':  time,
			'D':  time-parseInt(Math.random()*10)
		},
		'answer': 'C',
		'author-id': '0519'
	}
	
	return question;
	
}

function problem0520(){
	var inputData = [{
		'tankCap': 25,
		'buckCap': 2/5
		},
		{
		'tankCap': 30,
		'buckCap': 2/5
		},
		{
		'tankCap': 40,
		'buckCap': 2/5
		},
		{
		'tankCap': 45,
		'buckCap': 2/5
		},
		{
		'tankCap': 50,
		'buckCap': 2/5
		}],
		randomIndex = getRandomNumber(inputData.length),
	    tankCap= inputData[randomIndex]['tankCap'],
		buckCap = inputData[randomIndex]['buckCap'],
		nBuck,
		question = {};

	tankCap = parseInt(tankCap);
    buckCap = parseFloat(buckCap);
    nBuck = tankCap/buckCap;

	question = {
		'type': 'single',
		'id': '0520',
		'question': 'To fill a tank ' + tankCap + 'buckets of water is required. How many buckets of water will be required to fill the same tank if the capacity of the bucket is reduced to ' + buckCap + ' two fifth of its present?',
		'options': {
			'A': nBuck * parseInt(Math.random()*10),
			'B': nBuck ,
			'C': nBuck + parseInt(Math.random()*10),
			'D': nBuck - parseInt(Math.random()*10)
		},
		'answer': 'B',
		'author-id': '0520'
    }
	return question;
}


function problem0521(){
	var inputData = [{
		'distance': 100,
		'time': 9
		},
		{
		'distance': 100,
			'time': 6
		},
		{
		'distance': 100,
		'time': 3
		},
		{
		'distance': 100,
		'time': 12
		},
		{
		'distance': 100,
		'time': 15
		}],
		randomIndex = getRandomNumber(inputData.length),
		distance = inputData[randomIndex]['distance'],
		time = inputData[randomIndex]['time'],
		speed,
		question = {};

	distance=parseInt(distance);
	time=parseInt(time*60);
	speed=((distance/time)*(18/5));

	question = {
		'type': 'single',
		'id': '0521',
		'question': 'A train is coming in ' + distance + 'km from north direction at ' + time + 'sec. Calculate the speed of the train.',
		'options': {
			'A': speed,
			'B': speed - parseInt(Math.random()*10),
			'C': speed + parseInt(Math.random()*10),
			'D': speed - parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '05'
	}
	
	return question;
	
}

function problem0522(){
	var inputData = [{
		'costprice': 1400,
		'loss': 85
		},
		{
		'costprice': 1740,
		'loss': 25
		},
		{
		'costprice': 1620,
		'loss': 25
		},
		{
		'costprice': 1630,
		'loss': 25
		},
		{
		'costprice': 1840,
		'loss': 25
		}],
		randomIndex = getRandomNumber(inputData.length),
		costprice = inputData[randomIndex]['costprice'],
		loss = inputData[randomIndex]['loss'],
		sellingprice,
		question = {};
		
		sellingprice=(loss/100)*costprice;

	question = {
		'type': 'single',
		'id': '0522',
		'question': 'A man buys a cycle for Rs' + costprice + ' and sells it at a loss of ' + loss + '%. What is the selling price of the cycle?',
		'options': {
			'A': sellingprice + parseInt(Math.random()*10), 
			'B': sellingprice - parseInt(Math.random()*10),
			'C': sellingprice,
			'D': sellingprice - parseInt(Math.random()*10)
		},
		'answer': 'C',
		'author-id': '05'
	}
	
	return question;
	
}

function problem0523(){
	var inputData = [{
		'petrol_bill':50,
		'deducted': 150
		},
		{
		'petrol_bill':50,
		'deducted': 200
		},
		{
		'petrol_bill':100,
		'deducted': 180
		},
		{
		'petrol_bill':80,
		'deducted': 180
		},
		{
		'petrol_bill':100,
		'deducted': 300
		}],
		randomIndex = getRandomNumber(inputData.length),
		petrol_bill= inputData[randomIndex]['petrol_bill'],
		deducted = inputData[randomIndex]['deducted'],
		bill,
		question = {};
	
	
	to_pay = deducted - petrol_bill;
	bill = (deducted/to_pay)*100;

	question = {
		'type': 'single',
		'id': '0523',
		'question': 'If' +" "+ petrol_bill + ' % of an petrol bill is deducted then Rs' + deducted +" "+ 'is still to be paid .How much was the original bill',
		'options': {
			'A': bill,
			'B': bill + parseInt(Math.random()*10),
			'C': bill + parseInt(Math.random()*10),
			'D': bill - parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '05'
	}
	
	return question;
	
}

function problem0524(){
    var inputData = [{
    'over1': 10,
    'rate': 2.0,
    'over2': 40,
    'runs': 252
    },
    {
    'over1': 10,
    'rate': 3.0,
    'over2': 40,
    'runs': 262
    },
    {
    'over1': 10,
    'rate': 3.0,
    'over2': 40,
    'runs': 292
    },
    {
    'over1': 10,
    'rate': 3.0,
    'over2': 40,
    'runs': 282
    }],
    randomIndex = getRandomNumber(inputData.length),
    over1= inputData[randomIndex]['over1'],
    over2= inputData[randomIndex]['over2'],
    rate= inputData[randomIndex]['rate'],
    runs= inputData[randomIndex]['runs'],
    r,
    runrate,
    question = {};
    
    r=runs-(over1*rate);
    runrate=r/over2;

question = {
    'type': 'single',
    'id': '0524',
    'question': 'In the first ' + over1 + ' overs of a cricket game, the run rate was only ' + rate + '. What should be the run rate in the remaining ' + over2 + ' overs to reach the target of ' + runs + ' runs?',
    'options': {
        'A': runrate - parseInt(Math.random()*10),
        'B': runrate - parseInt(Math.random()*10),
        'C': runrate+ parseInt(Math.random()*10),
        'D': runrate
    },
    'answer': 'D',
    'author-id': '05'
}

return question;

}

function problem0525(){
    var inputData = [{
    'plane': 25,
    'helicopter': -15
    },
    {
    'plane': 6,
    'helicopter': -15
    },
    {
    'plane': 7,
    'helicopter': -15
    },
    {
    'plane':8,
    'helicopter': -14
    }],
    randomIndex = getRandomNumber(inputData.length),
    plane = inputData[randomIndex]['plane'],
    helicopter = inputData[randomIndex]['helicopter'],
    x,
    y,
    question = {};
    
    x = plane - helicopter;
    y = x - plane;

question = {
    'type': 'single',
    'id': '0525',
    'question': 'A plane speed  is ' + plane + ' km/hr and the speed of the helicopter is ' + helicopter + ' km/hr. The plane speed against the helicopter is',
    'options': {
        'A': y - parseInt(Math.random()*10),
        'B': y - parseInt(Math.random()*10),
        'C': y + parseInt(Math.random()*10),
        'D': y
    },
    'answer': 'D',
    'author-id': '05'
}

return question;

}

function problem0526(){
	var inputData = [{
		'd':500,
		't1': 2,
		't2': 4,
		},
		{
		'd':500,
		't1': 5,
		't2': 2,
		},
		{
		'd':600,
		't1': 6,
		't2': 2,
		},
		{
		'd':700,
		't1': 7,
		't2': 2,
		},
		{
        'd':800,
		't1': 8,
		't2': 2,
		}],
	 randomIndex = getRandomNumber(inputData.length),
		d= inputData[randomIndex]['d'],
		t1 = inputData[randomIndex]['t1'],
		t2 = inputData[randomIndex]['t2'],
		rate,
		question = {};

	d=parseInt(d);
	t1=parseInt(t1);
	t2=parseInt(t2);
	rate=(d/t1*t2);

	question = {
		'type': 'single',
		'id': '0526',
		'question': 'The speed of a boat in still water is'+ " " +t1+ 'kmph and the rate of current is'+ " " +t2+ 'kmph . The distance travelled downstream is'+ " " +d+ ' km. Find the rate?',
		'options': {
        'A': rate - parseInt(Math.random()*10),
        'B': rate,
        'C': rate + parseInt(Math.random()*10),
        'D': rate - parseInt(Math.random()*10)
		},
		'answer': 'B',
		'author-id': '05'
	}

	return question;
}

function problem0527(){
	var inputData = [{
		'base':4,
		'height':8,
		},
		{
		'base':8,
		'height':18,
		},
		{
        'base':10,
		'height':20,
		},
		{
        'base':20,
		'height':40,
		},
		{
		'base':16,
		'height':14,
		}],
	 randomIndex = getRandomNumber(inputData.length),
		base  = inputData[randomIndex]['base'],
         height  = inputData[randomIndex]['height'],
		area,
		question = {};

	base = parseInt(base);
	height = parseInt(height);
	area = (1/2*base*height);

	question = {
		'type': 'single',
		'id': '0527',
		'question': 'what is the area of a triangle with base ' +base+ 'cm and height ' +height+ 'cm?',
		'options': {
        'A': area - parseInt(Math.random()*10),
        'B': area,
        'C': area + parseInt(Math.random()*10),
        'D': area - parseInt(Math.random()*10)
		},
		'answer': 'B',
		'author-id': '05'
	}

	return question;
}

function problem0528(){
	var inputData = [{
		'typist':6,
		'pages': 600,
		'hours': 5,
		},
		{
		'typist':2,
		'pages': 700,
		'hours': 5,
		},
		{
		'typist':4,
		'pages': 800,
		'hours': 4,
		},
		{
		'typist':2,
		'pages': 900,
		'hours': 9,
		}],
		randomIndex = getRandomNumber(inputData.length),
		typist= inputData[randomIndex]['typist'],
		pages = inputData[randomIndex]['pages'],
		hours = inputData[randomIndex]['hours'],
		count,
		total,
		question = {};
	
	
	count=pages/typist;
	total=count/hours;

	question = {
		'type': 'single',
		'id': '0528',
		'question': + typist + " " +'typists can type'+ " " + pages + 'pages in ' + hours + 
					'hours.Find the average number of pages typed by each typist in an hour.',
		'options': {
			'A': total - parseInt(Math.random()*10),
			'B': total - parseInt(Math.random()*10),
			'C': total + parseInt(Math.random()*10),
			'D': total
		},
		'answer': 'D',
		'author-id': '05'
	}
	
	return question;
	
}

function problem0529(){
	var inputData = [{
		'salaryA': 2000,
		'salaryB': 6658,
		'salaryC': 4590,
		'salaryD': 2765,
		'average': 3579
		},
		{
		'salaryA': 6435,
		'salaryB': 6927,
		'salaryC': 6855,
		'salaryD': 7230,
		'average': 6500
		},
		{
		'salaryA': 5439,
		'salaryB': 3967,
		'salaryC': 4865,
		'salaryD': 1505,
		'average': 5432
		},
		{
		'salaryA': 9075,
		'salaryB': 7634,
		'salaryC': 5423,
		'salaryD': 9809,
		'average': 5000
		},
		{
		'salaryA': 6543,
		'salaryB': 6789,
		'salaryC': 9087,
		'salaryD': 6790,
		'average': 7000
		}],
		randomIndex = getRandomNumber(inputData.length),
		salaryA= inputData[randomIndex]['salaryA'],
		salaryB= inputData[randomIndex]['salaryB'],
		salaryC= inputData[randomIndex]['salaryC'],
		salaryD= inputData[randomIndex]['salaryD'],
		average= inputData[randomIndex]['average'],
		total= inputData[randomIndex]['total'],
		salary= inputData[randomIndex]['salary'],
		finalSalary,
		question = {};

	var total = parseInt(salaryA+salaryB+salaryC+salaryD),
	    salary = parseInt(average*5),
	    finalSalary = parseInt(salary - total);

	question = {
		'type': 'single',
		'id': '0529',
		'question': 'Mohan gets a salary of '+ salaryA +', '+salaryB+ ', '+salaryC+','+salaryD+ ' for 4 months. How much salary he must have in the fifth month?',
		'options': {
			'A': finalSalary,
			'B': finalSalary - parseInt(Math.random()*10),
			'C': finalSalary + parseInt(Math.random()*10),
			'D': finalSalary - parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '05'
	}
	
	return question;
}

function problem0530(){
	var inputData = [{
		'anu':1000,
		'banu':2000,
		'sonu':3000
		},
		{
		'anu':4000,
		'banu':5000,
		'sonu':6000
		},
		{
		'anu':7000,
		'banu':8000,
		'sonu':9000
		},
		{
		'anu':8000,
		'banu':4000,
		'sonu':4000
		}],
		randomIndex = getRandomNumber(inputData.length),
		anu = inputData[randomIndex]['anu'],
		banu = inputData[randomIndex]['banu'],
		sonu = inputData[randomIndex]['sonu'],
		percentage,
		question = {};


	anu = parseInt(anu);
	banu = parseInt(banu);
	sonu = parseInt(sonu);
	election=anu+banu+sonu;
	percentage=(anu/election)*100;


	question = {
		'type': 'single',
		'id': '0530',
		'question':'Three candidates, anu, banu & sonu contested in  an election and received ' 
					+ anu + ','+ banu + 'and' + sonu + ' votes respectively. What percent of the total votes did anu gets?',
		'options': {
			'A': percentage - parseInt(Math.random()*10),
			'B': percentage - parseInt(Math.random()*10),
			'C': percentage + parseInt(Math.random()*10),
			'D': percentage
		},
		'answer': 'D',
		'author-id': '05'
	}
	
	return question;
	
}

function problem0531(){
	var inputData = [{
		'group_women':30,
		'women_years': 16,
		'women_leave': 19,
		'new_woman': 15.8
		},
		{
		'group_women':30,
		'women_years': 17,
		'women_leave': 18,
		'new_woman': 16.9
		},
		{
		'group_women':30,
		'women_years': 18,
		'women_leave': 28,
		'new_woman': 17.5
		},
		{
		'group_boy':40,
		'boys_years': 16,
		'boys_leave': 17,
		'new_boy': 15.875
		}],
		randomIndex = getRandomNumber(inputData.length),
		group_women = inputData[randomIndex]['group_women'],
		women_years = inputData[randomIndex]['women_years'],
		women_leave = inputData[randomIndex]['women_leave'],
		new_woman = inputData[randomIndex]['new_woman'],
		age,
		group,
		question = {};
	
	group_women = parseInt(group_women);
	women_years = parseInt(women_years);
	women_leave = parseInt(women_leave);
	new_woman = parseInt(new_woman);
	age = group_women*women_years;
	group = (new_woman*group_women) - age + women_leave;

	question = {
		'type': 'single',
		'id': '0531',
		'question': 'Average age of a group of ' +" "+ group_women +' women is ' + women_years + ' years. A woman of age '+ women_leave + 
					' leaves the group and a new woman joins the group. If the new average age of the group is '+ new_woman + 
					' years, find the age of the new woman?',
		'options': {
			'A': group - parseInt(Math.random()*10),
			'B': group - parseInt(Math.random()*10),
			'C': group,
			'D': group + parseInt(Math.random()*10)
		},
		'answer': 'C',
		'author-id': '05'
	}
	
	return question;
	
}


function problem0532(){
	var inputData = [{
		'town_increased':656000,
		'decade': 234000
		},
		{
		'town_increased':654000,
		'decade': 543000
		},
		{
		'town_increased':785000,
		'decade': 256000
		},
		{
		'town_increased':175000,
		'decade': 262200
		}],
		randomIndex = getRandomNumber(inputData.length),
		town_increased = inputData[randomIndex]['town_increased'],
		decade = inputData[randomIndex]['decade'],
		percentage_increase,
		Increase_percentage,
		required_average,
		question = {};
	
	town_increased = parseInt(town_increased);
	decade = parseInt(decade);
	percentage_increase = (town_increased-decade);
	Increase_percentage = (percentage_increase/town_increased)*100;
	required_average = (Increase_percentage/10);

	question = {
		'type': 'single',
		'id': '0532',
		'question': 'The population of a town increased from  ' + town_increased + ' to ' + decade + 
					' in a decade. The average percent increased of population per year is:',
		'options': {
			'A': required_average - parseInt(Math.random()*10),
			'B': required_average - parseInt(Math.random()*10),
			'C': required_average + parseInt(Math.random()*10),
			'D': required_average
		},
		'answer': 'D',
		'author-id': '05'
	}
	
	return question;
	
}

function problem0533(){
	var inputData = [{
		'parallelLine':280,
		'sameDirection':100,
		'trainSlower':40
		},
		{
		'parallelLine':280,
		'sameDirection':100,
		'trainSlower':56
		},
		{
		'parallelLine':280,
		'sameDirection':100,
		'trainSlower': 80
		},
		{
		'parallelLine':280,
		'sameDirection':100,
		'trainSlower':36
		}],
		randomIndex = getRandomNumber(inputData.length),
		parallelLine = inputData[randomIndex]['parallelLine'],
		sameDirection = inputData[randomIndex]['sameDirection'],
		trainSlower = inputData[randomIndex]['trainSlower'],
		train,
		meterSec,
		x,
		length,
		question = {};
	
	parallelLine = parseInt(parallelLine);
	sameDirection = parseInt(sameDirection);
	trainSlower = parseInt(trainSlower),
	train = parallelLine - sameDirection;
	meterSec = [train*(5/18)];
	x = meterSec * trainSlower;
	length=x/2;
	


	question = {
		'type': 'single',
		'id': '0533',
		'question': 'Two trains of equal lengths are running on parallel lines in the same direction at the rate of' + parallelLine + 'km/hr and' 
					+ sameDirection + 'km/hr. The faster train passes the slower train in' + trainSlower + 'seconds. What is the length of the each trains ?',
		'options': {
			'A': length - parseInt(Math.random()*10),
			'B': length + parseInt(Math.random()*10),
			'C': length,
			'D': length - parseInt(Math.random()*10)
		},
		'answer': 'C',
		'author-id': '05'
	}
	
	return question;
	
}

function problem0534(){
	var inputData = [{
		'buys':50,
		'sell': 34,
		'newBuy': 16,
		'newSell':90
		},
		{
		'buys':80,
		'sell': 60,
		'newBuy': 12,
		'newSell':30
		},
		{
		'buys':10,
		'sell': 40,
		'newBuy': 10,
		'newSell':80
		},
		{
		'buys':16,
		'sell': 20,
		'newBuy': 32,
		'newSell': 40
		}],
		randomIndex = getRandomNumber(inputData.length),
		buys = inputData[randomIndex]['buys'],
		sell = inputData[randomIndex]['sell'],
		newBuy = inputData[randomIndex]['newBuy'],
		newSell = inputData[randomIndex]['newSell'],
		cp,
		sp,
		profit,
		profit_percentage,
		question = {};

	cp = newBuy + buys;
	sp = newSell + sell;
	profit = sp - cp;
	profit_percentage = (profit/cp)*100;

	question = {
		'type': 'single',
		'id': '0534',
		'question': 'Sathya buys a Dog for ' + buys + ' pounds. after one year, he sells it for ' + sell + 
					' pounds. after one year, again he buys the same Dog at ' + newBuy + 
					' pounds and sells it for ' + newSell + 
					' pounds. what is the overall profit percent for sathya over both the transactions?',
		'options': {
			'A': profit_percentage - parseInt(Math.random()*10),
			'B': profit_percentage - parseInt(Math.random()*10),
			'C': profit_percentage,
			'D': profit_percentage + parseInt(Math.random()*10)
		},
		'answer': 'C',
		'author-id': '05'
	}
	
	return question;
	
}

function problem0535(){
	var inputData = [{
		's':8,
		'm':2,
		'e':24
		},
		{
		's':10,
		'm':5,
		'e':30
		},
		{
		's':12,
		'm':7,
		'e':55
		},	
		{
		's':14,
		'm':6,
		'e':45
		}],
		randomIndex = getRandomNumber(inputData.length),
		s= inputData[randomIndex]['s'],
		m= inputData[randomIndex]['m'],
		e=inputData[randomIndex]['e'],
		total,
		question = {};
		
	s=parseInt(s);
	m=parseInt(m);
	e=parseInt(e);
	total=(s*m)+e;
		
	question={
		'type':'single',
		'id':'0535',
		'question':'The average weight of ' + s + ' person increased by ' + m + 
					' kg when a new person comes in place of one of them weighting ' + e + ' of the new person. What is the age of new person?',
		'option':
		{
			'A':total,
			'B':total + parseInt(Math.random()*10),
			'C':total - parseInt(Math.random()*10),			
			'D':total - parseInt(Math.random()*10),
		},
		'answer':'A',
		'author-id':'05'
		}
		return question;
}

function problem0536(){
	var inputData = [{
		'input1': 160,
		'input2': 100
		},
		{
		'input1': 220,
		'input2': 100
		},
		{
		'input1': 300,
		'input2': 200
		},
		{
		'input1': 430,
		'input2': 400
		},
		{
		'input1': 200,
		'input2': 100
		}],
		randomIndex = getRandomNumber(inputData.length),
		input1 = inputData[randomIndex]['input1'],
		input2 = inputData[randomIndex]['input2'],
	    precentage,
		
		
		input1 = parseInt(input1),
		input2 = parseInt(input2),
		precentage = (input1 - input2)/input1,
		precentage = precentage*100,
		
		question = {
		'type': 'single',
		'id': '0536',
		'question': 'A Boy multiplied a number by ' + input2 + 'instead of '+input1+ 'what is the percentage error in the calculation?',
		'options': {
			'A': precentage - parseInt(Math.random()*10),
			'B': precentage - parseInt(Math.random()*10),
			'C': precentage + parseInt(Math.random()*10),
			'D': precentage,
		},
		'answer': 'A',
		'author-id': '05',
	}
	
	return question;
}

function problem0537(){
	var inputData = [{
		'cp': 2054,
		'p': 65
		},
		{
		'cp': 6540,
		'p': 23
		},
		{
		'cp': 2320,
		'p': 89
		},
		{
		'cp': 8640,
		'p': 67
		}],
		randomIndex = getRandomNumber(inputData.length),
		cp= inputData[randomIndex]['cp'],
		p = inputData[randomIndex]['p'],
		profit,
		sp,
		question = {};
		
	cp = inputData[randomIndex]['cp'],
	p = inputData[randomIndex]['p'],
	profit = (100+p)/100;
	sp = profit*cp;


	question = {
		'type': 'single',
		'id': '0537',
		'question': 'Anitha bought a Fridge for RS ' + cp + ' and sold it Renu ,if Anitha earned a profit of ' + p + 
					'% profit.what is the sellingprice of Fridge?',
		'options': {
			'A': sp, 
			'B': sp - parseInt(Math.random()*10),
			'C': sp + parseInt(Math.random()*10),
			'D': sp - parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '05'
	}
	
	return question;
	
}

function problem0538(){
		var inputData = [{
			't1':45,
			't2':53,
			'd':700,
			't':42
			},
			{
			't1':84,
			't2':98,
			'd':60,
			't':35
			},
			{
			't1':105,
			't2':110,
			'd':500,
			't':23
			},
			
			{
			't1':102,
			't2':23,
			'd':300,
			't':58
			}],
			randomIndex = getRandomNumber(inputData.length),
			t1 = inputData[randomIndex]['t1'],
			t2 = inputData[randomIndex]['t2'],
		    d = inputData[randomIndex]['d'],
			t = inputData[randomIndex]['t'],
			question= {};
			
		t1 = parseInt(t1);
		t2 = parseInt(t2);
		d = parseInt(d);
		t =parseInt( t);
		speed = (d/t)/t2;
		ratio = t1*speed;
					
			
	  question= {
			'type': 'single',
			'id': '0538',
			'question': 'The ratio between the speed of two cars is ' + t1 + ':' + t2 +
			'.If the second car runs '+d+' km in '+t+'hours, then the speed of the first car is?',
			'options': {
				'A':ratio-parseFloat(Math.random()*10),
				'B':ratio-parseInt(Math.random()*10),
				'C':ratio,
				'D':ratio+parseInt(Math.random()*10)
			},
			'answer': 'C',
			'author-id': '05'
		}
		return question;
	
}

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
		distance = inputData[randomIndex]['distance'],
		time = inputData[randomIndex]['time'],
		speed,
		question = {};

	distance = parseInt(distance);
	time = parseInt(time);
	speed = (distance/time);

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
		streamSpeed = inputData[randomIndex]['streamSpeed'],
		boatSpeed = inputData[randomIndex]['boatSpeed'],
		upStream,
		question = {};

	streamSpeed = parseInt(streamSpeed);
	boatSpeed = parseInt(boatSpeed);
	upStream = (boatSpeed - streamSpeed);

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

	sellingPrice = parseInt(sellingPrice);
	profit = parseInt(profit);
	costPrice = (100/(100+profit)*sellingPrice);

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
		principal = inputData[randomIndex]['principal'],
		rateOfInterest = inputData[randomIndex]['rateOfInterest'],
		noOfYears = inputData[randomIndex]['noOfYears'],
		simpleInterest,
		question = {};

	principal = parseInt(principal);
	rateOfInterest = parseInt(rateOfInterest);
	noOfYears = parseInt(noOfYears);
	simpleInterest = (principal*rateOfInterest*noOfYears)/100;

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
		principal = inputData[randomIndex]['principal'],
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
		boatSpeed = inputData[randomIndex]['boatSpeed'],
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
		population = inputData[randomIndex]['population'],
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
		downstreamStreamSpeed = inputData[randomIndex]['downstreamStreamSpeed'],
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
		sellingPrice = inputData[randomIndex]['sellingPrice'],
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
		principal = inputData[randomIndex]['principal'],
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
		length = inputData[randomIndex]['length'],
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
		s1 = inputData[randomIndex]['s1'],
		s2 = inputData[randomIndex]['s2'],
		y1 = inputData[randomIndex]['y1'],
		y2 = inputData[randomIndex]['y2'],
		a,
		b,
		principal,
		question = {};
		
		a = s2-s1;
		b = a*y1;
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

function problem0519(){
	var inputData = [
		{
		'distance':200,
		'speed': 18
		},
		{
		'distance':100,
		'speed': 18
		},
		{
		'distance':150,
		'speed': 17
		},
		{
		'distance':250,
		'speed': 18
		}
	],
		randomIndex = getRandomNumber(inputData.length),
		speed = inputData[randomIndex]['speed'],
		distance = inputData[randomIndex]['distance'],
    	time,
		question = {};
		
	    speed = parseInt(speed*5/18);
		distance = parseInt(distance);
		time = (distance/speed);
		
	question = {
		'type': 'single',
		'id': '0519',
		'question': 'A jogger is running at a speed of '+ speed +' km/hr. In what time he will cross a track of length '+ distance+' meters?',
		'options': {
			'A':  time+parseInt(Math.random()*10),
			'B':  time-parseInt(Math.random()*10),
			'C':  time,
			'D':  time-parseInt(Math.random()*10)
		},
		'answer': 'C',
		'author-id': '0519'
	}
	
	return question;
	
}

function problem0520(){
	var inputData = [{
		'tankCap': 25,
		'buckCap': 2/5
		},
		{
		'tankCap': 30,
		'buckCap': 2/5
		},
		{
		'tankCap': 40,
		'buckCap': 2/5
		},
		{
		'tankCap': 45,
		'buckCap': 2/5
		},
		{
		'tankCap': 50,
		'buckCap': 2/5
		}],
		randomIndex = getRandomNumber(inputData.length),
	    tankCap= inputData[randomIndex]['tankCap'],
		buckCap = inputData[randomIndex]['buckCap'],
		nBuck,
		question = {};

	tankCap = parseInt(tankCap);
    buckCap = parseFloat(buckCap);
    nBuck = tankCap/buckCap;

	question = {
		'type': 'single',
		'id': '0520',
		'question': 'To fill a tank ' + tankCap + 'buckets of water is required. How many buckets of water will be required to fill the same tank if the capacity of the bucket is reduced to ' + buckCap + ' two fifth of its present?',
		'options': {
			'A': nBuck * parseInt(Math.random()*10),
			'B': nBuck ,
			'C': nBuck + parseInt(Math.random()*10),
			'D': nBuck - parseInt(Math.random()*10)
		},
		'answer': 'B',
		'author-id': '0520'
    }
	return question;
}


function problem0521(){
	var inputData = [{
		'distance': 100,
		'time': 9
		},
		{
		'distance': 100,
			'time': 6
		},
		{
		'distance': 100,
		'time': 3
		},
		{
		'distance': 100,
		'time': 12
		},
		{
		'distance': 100,
		'time': 15
		}],
		randomIndex = getRandomNumber(inputData.length),
		distance = inputData[randomIndex]['distance'],
		time = inputData[randomIndex]['time'],
		speed,
		question = {};

	distance=parseInt(distance);
	time=parseInt(time*60);
	speed=((distance/time)*(18/5));

	question = {
		'type': 'single',
		'id': '0521',
		'question': 'A train is coming in ' + distance + 'km from north direction at ' + time + 'sec. Calculate the speed of the train.',
		'options': {
			'A': speed,
			'B': speed - parseInt(Math.random()*10),
			'C': speed + parseInt(Math.random()*10),
			'D': speed - parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '05'
	}
	
	return question;
	
}

function problem0522(){
	var inputData = [{
		'costprice': 1400,
		'loss': 85
		},
		{
		'costprice': 1740,
		'loss': 25
		},
		{
		'costprice': 1620,
		'loss': 25
		},
		{
		'costprice': 1630,
		'loss': 25
		},
		{
		'costprice': 1840,
		'loss': 25
		}],
		randomIndex = getRandomNumber(inputData.length),
		costprice = inputData[randomIndex]['costprice'],
		loss = inputData[randomIndex]['loss'],
		sellingprice,
		question = {};
		
		sellingprice=(loss/100)*costprice;

	question = {
		'type': 'single',
		'id': '0522',
		'question': 'A man buys a cycle for Rs' + costprice + ' and sells it at a loss of ' + loss + '%. What is the selling price of the cycle?',
		'options': {
			'A': sellingprice + parseInt(Math.random()*10), 
			'B': sellingprice - parseInt(Math.random()*10),
			'C': sellingprice,
			'D': sellingprice - parseInt(Math.random()*10)
		},
		'answer': 'C',
		'author-id': '05'
	}
	
	return question;
	
}

function problem0523(){
	var inputData = [{
		'petrol_bill':50,
		'deducted': 150
		},
		{
		'petrol_bill':50,
		'deducted': 200
		},
		{
		'petrol_bill':100,
		'deducted': 180
		},
		{
		'petrol_bill':80,
		'deducted': 180
		},
		{
		'petrol_bill':100,
		'deducted': 300
		}],
		randomIndex = getRandomNumber(inputData.length),
		petrol_bill= inputData[randomIndex]['petrol_bill'],
		deducted = inputData[randomIndex]['deducted'],
		bill,
		question = {};
	
	
	to_pay = deducted - petrol_bill;
	bill = (deducted/to_pay)*100;

	question = {
		'type': 'single',
		'id': '0523',
		'question': 'If' +" "+ petrol_bill + ' % of an petrol bill is deducted then Rs' + deducted +" "+ 'is still to be paid .How much was the original bill',
		'options': {
			'A': bill,
			'B': bill + parseInt(Math.random()*10),
			'C': bill + parseInt(Math.random()*10),
			'D': bill - parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '05'
	}
	
	return question;
	
}

function problem0524(){
    var inputData = [{
    'over1': 10,
    'rate': 2.0,
    'over2': 40,
    'runs': 252
    },
    {
    'over1': 10,
    'rate': 3.0,
    'over2': 40,
    'runs': 262
    },
    {
    'over1': 10,
    'rate': 3.0,
    'over2': 40,
    'runs': 292
    },
    {
    'over1': 10,
    'rate': 3.0,
    'over2': 40,
    'runs': 282
    }],
    randomIndex = getRandomNumber(inputData.length),
    over1 = inputData[randomIndex]['over1'],
    over2 = inputData[randomIndex]['over2'],
    rate = inputData[randomIndex]['rate'],
    runs = inputData[randomIndex]['runs'],
    r,
    runrate,
    question = {};
    
    r=runs-(over1*rate);
    runrate=r/over2;

question = {
    'type': 'single',
    'id': '0524',
    'question': 'In the first ' + over1 + ' overs of a cricket game, the run rate was only ' + rate + '. What should be the run rate in the remaining ' + over2 + ' overs to reach the target of ' + runs + ' runs?',
    'options': {
        'A': runrate - parseInt(Math.random()*10),
        'B': runrate - parseInt(Math.random()*10),
        'C': runrate+ parseInt(Math.random()*10),
        'D': runrate
    },
    'answer': 'D',
    'author-id': '05'
}

return question;

}

function problem0525(){
    var inputData = [{
    'plane': 25,
    'helicopter': -15
    },
    {
    'plane': 6,
    'helicopter': -15
    },
    {
    'plane': 7,
    'helicopter': -15
    },
    {
    'plane':8,
    'helicopter': -14
    }],
    randomIndex = getRandomNumber(inputData.length),
    plane = inputData[randomIndex]['plane'],
    helicopter = inputData[randomIndex]['helicopter'],
    x,
    y,
    question = {};
    
    x = plane - helicopter;
    y = x - plane;

question = {
    'type': 'single',
    'id': '0525',
    'question': 'A plane speed  is ' + plane + ' km/hr and the speed of the helicopter is ' + helicopter + ' km/hr. The plane speed against the helicopter is',
    'options': {
        'A': y - parseInt(Math.random()*10),
        'B': y - parseInt(Math.random()*10),
        'C': y + parseInt(Math.random()*10),
        'D': y
    },
    'answer': 'D',
    'author-id': '05'
}

return question;

}

function problem0526(){
	var inputData = [{
		'd':500,
		't1': 2,
		't2': 4,
		},
		{
		'd':500,
		't1': 5,
		't2': 2,
		},
		{
		'd':600,
		't1': 6,
		't2': 2,
		},
		{
		'd':700,
		't1': 7,
		't2': 2,
		},
		{
        'd':800,
		't1': 8,
		't2': 2,
		}],
	 randomIndex = getRandomNumber(inputData.length),
		d= inputData[randomIndex]['d'],
		t1 = inputData[randomIndex]['t1'],
		t2 = inputData[randomIndex]['t2'],
		rate,
		question = {};

	d = parseInt(d);
	t1 = parseInt(t1);
	t2 = parseInt(t2);
	rate = (d/t1*t2);

	question = {
		'type': 'single',
		'id': '0526',
		'question': 'The speed of a boat in still water is'+ " " +t1+ 'kmph and the rate of current is'+ " " +t2+ 'kmph . The distance travelled downstream is'+ " " +d+ ' km. Find the rate?',
		'options': {
        'A': rate - parseInt(Math.random()*10),
        'B': rate,
        'C': rate + parseInt(Math.random()*10),
        'D': rate - parseInt(Math.random()*10)
		},
		'answer': 'B',
		'author-id': '05'
	}

	return question;
}

function problem0527(){
	var inputData = [{
		'base':4,
		'height':8,
		},
		{
		'base':8,
		'height':18,
		},
		{
        'base':10,
		'height':20,
		},
		{
        'base':20,
		'height':40,
		},
		{
		'base':16,
		'height':14,
		}],
	 randomIndex = getRandomNumber(inputData.length),
		base  = inputData[randomIndex]['base'],
         height  = inputData[randomIndex]['height'],
		area,
		question = {};

	base = parseInt(base);
	height = parseInt(height);
	area = (1/2*base*height);

	question = {
		'type': 'single',
		'id': '0527',
		'question': 'what is the area of a triangle with base ' +base+ 'cm and height ' +height+ 'cm?',
		'options': {
        'A': area - parseInt(Math.random()*10),
        'B': area,
        'C': area + parseInt(Math.random()*10),
        'D': area - parseInt(Math.random()*10)
		},
		'answer': 'B',
		'author-id': '05'
	}

	return question;
}

function problem0528(){
	var inputData = [{
		'typist':6,
		'pages': 600,
		'hours': 5,
		},
		{
		'typist':2,
		'pages': 700,
		'hours': 5,
		},
		{
		'typist':4,
		'pages': 800,
		'hours': 4,
		},
		{
		'typist':2,
		'pages': 900,
		'hours': 9,
		}],
		randomIndex = getRandomNumber(inputData.length),
		typist = inputData[randomIndex]['typist'],
		pages = inputData[randomIndex]['pages'],
		hours = inputData[randomIndex]['hours'],
		count,
		total,
		question = {};
	
	
	count = pages/typist;
	total = count/hours;

	question = {
		'type': 'single',
		'id': '0528',
		'question': + typist + " " +'typists can type'+ " " + pages + 'pages in ' + hours + 
					'hours.Find the average number of pages typed by each typist in an hour.',
		'options': {
			'A': total - parseInt(Math.random()*10),
			'B': total - parseInt(Math.random()*10),
			'C': total + parseInt(Math.random()*10),
			'D': total
		},
		'answer': 'D',
		'author-id': '05'
	}
	
	return question;
	
}

function problem0529(){
	var inputData = [{
		'salaryA': 2000,
		'salaryB': 6658,
		'salaryC': 4590,
		'salaryD': 2765,
		'average': 3579
		},
		{
		'salaryA': 6435,
		'salaryB': 6927,
		'salaryC': 6855,
		'salaryD': 7230,
		'average': 6500
		},
		{
		'salaryA': 5439,
		'salaryB': 3967,
		'salaryC': 4865,
		'salaryD': 1505,
		'average': 5432
		},
		{
		'salaryA': 9075,
		'salaryB': 7634,
		'salaryC': 5423,
		'salaryD': 9809,
		'average': 5000
		},
		{
		'salaryA': 6543,
		'salaryB': 6789,
		'salaryC': 9087,
		'salaryD': 6790,
		'average': 7000
		}],
		randomIndex = getRandomNumber(inputData.length),
		salaryA = inputData[randomIndex]['salaryA'],
		salaryB = inputData[randomIndex]['salaryB'],
		salaryC = inputData[randomIndex]['salaryC'],
		salaryD = inputData[randomIndex]['salaryD'],
		average = inputData[randomIndex]['average'],
		total = inputData[randomIndex]['total'],
		salary= inputData[randomIndex]['salary'],
		finalSalary,
		question = {};

	var total = parseInt(salaryA+salaryB+salaryC+salaryD),
	    salary = parseInt(average*5),
	    finalSalary = parseInt(salary - total);

	question = {
		'type': 'single',
		'id': '0529',
		'question': 'Mohan gets a salary of '+ salaryA +', '+salaryB+ ', '+salaryC+','+salaryD+ ' for 4 months. How much salary he must have in the fifth month?',
		'options': {
			'A': finalSalary,
			'B': finalSalary - parseInt(Math.random()*10),
			'C': finalSalary + parseInt(Math.random()*10),
			'D': finalSalary - parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '05'
	}
	
	return question;
}

function problem0530(){
	var inputData = [{
		'anu':1000,
		'banu':2000,
		'sonu':3000
		},
		{
		'anu':4000,
		'banu':5000,
		'sonu':6000
		},
		{
		'anu':7000,
		'banu':8000,
		'sonu':9000
		},
		{
		'anu':8000,
		'banu':4000,
		'sonu':4000
		}],
		randomIndex = getRandomNumber(inputData.length),
		anu = inputData[randomIndex]['anu'],
		banu = inputData[randomIndex]['banu'],
		sonu = inputData[randomIndex]['sonu'],
		percentage,
		question = {};


	anu = parseInt(anu);
	banu = parseInt(banu);
	sonu = parseInt(sonu);
	election  = anu+banu+sonu;
	percentage =  (anu/election)*100;


	question = {
		'type': 'single',
		'id': '0530',
		'question':'Three candidates, anu, banu & sonu contested in  an election and received ' 
					+ anu + ','+ banu + 'and' + sonu + ' votes respectively. What percent of the total votes did anu gets?',
		'options': {
			'A': percentage - parseInt(Math.random()*10),
			'B': percentage - parseInt(Math.random()*10),
			'C': percentage + parseInt(Math.random()*10),
			'D': percentage
		},
		'answer': 'D',
		'author-id': '05'
	}
	
	return question;
	
}

function problem0531(){
	var inputData = [{
		'group_women':30,
		'women_years': 16,
		'women_leave': 19,
		'new_woman': 15.8
		},
		{
		'group_women':30,
		'women_years': 17,
		'women_leave': 18,
		'new_woman': 16.9
		},
		{
		'group_women':30,
		'women_years': 18,
		'women_leave': 28,
		'new_woman': 17.5
		},
		{
		'group_boy':40,
		'boys_years': 16,
		'boys_leave': 17,
		'new_boy': 15.875
		}],
		randomIndex = getRandomNumber(inputData.length),
		group_women = inputData[randomIndex]['group_women'],
		women_years = inputData[randomIndex]['women_years'],
		women_leave = inputData[randomIndex]['women_leave'],
		new_woman = inputData[randomIndex]['new_woman'],
		age,
		group,
		question = {};
	
	group_women = parseInt(group_women);
	women_years = parseInt(women_years);
	women_leave = parseInt(women_leave);
	new_woman = parseInt(new_woman);
	age = group_women*women_years;
	group = (new_woman*group_women) - age + women_leave;

	question = {
		'type': 'single',
		'id': '0531',
		'question': 'Average age of a group of ' +" "+ group_women +' women is ' + women_years + ' years. A woman of age '+ women_leave + 
					' leaves the group and a new woman joins the group. If the new average age of the group is '+ new_woman + 
					' years, find the age of the new woman?',
		'options': {
			'A': group - parseInt(Math.random()*10),
			'B': group - parseInt(Math.random()*10),
			'C': group,
			'D': group + parseInt(Math.random()*10)
		},
		'answer': 'C',
		'author-id': '05'
	}
	
	return question;
	
}


function problem0532(){
	var inputData = [{
		'town_increased':656000,
		'decade': 234000
		},
		{
		'town_increased':654000,
		'decade': 543000
		},
		{
		'town_increased':785000,
		'decade': 256000
		},
		{
		'town_increased':175000,
		'decade': 262200
		}],
		randomIndex = getRandomNumber(inputData.length),
		town_increased = inputData[randomIndex]['town_increased'],
		decade = inputData[randomIndex]['decade'],
		percentage_increase,
		Increase_percentage,
		required_average,
		question = {};
	
	town_increased = parseInt(town_increased);
	decade = parseInt(decade);
	percentage_increase = (town_increased-decade);
	Increase_percentage = (percentage_increase/town_increased)*100;
	required_average = (Increase_percentage/10);

	question = {
		'type': 'single',
		'id': '0532',
		'question': 'The population of a town increased from  ' + town_increased + ' to ' + decade + 
					' in a decade. The average percent increased of population per year is:',
		'options': {
			'A': required_average - parseInt(Math.random()*10),
			'B': required_average - parseInt(Math.random()*10),
			'C': required_average + parseInt(Math.random()*10),
			'D': required_average
		},
		'answer': 'D',
		'author-id': '05'
	}
	
	return question;
	
}

function problem0533(){
	var inputData = [{
		'parallelLine':280,
		'sameDirection':100,
		'trainSlower':40
		},
		{
		'parallelLine':280,
		'sameDirection':100,
		'trainSlower':56
		},
		{
		'parallelLine':280,
		'sameDirection':100,
		'trainSlower': 80
		},
		{
		'parallelLine':280,
		'sameDirection':100,
		'trainSlower':36
		}],
		randomIndex = getRandomNumber(inputData.length),
		parallelLine = inputData[randomIndex]['parallelLine'],
		sameDirection = inputData[randomIndex]['sameDirection'],
		trainSlower = inputData[randomIndex]['trainSlower'],
		train,
		meterSec,
		x,
		length,
		question = {};
	
	parallelLine = parseInt(parallelLine);
	sameDirection = parseInt(sameDirection);
	trainSlower = parseInt(trainSlower),
	train = parallelLine - sameDirection;
	meterSec = [train*(5/18)];
	x = meterSec * trainSlower;
	length=x/2;
	


	question = {
		'type': 'single',
		'id': '0533',
		'question': 'Two trains of equal lengths are running on parallel lines in the same direction at the rate of' + parallelLine + 'km/hr and' 
					+ sameDirection + 'km/hr. The faster train passes the slower train in' + trainSlower + 'seconds. What is the length of the each trains ?',
		'options': {
			'A': length - parseInt(Math.random()*10),
			'B': length + parseInt(Math.random()*10),
			'C': length,
			'D': length - parseInt(Math.random()*10)
		},
		'answer': 'C',
		'author-id': '05'
	}
	
	return question;
	
}

function problem0534(){
	var inputData = [{
		'buys':50,
		'sell': 34,
		'newBuy': 16,
		'newSell':90
		},
		{
		'buys':80,
		'sell': 60,
		'newBuy': 12,
		'newSell':30
		},
		{
		'buys':10,
		'sell': 40,
		'newBuy': 10,
		'newSell':80
		},
		{
		'buys':16,
		'sell': 20,
		'newBuy': 32,
		'newSell': 40
		}],
		randomIndex = getRandomNumber(inputData.length),
		buys = inputData[randomIndex]['buys'],
		sell = inputData[randomIndex]['sell'],
		newBuy = inputData[randomIndex]['newBuy'],
		newSell = inputData[randomIndex]['newSell'],
		cp,
		sp,
		profit,
		profit_percentage,
		question = {};

	cp = newBuy + buys;
	sp = newSell + sell;
	profit = sp - cp;
	profit_percentage = (profit/cp)*100;

	question = {
		'type': 'single',
		'id': '0534',
		'question': 'Sathya buys a Dog for ' + buys + ' pounds. after one year, he sells it for ' + sell + 
					' pounds. after one year, again he buys the same Dog at ' + newBuy + 
					' pounds and sells it for ' + newSell + 
					' pounds. what is the overall profit percent for sathya over both the transactions?',
		'options': {
			'A': profit_percentage - parseInt(Math.random()*10),
			'B': profit_percentage - parseInt(Math.random()*10),
			'C': profit_percentage,
			'D': profit_percentage + parseInt(Math.random()*10)
		},
		'answer': 'C',
		'author-id': '05'
	}
	
	return question;
	
}

function problem0535(){
	var inputData = [{
		's':8,
		'm':2,
		'e':24
		},
		{
		's':10,
		'm':5,
		'e':30
		},
		{
		's':12,
		'm':7,
		'e':55
		},	
		{
		's':14,
		'm':6,
		'e':45
		}],
		randomIndex = getRandomNumber(inputData.length),
		s= inputData[randomIndex]['s'],
		m= inputData[randomIndex]['m'],
		e=inputData[randomIndex]['e'],
		total,
		question = {};
		
	s=parseInt(s);
	m=parseInt(m);
	e=parseInt(e);
	total=(s*m)+e;
		
	question={
		'type':'single',
		'id':'0535',
		'question':'The average weight of ' + s + ' person increased by ' + m + 
					' kg when a new person comes in place of one of them weighting ' + e + ' of the new person. What is the age of new person?',
		'option':
		{
			'A':total,
			'B':total + parseInt(Math.random()*10),
			'C':total - parseInt(Math.random()*10),			
			'D':total - parseInt(Math.random()*10),
		},
		'answer':'A',
		'author-id':'05'
		}
		return question;
}

function problem0536(){
	var inputData = [{
		'input1': 160,
		'input2': 100
		},
		{
		'input1': 220,
		'input2': 100
		},
		{
		'input1': 300,
		'input2': 200
		},
		{
		'input1': 430,
		'input2': 400
		},
		{
		'input1': 200,
		'input2': 100
		}],
		randomIndex = getRandomNumber(inputData.length),
		input1 = inputData[randomIndex]['input1'],
		input2 = inputData[randomIndex]['input2'],
	    precentage,
		
		
		input1 = parseInt(input1),
		input2 = parseInt(input2),
		precentage = (input1 - input2)/input1,
		precentage = precentage*100,
		
		question = {
		'type': 'single',
		'id': '0536',
		'question': 'A Boy multiplied a number by ' + input2 + 'instead of '+input1+ 'what is the percentage error in the calculation?',
		'options': {
			'A': precentage - parseInt(Math.random()*10),
			'B': precentage - parseInt(Math.random()*10),
			'C': precentage + parseInt(Math.random()*10),
			'D': precentage,
		},
		'answer': 'A',
		'author-id': '05',
	}
	
	return question;
}

function problem0537(){
	var inputData = [{
		'cp': 2054,
		'p': 65
		},
		{
		'cp': 6540,
		'p': 23
		},
		{
		'cp': 2320,
		'p': 89
		},
		{
		'cp': 8640,
		'p': 67
		}],
		randomIndex = getRandomNumber(inputData.length),
		cp= inputData[randomIndex]['cp'],
		p = inputData[randomIndex]['p'],
		profit,
		sp,
		question = {};
		
	cp = inputData[randomIndex]['cp'],
	p = inputData[randomIndex]['p'],
	profit = (100+p)/100;
	sp = profit*cp;


	question = {
		'type': 'single',
		'id': '0537',
		'question': 'Anitha bought a Fridge for RS ' + cp + ' and sold it Renu ,if Anitha earned a profit of ' + p + 
					'% profit.what is the sellingprice of Fridge?',
		'options': {
			'A': sp, 
			'B': sp - parseInt(Math.random()*10),
			'C': sp + parseInt(Math.random()*10),
			'D': sp - parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '05'
	}
	
	return question;
	
}

function problem0538(){
		var inputData = [{
			't1':45,
			't2':53,
			'd':700,
			't':42
			},
			{
			't1':84,
			't2':98,
			'd':60,
			't':35
			},
			{
			't1':105,
			't2':110,
			'd':500,
			't':23
			},
			
			{
			't1':102,
			't2':23,
			'd':300,
			't':58
			}],
			randomIndex = getRandomNumber(inputData.length),
			t1 = inputData[randomIndex]['t1'],
			t2 = inputData[randomIndex]['t2'],
		    d = inputData[randomIndex]['d'],
			t = inputData[randomIndex]['t'],
			question= {};
			
		t1 = parseInt(t1);
		t2 = parseInt(t2);
		d = parseInt(d);
		t =parseInt( t);
		speed = (d/t)/t2;
		ratio = t1*speed;
					
			
	  question= {
			'type': 'single',
			'id': '0538',
			'question': 'The ratio between the speed of two cars is ' + t1 + ':' + t2 +
			'.If the second car runs '+d+' km in '+t+'hours, then the speed of the first car is?',
			'options': {
				'A':ratio-parseFloat(Math.random()*10),
				'B':ratio-parseInt(Math.random()*10),
				'C':ratio,
				'D':ratio+parseInt(Math.random()*10)
			},
			'answer': 'C',
			'author-id': '05'
		}
		return question;
	
}

function problem0539(){
   	var inputData = [{
		'liquid':25
	},
	{
	'liquid':35
    },
	{
	'liquid':45
    },
	{
	'liquid':15
    }],
	randomIndex = getRandomNumber(inputData.length),
	liquid = inputData[randomIndex]['liquid'],
	increase,
	question = {};
	liquid = parseInt(liquid);

	increase=((liquid/liquid+100)*100);
	question={
		'type':'single',
		'id':'213',
		'question':'In the budget the price of coconut oil is increase by %.'+ liquid +' By how much precent must a person reduce his consumption so that his expensive on it does not increase',
		'options':
		{  
		'A':liquid,
		'B':liquid - parseInt(Math.random()*10),
		'C':liquid + parseInt(Math.random()*10),
		'D':liquid - parseInt(Math.random()*10),
	},
	'answer':'A',
	'author-id':'05'
}
return question;
}


function problem0540(){
	var inputData = [{
		'score':100,
		'boundaries':4,
		'six':4
	},
	{
	'score':120,
	'boundaries':3,
		'six':8
    },
	{
	'score':140,
	'boundaries':4,
		'six':9
    },
	{
	'score':150,
	'boundaries':7,
	'six':3
    }],
	
   randomIndex = getRandomNumber(inputData.length),
   score = inputData[randomIndex]['score'],
   boundaries = inputData[randomIndex]['boundaries'],
   six = inputData[randomIndex]['six'],
	total,
	running,
	question = {};
	
	score = parseInt(score);
	boundaries = parseInt(boundaries*4);
	six = parseInt(six*6);
	total = score-(boundaries+six);
	running = (total/score)*100;
	
	question={
		'type':'single',
		'id':'0540',
		'question':' A batsman scored '+ score +' runs which included '+ boundaries+' and '+ six+'.what present of his total score did he make by running between the wickets',
		'optins':{
			'A':running - parseInt(Math.random()*10),
			'B':running + parseInt(Math.random()*10),
			'C':running,
			'D':running - parseInt(Math.random()*10),
		},
		'amswer':'C',
		'author-id':'05'
	}
	return question;
	
}




















