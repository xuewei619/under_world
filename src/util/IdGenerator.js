class Generator {
  constructor () {
    this.idType = {}
    this.initId = 10000
  }

  addIdType (name) {
    this.idType[name] = this.initId
  }

  updateIdType (name, id) {
    this.idType[name] = id
  }

  getIdType () {
    return this.idType
  }

  generateId (name) {
    let id = this.idType[name]
    if (id === undefined) {
      this.addIdType(name)
      return this.initId
    } else {
      let newId = id + 1
      this.updateIdType(name, newId)
      return newId
    }
  }
}

const generator = new Generator()
export default generator
