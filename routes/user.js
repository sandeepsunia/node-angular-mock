'use strict';

var express = require('express'),
    router = express.Router(),
    Utils = require('../utils/utils'),
    faker = require('faker'),
    /*jshint -W079 */
    _ = require('lodash');



var mockUsers = [
    {
        id: Utils.generateHash(),
        name: faker.name.findName(),
        age: Math.floor(Math.random() * 60),
        date: faker.date.past()
    },
    {
        id: Utils.generateHash(),
        name: faker.name.findName(),
        age: Math.floor(Math.random() * 60),
        date: faker.date.past()
    },
    {
        id: Utils.generateHash(),
        name: faker.name.findName(),
        age: Math.floor(Math.random() * 60),
        date: faker.date.past()
    },
    {
        id: Utils.generateHash(),
        name: faker.name.findName(),
        age: Math.floor(Math.random() * 60),
        date: faker.date.past()
    },
    {
        id: Utils.generateHash(),
        name: faker.name.findName(),
        age: Math.floor(Math.random() * 60),
        date: faker.date.past()
    },
    {
        id: Utils.generateHash(),
        name: faker.name.findName(),
        age: Math.floor(Math.random() * 60),
        date: faker.date.past()
    },
    {
        id: Utils.generateHash(),
        name: faker.name.findName(),
        age: Math.floor(Math.random() * 60),
        date: faker.date.past()
    },
    {
        id: Utils.generateHash(),
        name: faker.name.findName(),
        age: Math.floor(Math.random() * 60),
        date: faker.date.past()
    },
    {
        id: Utils.generateHash(),
        name: faker.name.findName(),
        age: Math.floor(Math.random() * 60),
        date: faker.date.past()
    },
    {
        id: Utils.generateHash(),
        name: faker.name.findName(),
        age: Math.floor(Math.random() * 60),
        date: faker.date.past()
    }
];





//Send list of users to client
router.get('/', function (req, res) {
    res.status(200).send(mockUsers);
});

//Save new users
router.post('/', function (req, res) {
    req.body.id = Utils.generateHash();
    req.body.date = faker.date.past();
    mockUsers.push(req.body);
    res.status(201).send('ok');
});

//Edit existing user
router.put('/:userId', function (req, res) {
    var userId = req.param('userId');
    mockUsers[_.findIndex(mockUsers, {id: userId})] = req.body;

    res.status(200).send('ok');
    return;
});

router.delete('/:userId', function (req, res) {
    var userId = req.param('userId');
    _.remove(mockUsers, {id: userId});

    res.status(200).send('ok');
});






module.exports = router;
module.exports.mockUsers = mockUsers;
