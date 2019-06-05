
+(function (factory) {
  if (typeof exports === 'undefined') {
    factory(window, window.webduino);
  } else {
    module.exports = factory;
  }
}(function (scope, webduino) {

  'use strict';

  scope.itpk_answer = function () {
    return "webduino.module.RobotItpk.answer()";
  }

  scope.itpk_clear = function () {
    return "webduino.module.RobotItpk.clear()";
  }

  scope.itpk_quick_ask = function (question, callback) {
    return "webduino.module.RobotItpk.quick_ask({0}, function(){\n  {1}})".format(question, callback);
  }

  scope.itpk_unit_test = function () {

    var code = "";
    
    code += itpk_quick_ask('ip', 'console.log({0});\n'.format(itpk_answer()));
    
    console.log(code);
    // eval(code);
    return code;
  }

}));

// itpk_unit_test();

