/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    let result;
    
    return result;
  };
  
  this.getUnit = function(input) {
  	let result;
  	if (input.indexOf("km") != -1) {
  		result = "km";
  	} else if (input.indexOf("mi") != -1) {
  		result = "mi";
  	} else if (input.indexOf("gal") != -1) {
  		result = "gal";
  	} else if (input.indexOf("L") != -1) {
  		result = "L";
  	} else if (input.indexOf("kg") != -1) {
  		result = "kg";
  	} else if (input.indexOf("lbs") != -1) {
  		result = "lbs";
  	} else {
  		result = "Invalid unit";
  	}
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
