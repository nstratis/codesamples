/* global console */
/* eslint vars-on-top:0, object-shorthand:0, prefer-spread:0,
no-useless-return:0, no-unused-vars:0, one-var:0 */
(function() {
  // Nikolas Stratis - Digital Media Engineer

  /*
  ----------------------------------------------------------------
  PUBLIC AND PRIVATE
  This sample demonstrates creating public and private functions
  in JavaScript, using a closure to return the public method
  and nesting functions to ensure they are private and only
  accessible within the scope of the parent function
  ----------------------------------------------------------------
  */
  var myObj = (function() {
    // Private var
    var privateVar = 'I am private';
    console.log('privateVar only accessible within the scope of the function: ', privateVar);
    // Private function
    function privateFnc() {
      return 'I am a private fnc';
    }
    console.log('privateFnc only accessible within the scope of the function: ', privateFnc());
    // Closure for creating the accessible properties/methods
    return {
        // Public variable
        publicVar: 'I am public',
        // Public function
        publicFnc: function() {
          return 'I am a public fnc';
        }
    };
  }());

  console.log(myObj.privateVar); // outputs undefined
  console.log(myObj.publicVar); // outputs I am public
  console.log(myObj.privateFnc); // outputs undefined
  console.log(myObj.publicFnc); // ouputs fnc()

  /*
  ----------------------------------------------------------------
  OBJECT EXTENSION
  This sample demonstrates extending the built in JavaScript Array
  Object with a new method, you may call this a polyfil or monkey patching
  if used wisely it can be powerful, overuse is not recommended
  ----------------------------------------------------------------
  */
  // Add a new method to the Array prototype
  // Concatenate the array to itself
  /* eslint-disable no-extend-native */
  Array.prototype.duplicate = function() { return this.concat(this); };
  console.log([1, 2, 3, 4].duplicate());
  // console.log([1, 2, 3, 4].duplicate()); // outputs [1, 2, 3, 4, 1, 2, 3, 4]

  /*
  ----------------------------------------------------------------
  INHERITANCE
  This example demonstrates compositional inheritance whereby an object
  is created with the properties of several other objects
  ----------------------------------------------------------------
  */
  // The main extend function
  var extend = function(objToExtend) {
    // Convert the arguments object to an array
    var args = Array.prototype.slice.call(arguments);
    // Apply the arguments to the assign function call
    return Object.assign.apply(Object, args);
  };

  // Default object 1
  var firstObject = {
    firstMethod: function() {
      return 'First Object';
    },
    randomNonsense: {
      what: 'when'
    }
  };
  // Default object 2
  var secondObject = {
    secondMethod: function() {
      return 'Second Object';
    }
  };
  // Third object which is initialized with the properties of
  // the first 2 objects;
  var thirdObject = extend({}, firstObject, secondObject);

  console.log(thirdObject.firstMethod());
  console.log(thirdObject.secondMethod());
  console.log(thirdObject.randomNonsense.what);

  /*
   * Additional Examples of creating public and private properties
   * A private variable called 'privateVar' with the value 'I am private'
   * A public variable called 'publicVar' with the value 'I am public'
   * A private function called 'privateFnc' that when called outputs 'I am a private fnc'
   * A public function called 'publicFnc' that when called outputs 'I am a public fnc'
   */

  // console.log(myObj.privateVar); // outputs undefined
  // Expected since private functions and variable are only accessible within
  // the scope of the function they were declared within. The variable value
  // will also be shared across instantiations of the function.
  function MyObj() {
    // Inaccessible variable, only function defined as nested function
    // will be able to access it and the value will be passed to each instance
    var privateVar = 'I am private';
    console.log('privateVar only accessible within the scope of the function: ', privateVar);
  }
  // Given there is no prototypal chaining I shall forgoe
  // Object.create and stick with 'new' for the purpose of this demonstration
  var obj = new MyObj();
  // Check to determine if it is accessible
  if (obj.privateVar === undefined) {
    console.log('privateVar is not accessible');
  }

  function MyObj2() {
    // Inaccessible variable
    this.publicVar = 'I am public';
  }
  // OR
  // myObj2.prototype.publicVar = "I am public";
  obj = new MyObj2();
  if (obj.publicVar === 'I am public') {
    console.log('publicVar is an accessible property');
  }
  console.log(myObj.publicVar); // outputs I am public
  // Expected if the variable is set up bound to the object scope

  // Same behaviour of variables relates to functions, however this practices should
  // be used with caution, given JavaScript is a prototypal language, creating nested
  // functions in the constructor will cause the function objects to be created with
  // each instantiation thus an impact on memory usage.
  function MyObj3() {
      // Nested function
      function privateFnc() {
        // Do Something
        return false;
      }
      // Execute the private function internal will run ok
      privateFnc();
  }

  obj = new MyObj3();
  // Check to determine if the privateFnc is accessible
  if (typeof obj.privateFnc !== 'function') {
    console.log('privateFnc() is not accessible');
  }
  console.log(myObj.privateFnc); // outputs undefined

  // Extending the example above you could fundamentally
  // create a public function utilizing the private function thus enforcing a “protected” state
  function MyObj4() {
    // Nested function
    function privateFnc() {
      return true;
    }
    // Protected function
    this.protectedFnc = function() {
       // Execute the private function
       return privateFnc();
    };
  }

  obj = new MyObj4();
  // Check to determine if the protectedFnc is accessible
  if (typeof obj.protectedFnc === 'function') {
    console.log('protectedFnc() is accessible');
  }

  console.log(myObj.publicFnc); // outputs fnc()
  // This is already implemented as the protected
  // function above or alternatively it could be written as:

  MyObj4.prototype.publicFnc = function() {
    // Do Something
    return;
  };

  obj = new MyObj4();
  // Check to determine if the publicFnc is accessible
  if (typeof obj.publicFnc === 'function') {
    console.log('publicFnc() is accessible');
  }

  // Ultimately if you like short hand you could
  // potentially use an anonymous function to bind the
  // prototype functions, although this doesn't lint very well
  // (function() {
  //   this.publicFnc = function(){
  //       return this.name;
  //   };
  // }).call(myObj4.prototype);
}());
