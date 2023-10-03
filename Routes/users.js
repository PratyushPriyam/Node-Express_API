const express = require('express')
const { v4: uuidv4 } = require('uuid');
uuidv4();
const router = express.Router();

let users = []

router.get('/', (req, res) => {
    res.send(users)
});

// Adding users to DataBase
router.post('/', (req, res) => {
    const user = req.body
    const userId = uuidv4()
    const userWithId = {...user, id: userId}
    users.push(userWithId)
    res.send(`user with name ${user.firstName} added to db`)
})

router.get('/:id', (req, res) => {
    const {id} = req.params
    res.send(users.filter((user) => (user.id === id)))
})

router.delete('/:id', (req, res) => {
    const {id} = req.params

    users = users.filter((user) => (
        user.id != id
    ))

    res.send(`User with id: ${id} has been successfully deleted from database`)
})

router.patch('/:id', (req, res) => {
    const {id} = req.params
    const {firstName, lastName, age} = req.body

    const userToUpdate = users.find((user) => (
        user.id === id
    ))

    if(firstName) {
        userToUpdate.firstName = firstName
    }

    if(lastName) {
        userToUpdate.lastName = lastName
    }

    if(age) {
        userToUpdate.age = age
    }

    res.send(`User with id: ${id} has been successfully updated`)
})

module.exports = router