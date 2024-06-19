const chai = require('chai');
chai.should();
const {expect} = chai;

const {
  contexts, constants, CONTEXT_V1, CONTEXT_URL_V1
} = require('../dist/context.js');

describe('Age Verification Context', () => {
  it('constants', async () => {
    expect(constants).to.exist;
    expect(constants).to.have.property('CONTEXT_URL_V1');
    expect(CONTEXT_URL_V1).to.exist;
    expect(CONTEXT_V1).to.exist;
  });

  it('contexts', async () => {
    expect(contexts.get(CONTEXT_URL_V1)).to.have.property('@context');
  });
});
