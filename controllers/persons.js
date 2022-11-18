const Person = require('../models/Person.js')

const getPersons = ((req, res) => {
    Person.find()
    .then(result =>res.status(200).json({result}))
    .catch(err =>res.status(500).json({mgs:error}))
})

const getPersonById = ((req, res) => {
    Person.findOne({_id:req.params.personID})
    .then(result=> res.status(200).json({result}))
    .catch(err => res.status(400).json({msg:'Person not found'}))
   })
   
const createPerson = ((req, res) => {
    Person.insertMany([
        {
          name: 'adji' ,
          age:15 
        },
      {
        name: 'gueye',
        age: 20
      },
      {
        name:'mariame',
        age:50
      }
    ])
    .then(result =>{
        console.log(result)
        res.status(200).json({result})
    })
    .catch( err => res.status(500).json({msg: err}))
})

const updatePerson = ((req, res) => {
    Person.findOneAndUpdate({ _id: req.params.personID}, req.body)
    .then( result => res.status(200).json({result}))
    .catch(err => res.status(404).json({msg: 'Person update'}))
})
const deletePerson = ((req, res) => {
    Person.findOneAndDelete({ _id :req.params.personID})
    .then(result=> res.status(200).json({result}))
    .catch(err => res.status(404).json({msg :' Person deleted'}))
})

module.exports = {
    getPersons,
    getPersonById,
    createPerson,
    updatePerson,
    deletePerson
}