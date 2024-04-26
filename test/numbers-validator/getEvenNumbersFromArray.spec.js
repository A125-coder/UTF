// Importing the 'expect' function from the 'chai' library to perform assertions
import { expect } from 'chai';

import {
  describe, beforeEach, afterEach, it,
} from 'mocha';

// Importing the NumbersValidator class from the relative path '../app/numbers-validator'
// so we can test its methods.
import NumbersValidator from '../../app/numbers-validator.js';

describe('getEvenNumbersFromArray', () => {
  // Declaring a variable 'validator' outside of the 'beforeEach' and 'it' blocks
  // to make it accessible throughout this describe block.
  let validator;

  // 'beforeEach' is a hook that runs before each test ('it' block) within this 'describe' block.
  // It's usually used for setting up the test environment.
  beforeEach(() => {
    // Instantiates a new NumbersValidator object before each test and assigns it to 'validator'
    validator = new NumbersValidator();
  });

  // 'afterEach' is a hook that runs after each test. It is often used for cleanup activities.
  afterEach(() => {
    // Sets the validator variable to null to clean up memory after each test
    validator = null;
  });

  it('should return an array of even numbers', () => {
    const arrayOfNumbers = [5, 2, 6, 11, 22];
    expect(validator.getEvenNumbersFromArray(arrayOfNumbers)).to.be.eql([2, 6, 22]);
  });

  it('shoul throw an error if an array is not full of numbers', () => {
    const arrayOfNumbers = [5, '2', 6, 11];
    expect(() => {
      validator.getEvenNumbersFromArray(arrayOfNumbers);
    }).to.throw('[5,2,6,11] is not an array of "Numbers"');
  });
});
