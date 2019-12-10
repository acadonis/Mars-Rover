/* global describe, xdescribe, it */
/* eslint-disable no-undef */


const chai = require('chai')
const expect = chai.expect
const app = require('../app')
const createArray = app.createArray
const createRover = app.createRover
const createInstructionsArray = app.createInstructionsArray
const createGrid = app.createGrid


describe('Rover movement tests', () => {

  it('Should return an array of strings which matches rover starting position string', () => {
    expect(createArray('1 5 E')).to.eql(['1', '5', 'E'])
  })

  it('Should change strings into numbers and create rover object', () => {
    expect(createRover(['1', '5', 'E'])).to.eql(
      {
        easting: 1,
        northing: 5,
        direction: 2
      }
    )
  })

  it('Should return an array of movement instructions from a string', () => {
    expect(createInstructionsArray('LMLM')).to.eql(['L', 'M', 'L', 'M'])
  })

  it('Should return a grid object from a string', () => {
    expect(createGrid('5 5')).to.eql(
      {
        maxHeight: 5,
        maxWidth: 5
      }
    )
  })

  it ('Should output the final position of Rover One when fed the inputs', () => {
    expect(roverOneFunction())
  })




})
