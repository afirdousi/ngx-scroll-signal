import { EnvironmentTestPage } from './app.po';

describe('environment-test App', function() {
  let page: EnvironmentTestPage;

  beforeEach(() => {
    page = new EnvironmentTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
