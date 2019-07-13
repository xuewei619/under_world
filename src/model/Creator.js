import generator from '@/util/IdGenerator'
class Creator {
  constructor (name, age, gender) {
    this.name = name
    this.age = age
    this.gender = gender
    this.id = generator.generateId('creator')
  }

  say () {
    alert('Hello guys! My name is ' + this.name + ', i\'m ' + this.age + ' years old and my id is ' + this.id + '.')
    // alert(JSON.stringify(generator.getIdType()))
  }
}

export default Creator
