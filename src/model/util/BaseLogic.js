class BaseLogic {
  loadData(dto) {
    return true;
  }

  createData(dto) {
    return true;
  }

  saveData(dto) {
    return true;
  }

  createResponse(dto) {
    return true;
  }

  execute(dto) {
    let result = this.loadData(dto);
    if (result) {
      result = this.createData(dto);
    }
    if (result) {
      result = this.saveData(dto);
    }
    if (result) {
      result = this.createResponse(dto);
    }
    return result;
  }
}

module.exports = BaseLogic;
