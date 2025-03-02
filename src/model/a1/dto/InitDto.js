class InitDto {
  constructor() {
    this.data = {};
  }

  add(key, value) {
    this.data[key] = value;
  }

  get(key) {
    return this.data[key];
  }
}

module.exports = InitDto;
