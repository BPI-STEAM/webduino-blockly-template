
Blockly.JavaScript['itpk_clear'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = itpk_clear();
  return code;
};

Blockly.JavaScript['itpk_answer'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = itpk_answer();;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['itpk_ask'] = function(block) {
  var value_question = Blockly.JavaScript.valueToCode(block, 'question', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_callback = Blockly.JavaScript.statementToCode(block, 'callback');
  // TODO: Assemble JavaScript into code variable.
  var code = '{0};\n'.format(itpk_quick_ask(value_question, statements_callback));
  return code;
};