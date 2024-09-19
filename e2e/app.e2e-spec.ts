import { ProJeliliV1TemplatePage } from './app.po';

describe('ProJeliliV1 App', function() {
  let page: ProJeliliV1TemplatePage;

  beforeEach(() => {
    page = new ProJeliliV1TemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
