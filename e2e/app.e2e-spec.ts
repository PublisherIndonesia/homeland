import { AngularhomepagePage } from './app.po';

describe('angularhomepage App', () => {
  let page: AngularhomepagePage;

  beforeEach(() => {
    page = new AngularhomepagePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
