let vj = new Arcane(1,0,1,"Vanishing Journey");
console.log(vj.name)
document.getElementById("vjname").innerHTML = vj.name;
document.getElementById("vjlvl").innerHTML = vj.level;
document.getElementById("vjxp").innerHTML = vj.exp;

var MAX = 2679;

function Arcane(level,exp,growth,name) {
	this.level = level;
	this.exp = exp;
	this.growth = growth;
	this.name = name;

	this.addExp= function() {
		return ++this.exp;
	};

	this.getName = function() {
		document.getElementById("vjname").innerHTML = this.name;
		return this.name;
	};

	this.getTotalExp = function() {
		var xp = 0;
		var i;
		for (i = 1; i < this.level; i++) {
			xp += Math.pow(i, 2) + 11;
		}
		xp += this.exp;
		//document.getElementById("vjname").innerHTML = xp.toString();
		return xp;
	};

	this.findTotalExp = function(inputLevel, inputExp) {
		var xp = 0;
		var i;
		for (i = 1; i < inputLevel; i++) {
			xp += Math.pow(i, 2) + 11;
		}
		xp += inputExp;
		return xp;
	}

	this.getRemainingExp = function() {
		var remaining = MAX - this.getTotalExp;
		return remaining;
	};

	this.getRemainingToLevel = function() {
		var nextLevel = this.level + 1;
		var expGoal = this.findTotalExp(nextLevel, 0);
		var difference = expGoal - this.getTotalExp();
		return difference;
	}

	this.addExp = function(amount) {
		if (this.level < 20) {
			if (amount >= this.getRemainingToLevel()) {
				var newxp = amount - this.getRemainingToLevel();
				this.level += 1;
				this.exp = 0;

				if (this.level < 20 && newxp > 0) {
					this.addExp(newxp);
				}
			}
			else {
				this.exp += amount;
			}
		}
	};

	this.finishDailies = function() {
		this.addExp(this.growth);
		update();
	}
}

function update() {
	document.getElementById("vjname").innerHTML = vj.name;
	document.getElementById("vjlvl").innerHTML = vj.level;
	document.getElementById("vjxp").innerHTML = vj.exp;
}
