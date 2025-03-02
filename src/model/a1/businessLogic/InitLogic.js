const fs = require("fs");
const BaseLogic = require("../../util/BaseLogic");

class InitLogic extends BaseLogic {
  constructor() {
    super();
    this.init();
  }

  init() {
    console.log("initLogic");
  }

  loadData(dto) {
    try {
      const data = fs.readFileSync(
        "C:/workspace/NODEPJ/NODEPJ/data/parser.json",
        "utf8"
      );
      console.log("File read success");
      dto.add("data", data);
      return true;
    } catch (err) {
      console.log("File read error", err);
      return false;
    }
  }
}

module.exports = InitLogic;
