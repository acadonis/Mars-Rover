/* global describe, xdescribe, it */
/* eslint-disable no-undef */


const chai = require('chai')
const expect = chai.expect
const app = require('../app')
const makePositionArray = app.makePositionArray
const createRoverObject = app.createRoverObject
const roverInstructionsFunction = app.roverInstructionsFunction
const roverOneStartString = app.roverOneStartString
// const roverOneInstructions = app.roverOneInstructions



describe('Rover movement tests', () => {

  it('Should return an array of strings', () => {
    expect(makePositionArray('1 5 E')).to.be.a('array')
  })

  it('Should return 1 2 N', () => {
    expect(roverOneStartString).to.equal('1 2 N')
  })

  it('Should return an array of strings which matches input string', () => {
    expect(makePositionArray('1 5 E')).to.equal(['1', '5', 'E'])
  })

  it('Should change strings into numbers and create rover object', () => {
    expect(createRoverObject(['1', '5', 'E'])).to.equal(
      {
        easting: 1,
        northing: 5,
        direction: 2
      }
    )
  })

  it('Should return an array of strings', () => {
    expect(roverInstructionsFunction('LMLMLMLMM')).to.be.a('array')
  })

  it('Should return movement string to movement array', () => {
    expect(roverInstructionsFunction('LMLM')).to.equal(['L', 'M', 'L', 'M'])
  })
})

// var expect = require('chai').expect
//   , foo = 'bar'
//   , beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };
//
// expect(foo).to.be.a('string');
// expect(foo).to.equal('bar');
// expect(foo).to.have.lengthOf(3);
// expect(beverages).to.have.property('tea').with.lengthOf(3);
