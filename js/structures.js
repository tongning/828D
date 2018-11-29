function Environment( key, tilemap, tiles, moveMultiplier=1, prodMultiplier=1 ) {
	this.key = key;							// keyword of the tilemap used by the environment
	this.tilemap = tilemap;					// name of the tilemap file used by this environment 	
	this.tiles = tiles;						// name of the tilemap image file used by this map
	this.moveMultiplier = moveMultiplier;	// multiplier to the movement speed of the player
	this.prodMultiplier = prodMultiplier;	// multiplier to production rate of samples
}

Environment.prototype = {
    constructor: Environment,
}


function Grant( recommendedRep, duration=30, maxFunding ) {
	this.recommendedRep = recommendedRep;
	this.maxFunding = maxFunding
	this.duration = duration;
}

Grant.prototype = {
	constructor: Grant,
	generateDeadline: function() {
		return
	},
}


function Population( key, mean, stdv, units, prodPeriod, processCost, sprite ) {
	this.key = key;
	this.mean = mean;
	this.units = units; 
	this.stdv = stdv;
	this.prodPeriod = prodPeriod; 		// the average expected time to generate a single sample on the map
	this.processCost = processCost; 	// cost to process a single sample from this population
	this.sprite = sprite;
}

Population.prototype = {
    constructor: Population,
    // saveScore:function (theScoreToAdd)  {
    //     this.quizScores.push(theScoreToAdd)
    // },

    // changeEmail:function (newEmail)  {
    //     this.email = newEmail;
    //     return "New Email Saved: " + this.email;
    // }
}


function Project( title, description, funding, population, environment, repMultiplier ) {
	this.title = title;
	this.description = description;
	this.fundingAward = funding;
	this.population = population;
	this.environment = environment;
	this.repMultiplier = repMultiplier;
	
	// reputation award 
}

Project.prototype = {
	apply:function () {
		// determines whether the function is valid
		// jStat.normal.sample(,)
		return True;
	},
}


