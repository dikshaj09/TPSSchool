import { AngularSchoolAppPage } from './app.po';

describe('angular-school-app App', () => {
  let page: AngularSchoolAppPage;

  beforeEach(() => {
    page = new AngularSchoolAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
