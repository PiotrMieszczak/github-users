import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let spectator: Spectator<HeaderComponent>;
  const createComponent = createComponentFactory(HeaderComponent);

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('should have tittle', () => {
    const mockTitle = 'Test Title';
    spectator.setInput('title', mockTitle);
    spectator.detectChanges();

    const titleHtml = spectator.query('.title');

    expect(titleHtml).toBeDefined();
    expect(titleHtml?.innerHTML).toBe(mockTitle);
  });
});
