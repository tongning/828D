function Population( name, mean, stdv, prodPeriod, processCost, sprite ) {
	this.name = name; 
	this.mean = mean;
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


function Project( name, description, funding, population, recommendedRep ) {
	this.name = name;
	this.fundingAward = funding;
	this.population = population;
	this.recommendedRep = recommendedRep;
	this.description = description;
	// reputation award 
}


Project.prototype = {
	apply:function () {
		// determines whether the function is valid
		// jStat.normal.sample(,)
		return True;
	},
}


