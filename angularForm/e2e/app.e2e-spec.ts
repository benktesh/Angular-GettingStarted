import { AngularFormPage } from './app.po';

describe('angular-form App', () => {
  let page: AngularFormPage;

  beforeEach(() => {
    page = new AngularFormPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
