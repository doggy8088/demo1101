import { Demo1101Page } from './app.po';

describe('demo1101 App', function() {
  let page: Demo1101Page;

  beforeEach(() => {
    page = new Demo1101Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
