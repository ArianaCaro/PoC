'use strict'

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const DirectorioSeeder = use('./DirectorioSeeder')

class DatabaseSeeder {
  async run () {
    await DirectorioSeeder.run()
  }
}

module.exports = DatabaseSeeder
