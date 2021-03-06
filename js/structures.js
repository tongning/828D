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


function Grant( recommendedRep, maxFunding, duration=30 ) {
	this.recommendedRep = recommendedRep;
	this.maxFunding = maxFunding;
	this.startDate = new Date(game.date.toLocaleDateString());
	this.propDeadline = this.generateDeadline(duration);			// deadline to submit a proposal
	console.log('New grant generated.\nStart date set to ' + this.startDate.toLocaleDateString() +
		'\nProposal deadline set to ' + this.propDeadline.toLocaleDateString());
}

Grant.prototype = {
	constructor: Grant,	

	generateDeadline: function( duration ) {
		var deadline = new Date(this.startDate.toDateString());
		deadline.setTime(deadline.getTime() + (duration * 24 * 60 * 60 * 1000));
		return deadline;
	},

	generateProject: function() {
	/* Generates a project with funding amount and a deadline. Funding generated 
	 * based on the recommended reputation of the project and the reputation of
	 * the player.
	 */

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


function Project( title, funding, population, environment, repMultiplier, duration=30 ) {
	this.fundingAward = funding;
	this.population = population;
	this.environment = environment;
	this.repMultiplier = repMultiplier;
	this.title = title;
	
	// reputation award 
}

Project.prototype = {
	constructor: Project,

	calcReqFunding: function() {
	/* Calculates the minimum funding requirement based on expercted number of
	 * required samples for a positive reputation result and the cost to process 
	 * each sample.
	 */

	 	return
	}
}


