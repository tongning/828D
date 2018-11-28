function Population( name, mean, stdv, units, prodPeriod, processCost, sprite ) {
	this.name = name;
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


function Project( title, description, funding, population, recommendedRep ) {
	this.title = title;
	this.fundingAward = funding;
	this.population = population;
	this.recommendedRep = recommendedRep;
	this.description = description;
	this.envName = 'Africa';
	this.envTilemap = 'a.png';
	// reputation award 
}


Project.prototype = {
	apply:function () {
		// determines whether the function is valid
		// jStat.normal.sample(,)
		return True;
	},
}


