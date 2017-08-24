import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Chai from 'chai';

const expect = Chai.expect;

import NumberInputField from '../src/index';

describe('NumberInputField', () => {

  const renderer = new ShallowRenderer();
  renderer.render(<NumberInputField />);
  const result = renderer.getRenderOutput();


  it('root element should be a div', () => {
    // expect(wrapper.type()).to.eql('div');
    expect(result.type).to.eql('div');
  });

});