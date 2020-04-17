/*
*
*
*       FILL IN EACH UNIT TEST BELOW COMPLETELY
*       -----[Keep the tests in the same order!]----
*       (if additional are added, keep them at the very end!)
*/

var chai = require('chai');
var assert = chai.assert;
var ConvertHandler = require('../controllers/convertHandler.js');

var convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
  
  suite('Function convertHandler.getNum(input)', function() {
    
    test('Whole number input', function(done) {
      var input = '32L';
      assert.equal(convertHandler.getNum(input),32);
      done();
    });
    
    test('Decimal Input', function(done) {
      let input = "3.5kg";
      assert.equal(convertHandler.getNum(input), 3.5);
      done();
    });
    
    test('Fractional Input', function(done) {
      let input = "27/9"
      assert.equal(convertHandler.getNum(input), 3)
      done();
    });
    
    test('Fractional Input w/ Decimal', function(done) {
      let input = "27.5/5";
      assert.equal(convertHandler.getNum(input), 5.5)
      done();
    });
    
    test('Invalid Input (double fraction)', function(done) { //why would this be invalid?!
      let input = "25/5/5";
      assert.equal(convertHandler.getNum(input), 1)
      done();
    });
    
    test('No Numerical Input', function(done) {
      let input = "";
      assert.equal(convertHandler.getNum(input), 1);
      done();
    }); 
    
  });
  
  suite('Function convertHandler.getUnit(input)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
      input.forEach(function(ele, index) {
        assert.equal(convertHandler.getUnit(ele), input[index].toLowerCase())
      });
      done();
    });
    
    test('Unknown Unit Input', function(done) {
      let input = "";
      assert.equal(convertHandler.getUnit(input), "Invalid unit");
      done();
    });  
    
  });
  
  suite('Function convertHandler.getReturnUnit(initUnit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg'];
      var expect = ['l','gal','km','mi','kg','lbs'];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.getReturnUnit(ele), expect[i]);
      });
      done();
    });
    
  });  
  
  suite('Function convertHandler.spellOutUnit(unit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      const input = ["gal", "l", "mi", "km", "lbs", "kg"]
      const expect = ["gallons", "liters", "miles", "kilometers", "pounds", "kilograms"]
      input.forEach(function(ele, index) {
      	assert.equal(convertHandler.spellOutUnit(ele), expect[index]);
      });
      done();
    });
    
  });
  
  suite('Function convertHandler.convert(num, unit)', function() {
    
    test('Gal to L', function(done) {
      var input = [5, 'gal'];
      var expected = 18.92705;
      let returnedNumber = Number(convertHandler.convert(input[0],input[1]));
      assert.approximately(returnedNumber, expected, 0.1); //0.1 tolerance
      done();
    });
    
    test('L to Gal', function(done) {
      let input = [5, "l"];
      let expected = 1.3209;
      let returnedNumber = Number(convertHandler.convert(input[0],input[1]));
      assert.approximately(returnedNumber, expected, 0.1); //0.1 tolerance
      done();
    });
    
    test('Mi to Km', function(done) {
      let input = [5, "mi"];
      let expected = 8.0467;
      let returnedNumber = Number(convertHandler.convert(input[0],input[1]));
      assert.approximately(returnedNumber, expected, 0.1); //0.1 tolerance
      done();
    });
    
    test('Km to Mi', function(done) {
      let input = [5, "km"];
      let expected = 3.1069;
      let returnedNumber = Number(convertHandler.convert(input[0],input[1]));
      assert.approximately(returnedNumber, expected, 0.1); //0.1 tolerance
      done();
    });
    
    test('Lbs to Kg', function(done) {
      let input = [5, "lbs"];
      let expected = 2.268;
      let returnedNumber = Number(convertHandler.convert(input[0],input[1]));
      assert.approximately(returnedNumber, expected, 0.1); //0.1 tolerance
      done();
    });
    
    test('Kg to Lbs', function(done) {
      let input = [5, "kg"];
      let expected = 11.0231;
      let returnedNumber = Number(convertHandler.convert(input[0],input[1]));
      assert.approximately(returnedNumber, expected, 0.1); //0.1 tolerance
      done();
    });
    
  });

});