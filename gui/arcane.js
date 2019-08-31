let vj = new Arcane(20,0,14,"VJ");
let cc = new Arcane(20,0,15,"Chu Chu");
let lc = new Arcane(16,0,9,"Lachelein");
let ac = new Arcane(18,0,10,"Arcana");
let mr = new Arcane(14,0,8,"Morass");
let es = new Arcane(12,0,8,"Esfera");

document.getElementById("vjname").innerHTML = vj.name;
document.getElementById("vjlvl").innerHTML = vj.level;
document.getElementById("vjxp").innerHTML = vj.exp;

document.getElementById("ccname").innerHTML = cc.name;
document.getElementById("cclvl").innerHTML = cc.level;
document.getElementById("ccxp").innerHTML = cc.exp;

document.getElementById("lcname").innerHTML = lc.name;
document.getElementById("lclvl").innerHTML = lc.level;
document.getElementById("lcxp").innerHTML = lc.exp;

document.getElementById("acname").innerHTML = ac.name;
document.getElementById("aclvl").innerHTML = ac.level;
document.getElementById("acxp").innerHTML = ac.exp;

document.getElementById("mrname").innerHTML = mr.name;
document.getElementById("mrlvl").innerHTML = mr.level;
document.getElementById("mrxp").innerHTML = mr.exp;

document.getElementById("esname").innerHTML = es.name;
document.getElementById("eslvl").innerHTML = es.level;
document.getElementById("esxp").innerHTML = es.exp;

var arcane = (vj.level + cc.level + lc.level + ac.level + mr.level + es.level + 12) * 10;
console.log(vj.level + cc.level)
console.log(arcane)
document.getElementById("arc").innerHTML = arcane;
document.getElementById("stat").innerHTML = "+" + (arcane * 10);

var MAX = 2679;

function Arcane(level,exp,growth,name) {
	this.level = level;
	this.exp = exp;
	this.growth = growth;
	this.name = name;


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

function getArcane() {
	var arcane = (vj.level + cc.level + lc.level + ac.level + mr.level + es.level + 12) * 10;
	document.getElementById("arc").innerHTML = arcane;
	document.getElementById("stat").innerHTML = "+" + (arcane * 10);
}

function update() {
	updatevj();
	updatecc();
	updatelc();
	updateac();
	updatemr();
	updatees();
	getArcane();
}


function updatevj() {
	document.getElementById("vjname").innerHTML = vj.name;
	document.getElementById("vjlvl").innerHTML = vj.level;
	document.getElementById("vjxp").innerHTML = vj.exp;
}

function updatecc() {
	document.getElementById("ccname").innerHTML = cc.name;
	document.getElementById("cclvl").innerHTML = cc.level;
	document.getElementById("ccxp").innerHTML = cc.exp;
}

function updatelc() {
	document.getElementById("lcname").innerHTML = lc.name;
	document.getElementById("lclvl").innerHTML = lc.level;
	document.getElementById("lcxp").innerHTML = lc.exp;
}

function updateac() {
	document.getElementById("acname").innerHTML = ac.name;
	document.getElementById("aclvl").innerHTML = ac.level;
	document.getElementById("acxp").innerHTML = ac.exp;
}


function updatemr() {
	document.getElementById("mrname").innerHTML = mr.name;
	document.getElementById("mrlvl").innerHTML = mr.level;
	document.getElementById("mrxp").innerHTML = mr.exp;
}


function updatees() {
	document.getElementById("esname").innerHTML = es.name;
	document.getElementById("eslvl").innerHTML = es.level;
	document.getElementById("esxp").innerHTML = es.exp;
}
