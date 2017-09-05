import { AuthenticationSystemPage } from './app.po';

describe('authentication-system App', () => {
  let page: AuthenticationSystemPage;

  beforeEach(() => {
    page = new AuthenticationSystemPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
