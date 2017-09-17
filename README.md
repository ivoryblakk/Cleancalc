# Cleancalc

v0.0.0
---
```javascript
function add(arg1, arg2) {
	return arg1 + arg2;
};
```
  The function will be able to add 2 numbers, complete the addition and return the solution. 

```javascript
function subtract(arg1, arg2) {
	return arg1 - arg2;
};
```
  The function will be able to subtract 2 numbers, complete the subtraction and return the solution.

```javascriptS
function multiply(arg1, arg2) {
	return arg1 * arg2;
};
```
The function will be able to multiply 2 numbers, complete the multiplication and return the solution.

```javascript
function divide(arg1, arg2) {
	return arg1 / arg2;
};
```
  The function will be able to divide 2 numbers, complete the division and return the solution.

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
In version the Cleancalc will be a to take 1 operation and 2 agrs to complete an arithmetic problem. 

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
In this version, Cleancalc  will be able to compute even if the user only inputs 1 value into the Cleancal input.

 v.1.1.0 
 ---

 ``` javascript
 var calc = {
  lastResult: 0,

  operate: function (operation, arg1, arg2) {
    if (arg2) {
      this.lastResult = this[operation](arg1, arg2);
      return this.lastResult;
    } else {
      this.lastResult = this[operation](arg1, this.lastResult);
      return this.lastResult;
    }
  },
  add: function (arg1, arg2) {
    return arg1 + arg2;
  },
  subtract: function (arg1, arg2) {
    return arg1 - arg2;
  },
  multiply: function (arg1, arg2) {
    return arg1 * arg2;
  },
  divide: function (arg1, arg2) {
    return arg1 / arg2;
  }
};
```
In this version, Cleancalc has all the functionalites of its previous verson.

 v.1.2.0 
 ---
 No major changes.