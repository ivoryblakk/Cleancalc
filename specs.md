
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
        *   purpose: operator
    *   args: 2 
        *   arg1: number 
            *   purpose: input for arithmetic 
        *   arg2: number 
            *   purpose: input for arithmetic
    *   return: the args equated using the operation
    *   behavior:  The function will be able to take 2 numer and do arithmetic using "+","-","*" and "/" as operators.
    *   purpose:  The funtion will be able to complete computational mathematics in Cleancalc.
