'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const jwt = require('jsonwebtoken')
const Env = use('Env')

class Token extends Model {
   /* static generateToken(payload) {
        return jwt.sign(payload, Env.get('APP_KEY'), { expiresIn: '1h' })
    }*/
}

module.exports = Token
