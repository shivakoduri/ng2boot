import { UserinterfacePage } from './app.po';

describe('userinterface App', function() {
  let page: UserinterfacePage;

  beforeEach(() => {
    page = new UserinterfacePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
