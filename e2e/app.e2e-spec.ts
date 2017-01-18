import { MarketAdminPage } from './app.po';

describe('market-admin App', function() {
  let page: MarketAdminPage;

  beforeEach(() => {
    page = new MarketAdminPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
