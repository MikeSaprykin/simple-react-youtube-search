import { renderComponent , expect } from '../test_helper';
import { App } from '../../src/index';

describe('App' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App, document.querySelector('.container'));
  });

  it('renders something', () => {
    expect(component).to.exist;
  });
});
