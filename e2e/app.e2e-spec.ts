import { CodeStrikersPage } from './app.po';

describe('code-strikers App', function() {
  let page: CodeStrikersPage;

  beforeEach(() => {
    page = new CodeStrikersPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
