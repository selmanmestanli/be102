class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
    this.bio = ''
    this.photos = []
    this.likes = []
  }

  greet(person) {
    console.log(`Hello ${person.name}, this is ${this.name} at age ${this.age}*2`)
  }

  addPhoto(photo) {
    return this.photos.push(photo)
  }

  likePhoto(photo) {
    photo.likedBy.push(this)
    this.likes.push(photo)
  }

  get profile() {
    return `
# ${this.name} (${this.age})
Bio: ${this.bio}

## Photos (${this.photos.length})

${this.photos
  .map(
    photo => `### ${photo.filename}
    ❤️️  ${photo.likedBy.map(person => person.name).join(', ')}
    `
  )
  .join('\n')}
`
  }

  set profile(newValue) {
    throw new Error(`proile is only a getter. You can't override it with ${newValue}.`)
  }
}

module.exports = Person
