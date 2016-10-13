import { LodelaPage } from './app.po';

describe('lodela App', function() {
  let page: LodelaPage;

  beforeEach(() => {
    page = new LodelaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
