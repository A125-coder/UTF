import { expect } from 'chai';

import {
  describe, beforeEach, afterEach, it,
} from 'mocha';

import NumbersValidator from '../../app/numbers-validator.js';

describe('isInteger', () => {
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

  it('should return an true if integer', () => {
    const num = 5;
    expect(validator.isInteger(num)).to.be.eql(true);
  });

  it('shoud throw an error if not an integer', () => {
    expect(() => {
      validator.isInteger('4');
    }).to.throw('[4] is not a number');
  });

  it('shoud throw an error if not an integer', () => {
    expect(() => {
      validator.isInteger(true);
    }).to.throw('[true] is not a number');
  });
});
