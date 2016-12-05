import { TaskManagerCliPage } from './app.po';

describe('task-manager-cli App', function() {
  let page: TaskManagerCliPage;

  beforeEach(() => {
    page = new TaskManagerCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
