const mongoose= require('mongoose')
const PersonSchema =  new mongoose.Schema({
    name :String,
    age: Number,
    favoriteFoods:[String]
})
const Person = mongoose.model( 'Person', PersonSchema)
 module.exports = Person