/*
    DATA TYPES
    
    At the bottom of this file is a test suite.
    Your task is to make these tests pass.
    Open oppgaver.html (located in the root project folder) 
    with Chrome to run the tests and visually see the results.

    Read the test description to learn how to make it pass!
    (modifying the tests is very bad and definately frowned upon or worse)
*/

var aNumber;
var aBoolean;
var aString;
// should be computed then converted to String
var aStringlyTypedNumber;

var anObject;

var anArray;

test('Datatypes', function() {
    equal(typeof aNumber, 'number', 'aNumber must be a number');

    equal(typeof aBoolean, 'boolean', 'aBoolean must be a boolean');

    equal(typeof aString, 'string', 'aString must be a string');    
    strictEqual(aStringlyTypedNumber, '56088', 'aStringlyTypedNumber should be the product of 123 and 456');    

    equal(typeof anObject, 'object', 'anObject must be an object');    
    equal(Object.keys(anObject).length, 3, 'anObject must have three properties');    
    equal(anObject.company, 'BEKK', 'newlyhired at the right company');    
    equal(anObject.awesome, true, 'newlyhired should be awesome');    
    equal(anObject.level, '1', 'newlyhired should be low level');    
    
    ok(Array.isArray(anArray), 'anArray is an array');    
    equal(anArray.length, 5, 'anArray contains five things');    
})