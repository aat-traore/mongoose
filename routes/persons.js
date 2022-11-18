const express = require('express')
const router = express.Router()

const  { 
    getPersons,
    getPersonById,
    createPerson,
    updatePerson,
    deletePerson 
} = require('../controllers/persons.js')

router.get('/', getPersons)

router.get('/:personID', getPersonById)

router.post('/createpersons', createPerson) 

router.put('/:personID', updatePerson) 

router.delete('/:personID', deletePerson)

module.exports = router