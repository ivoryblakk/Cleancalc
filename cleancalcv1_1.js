// -------------------  v.1.1  --------------------- //
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