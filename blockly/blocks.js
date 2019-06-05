Blockly.Blocks['itpk_clear'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.itpk_clear);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(315);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['itpk_answer'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.itpk_answer);
    this.setOutput(true, null);
    this.setColour(315);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['itpk_ask'] = {
  init: function() {
    this.appendValueInput("question")
        .setCheck("String")
        .appendField(Blockly.Msg.itpk_ask);
    this.appendStatementInput("callback")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(315);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};