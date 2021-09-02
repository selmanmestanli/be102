const Person = require('./person')
const Photo = require('./photo')

function signUp(name, age) {
  return new Person(name, age)
}

const mihri = signUp('mihri', 35)
const steve = signUp('steve', 21)
const armagan = signUp('armagan', 36)

const berlinPhoto = new Photo('berlin.jpg')
const munichPhoto = new Photo('munich.jpg')

steve.addPhoto(berlinPhoto)
steve.addPhoto(munichPhoto)

steve.bio = 'An awesome hacker who has seen it all, and now sharing them all with you.'

armagan.likePhoto(berlinPhoto)
mihri.likePhoto(berlinPhoto)
mihri.likePhoto(munichPhoto)

// console.log(steve.profile)

// steve.profile = 'something'

console.log(steve.profile)
console.log(armagan.profile)
// armagan.profile = "something" //you can not override getter it is a dynamic property
