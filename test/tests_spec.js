/* global describe, xdescribe, it */
/* eslint-disable no-undef */


const chai = require('chai')
const expect = chai.expect
const app = require('../app')
const moveRoverFunction = app.moveRoverFunction
const roverOneInstructions = app.roverOneInstructions



describe('Rover movement tests', () => {

  it('Should return correct end result with movement instructions, rest still hardcoded', () => {
    expect(moveRoverFunction(roverOneInstructions)).to.eq('1 5 E')
  })
})
