
```javascript
function add(arg1, arg2) {
	return arg1 + arg2;
};
```
*   add: function
    *   args: 2 
        *   arg1: number 
            *   purpose: input for arithmetic 
        *   arg2: number 
            *   purpose: input for arithmetic
    *   return: the args equated using the "+" operator
    *   behavior:  The function will be able to add 2 numbers
    *   purpose:  The addition in the Cleancalc

```javascript
function subtract(arg1, arg2) {
	return arg1 - arg2;
};
```
*   subtract: function
    *   args: 2 
        *   arg1: number 
            *   purpose: input for arithmetic 
        *   arg2: number 
            *   purpose: input for arithmetic
    *   return: the args equated using the "-" operator
    *   behavior:  The function will be able to subtract 2 numbers
    *   purpose:  The subtraction in the Cleancalc

```javascriptS
function multiply(arg1, arg2) {
	return arg1 * arg2;
};
```
*   multiply: function
    *   args: 2 
        *   arg1: number 
            *   purpose: input for arithmetic 
        *   arg2: number 
            *   purpose: input for arithmetic
    *   return: the args equated using the "*" operator
    *   behavior:  The function will be able to multiply 2 numbers
    *   purpose:  The multiplication in the Cleancalc

```javascript
function divide(arg1, arg2) {
	return arg1 / arg2;
};
```
*   divide: function
    *   args: 2 
        *   arg1: number 
            *   purpose: input for arithmetic 
        *   arg2: number 
            *   purpose: input for arithmetic
    *   return: the args equated using the "/" operator
    *   behavior:  The function will be able to divide 2 numbers
    *   purpose:  The divison in the Cleancalc

```javascript
lastResult = add(2, 4);
lastResult = add(5, lastResult);
lastResult = multiply(3,2);
```
 *    Above is for testing

 v.0.1.0 
---
```javascript
astResult = 0000;

function operateIntermediary(operation, arg1, arg2) {
	return operation(arg1, arg2);
};

lastResult = operateIntermediary(add, 2, 4);
lastResult = operateIntermediary(add, 5, lastResult);
lastResult = operateIntermediary(multiply, 3,2);
```
*   operateIntermediary: function
    *   operation: 1
            *   operator: "add","subtract","multiply" and "divide"
        *   purpose: operator
    *   args: 2 
        *   arg1: number 
            *   purpose: input for arithmetic 
        *   arg2: number 
            *   purpose: input for arithmetic
    *   return: the args equated using the operation
    *   behavior:  The function will be able to take 2 numer and do arithmetic using "+","-","*" and "/" as operators.
    *   purpose:  The funtion will be able to complete computational mathematics in Cleancalc.

 v.0.2.0 
---
```javascript
lastResult = 0000;

function operate(operation, arg1, arg2) {
  if (arg2) {
    lastResult = operation(arg1, arg2);
    return lastResult;
  } else {
    lastResult = operation(arg1, lastResult);
    return lastResult;
  }
}

lastResult = operate(add, 2, 4);
lastResult = operate(add, 5);
lastResult = operate(multiply, 3, 2);
```
*   operate: function
    *   operation: 1
            *   operator: "add","subtract","multiply" and "divide"
        *   purpose: operator
    *   args: 2 
        *   arg1: number 
            *   purpose: input for arithmetic 
        *   arg2: number 
            *   purpose: input for arithmetic
    *   if: arg2
        *   lastResult: arg1 and arg2 are equated using the operation function in v0.1.0
        *   return: the args equated by lastResult
    *   else: arg1 (solo)
        *   lastResult: the single arg1 is equated with lastResult instead of arg2 by using the operation function  
        *   return: the args equated by lastResult
    *   behavior:  The function will be able to call functions from previous versions even if arg2 is undefined
    *   purpose:  The funtion will be able to complete computational mathematics in Cleancalc.

``` javascript
// -------------------  v.1.1  --------------------- //
var calc = {
  lastResult: 0,
```
*   lastResult: number
	*	initialized: 0000
	*	pupose: to allow chained operations
``` javascript
  operate: function (operation, arg1, arg2) {
    if (arg2) {
      this.lastResult = this[operation](arg1, arg2);
      return this.lastResult;
    } else {
      this.lastResult = this[operation](arg1, this.lastResult);
      return this.lastResult;
    }
  },
```
*   operate: function
	*	args: 3
		*	operation: string
			*	purpose: designates which method to call
		*	arg1: number
			*	purpose: required operand
		*	arg2: number
			*	purpose: optional operand
	*	return: number
	*	behavior: calls the right method with arg1 and arg2 OR lastResult
	*	purpose: allows users to access math methods from a single interface
``` javascript
  add: function (arg1, arg2) {
    return arg1 + arg2;
  },
```
*   add: function
	*	args: 2
		*	arg1, arg2: number
			*	purpose: math need numbers
	*	return: number
	*	behavior: adds arg1 to arg2 and returns the sum
	*	purpose: so users can add
``` javascript
  subtract: function (arg1, arg2) {
    return arg1 - arg2;
  },
```
subtract: function
*       args: 2
	*		arg1, arg2: number
		*		purpose: math need numbers
	*	return: number
	*	behavior: sutracts arg1 to arg2 and returns the result
	*	purpose: so users can subtract

``` javascript
  multiply: function (arg1, arg2) {
    return arg1 * arg2;
  },
```
multiply: function
*       args: 2
	*		arg1, arg2: number
		*		purpose: math need numbers
	*	return: number
	*	behavior: multiplies arg1 to arg2 and returns the result
	*	purpose: so users can multiply

``` javascript
  divide: function (arg1, arg2) {
    return arg1 / arg2;
  }
};
```
divide: function
*		args: 2
	*		arg1, arg2: number
		*		purpose: math need numbers
	*	return: number
	*	behavior: divides arg1 to arg2 and returns the result
	*	purpose: so users can divide
``` javascript
/*
//------------operate tester  args: 2 ------------------
function operateTester() {
  var tested = calc.operate('add', 0, 0);
  var message = '';
  if (tested === 0) {
    message = 'success';
  } else {
    message = 'failure';
  }
  console.log(message);
}
operateTester();
//------------operate tester  args: 1 ------------------
function operateTester() {
  var tested = calc.operate('add', 0);
  console.log(tested);
  var message = '';
  if (tested == 0) {
    message = 'success';
  } else {
    message = 'failure';
  }
  console.log(message);
}
operateTester();
//-------------addition tester ------------------
function additionTester(operation) {
  var tested = calc[operation](0, 0);
  var message = '';
  if (tested == 0) {
    message = 'success';
  } else {
    message = 'failure';
  }
  console.log(message);
}
additionTester('add');
//-------------Subtraction tester ------------------
function subtractionTester(operation) {
  var tested = calc[operation](5, 4);
  var message = '';
  if (tested == 1) {
    message = 'success';
  } else {
    message = 'failure';
  }
  console.log(message);
}
subtractionTester('subtract');
//-------------Multiplication tester ------------------
function multiplicationTester(operation) {
  var tested = calc[operation](5, 5);
  var message = '';
  if (tested == 25) {
    message = 'success';
  } else {
    message = 'failure';
  }
  console.log(message);
}
multiplicationTester('multiply');
//-------------Divison tester ------------------
function divisonTester(operation) {
  var tested = calc[operation](5, 5);
  var message = '';
  if (tested == 1) {
    message = 'success';
  } else {
    message = 'failure';
  }
  console.log(message);
}
divisonTester('divide');
*/
```