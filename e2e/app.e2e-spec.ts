import { UngPage } from './app.po';

describe('ung App', function() {
  let page: UngPage;

  beforeEach(() => {
    page = new UngPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
