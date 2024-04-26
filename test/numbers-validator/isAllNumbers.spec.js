import { expect } from 'chai';

import {
  describe, beforeEach, afterEach, it,
} from 'mocha';

import NumbersValidator from '../../app/numbers-validator.js';

describe('isAllNumbers', () => {
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

  it('should return an true if all are numbers', () => {
    const arrayOfNumbers = [5, 2, 6, 11, 22];
    expect(validator.isAllNumbers(arrayOfNumbers)).to.be.eql(true);
  });

  it('should return an false if all aren\'t numbers', () => {
    const arrayOfNumbers = [5, '2', 6, 11, 22];
    expect(validator.isAllNumbers(arrayOfNumbers)).to.be.eql(false);
  });

  it('shoud throw an error if not an array', () => {
    expect(() => {
      validator.isAllNumbers('4');
    }).to.throw('[4] is not an array');
  });

  it('shoud throw an error if not an array', () => {
    expect(() => {
      validator.isAllNumbers(5);
    }).to.throw('[5] is not an array');
  });
});
