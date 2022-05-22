import { ErrorDialogService } from './error-dialog.service';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { RouterTestingModule } from '@angular/router/testing';

describe('ErrorDialogService', () => {
  let spectator: SpectatorService<ErrorDialogService>;

  const createComponent = createServiceFactory({
    service: ErrorDialogService,
    imports: [RouterTestingModule],
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create', () => {
    expect(spectator.service).toBeDefined();
  });
});
