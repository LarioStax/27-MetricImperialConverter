/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
  	if (input) {
	  	let inputNumber;
	  	let inputString = input;
	  	let regex = /[a-zA-Z]+/ //regex to match all leters
	    let inputNumberAsString = inputString.replace(regex, "");
	    
	    try {
	    	eval(inputNumberAsString);
	    } catch (error) {
	    	if (error instanceof SyntaxError) {
	    		return inputNumber = "Invalid number";
	    	}
	    }
	    
	    inputNumber = eval(inputNumberAsString) || 1;
	    return Number(inputNumber.toFixed(5).replace(/0+$/, "").replace(/\.$/, ""));  		
  	}
  };
  
  this.getUnit = function(input) {
  	if (input) {
	  	let inputUnit;
	  	let inputLowerCase = input.toLowerCase();
	  	if (inputLowerCase.indexOf("km") != -1) {
	  		inputUnit = "km";
	  	} else if (inputLowerCase.indexOf("mi") != -1) {
	  		inputUnit = "mi";
	  	}  else if (inputLowerCase.indexOf("kg") != -1) {
	  		inputUnit = "kg";
	  	} else if (inputLowerCase.indexOf("lbs") != -1) {
	  		inputUnit = "lbs";
	  	} else if (inputLowerCase.indexOf("gal") != -1) {
	  		inputUnit = "gal";
	  	} else if (inputLowerCase.indexOf("l") != -1) {
	  		inputUnit = "l";
	  	} else {
	  		inputUnit = "Invalid unit";
	  	}
	    return inputUnit;  		
  	}

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
	    	returnUnit = "l";
	    	break;
    	case "l":
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
    let fullUnit;

    switch (unit) {
    	case "km":
	    	fullUnit = "kilometers";
	    	break;
    	case "mi":
	    	fullUnit = "miles";
	    	break;
    	case "gal":
	    	fullUnit = "gallons";
	    	break;
    	case "l":
	    	fullUnit = "liters";
	    	break;
    	case "lbs":
	    	fullUnit = "pounds";
	    	break;
    	case "kg":
	    	fullUnit = "kilograms";
	    	break;
    }

    return fullUnit;
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
    	case "kg":
	    	returnNum = initNum/lbsToKg;
	    	break;
    	case "lbs":
	    	returnNum = initNum*lbsToKg;
	    	break;
	    case "l":
	    	returnNum = initNum/galToL;
	    	break;
	    default:
	    	return;
    }
    
    return Number(returnNum.toFixed(5).replace(/0+$/, "").replace(/\.$/, ""));
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
  	if (initNum && initUnit && returnNum && returnUnit) {
  		let fullString = `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
    	return fullString;
  	}

  };
  
}

module.exports = ConvertHandler;
