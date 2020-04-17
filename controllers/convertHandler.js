/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
  	let inputString = input;
  	let regex = /[a-zA-Z]+/
    let inputNumberAsString = inputString.replace(regex, "");
    let inputNumber = eval(inputNumberAsString) || 1;
    return inputNumber;
  };
  
  this.getUnit = function(input) {
  	let inputUnit;
  	if (input.indexOf("km") != -1) {
  		inputUnit = "km";
  	} else if (input.indexOf("mi") != -1) {
  		inputUnit = "mi";
  	} else if (input.indexOf("gal") != -1) {
  		inputUnit = "gal";
  	} else if (input.indexOf("L") != -1) {
  		inputUnit = "L";
  	} else if (input.indexOf("kg") != -1) {
  		inputUnit = "kg";
  	} else if (input.indexOf("lbs") != -1) {
  		inputUnit = "lbs";
  	} else {
  		inputUnit = "Invalid unit";
  	}
    return inputUnit;
  };
  
  this.getReturnUnit = function(initUnit) {
    let returnUnit;

    switch (initUnit) {
    	case "km":
	    	returnUnit = "mi";
	    	break;
    	case "mi":
	    	returnUnit = "km";
	    	break;
    	case "gal":
	    	returnUnit = "L";
	    	break;
    	case "L":
	    	returnUnit = "gal";
	    	break;
    	case "kg":
	    	returnUnit = "lbs";
	    	break;
    	case "lbs":
	    	returnUnit = "kg";
	    	break;
    }
    
    return returnUnit;
  };

  this.spellOutUnit = function(unit) {
    var result;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let returnNum;

    switch (initUnit) {
    	case "km":
	    	returnNum = initNum/miToKm;
	    	break;
    	case "mi":
	    	returnNum = initNum*miToKm;
	    	break;
    	case "gal":
	    	returnNum = initNum*galToL;
	    	break;
    	case "L":
	    	returnNum = initNum/galToL;
	    	break;
    	case "kg":
	    	returnNum = initNum/lbsToKg;
	    	break;
    	case "lbs":
	    	returnNum = initNum*lbsToKg;
	    	break;
    }
    
    return returnNum;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
