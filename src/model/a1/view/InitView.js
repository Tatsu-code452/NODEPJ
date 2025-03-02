const InitLogic = require("../businessLogic/InitLogic");
const InitDto = require("../dto/InitDto");

function execute() {
  let dto = new InitDto();
  const logic = new InitLogic();
  logic.execute(dto);
  return dto;
}

module.exports = {
  execute,
};
