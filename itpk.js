+(function (factory) {
    if (typeof exports === 'undefined') {
        factory(webduino || {});
    } else {
        module.exports = factory;
    }
}(function (scope) {
    'use strict';
  
    const url = "https://i.itpk.cn/api.php";
    var answer = "";

    function RobotItpk() {
        Module.call(this);
    }

    RobotItpk.ask = function (question) {
        $.post(url, {
            'question': question
        }, function (respond) {
            // console.log(data);
            answer = respond;
        });
    }
    
    RobotItpk.clear = function () {
        answer = "";
    }
    
    RobotItpk.answer = function () {
        return answer.replace("[cqname]", "moli");
    }

    RobotItpk.quick_ask = function (question, callback) {
        $.post(url, {
            'question': question
        }, function (respond) {
            answer = respond
            callback();
        });
    }

    scope.module.RobotItpk = RobotItpk;

}));

function unit_test() {
  webduino.module.RobotItpk.ask('东莞天气如何？');
  setTimeout(function(){
    console.log(webduino.module.RobotItpk.answer());
    webduino.module.RobotItpk.ask('高雄天气如何？');
    setTimeout("console.log(webduino.module.RobotItpk.answer())", 1000);
  }, 1000);
  
}

// unit_test();
