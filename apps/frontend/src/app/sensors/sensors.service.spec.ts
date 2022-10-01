import { of } from 'rxjs';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Store } from '@ngrx/store';
import { MockProvider } from 'ng-mocks';

import sensors from './sensors.fixture';

import SensorsService from './sensors.service';

describe('SensorsService', () => {
  let httpTestingController: HttpTestingController;
  let service: SensorsService;
  const store = { dispatch: jest.fn(), select: jest.fn() };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        MockProvider(Store, store),
      ],
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(SensorsService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  // it('should load sensors on init and handle measurement updates via websocket', () => {
  //   store.select.mockImplementation(() => ({ subscribe: (callback: Function) => callback(sensors) }));

  //   service.init();
  //   httpTestingController.expectOne('/api/v1/sensors').flush(sensors);

  //   expect(store.dispatch).toBeCalledWith({ sensors, type: '[Sensors] updated' });
  //   expect(store.dispatch.mock.calls[0][0].sensors[0].updated).toEqual(new Date('2021-01-01T00:00:00.000Z'));

  //   expect(store.dispatch.mock.calls[1][0].sensors[0].measurements.consumption.value).toEqual(123.33);
  //   expect(store.dispatch.mock.calls[1][0].sensors[0].updated).toEqual(new Date('2021-01-01T00:00:00.000Z'));
  // });

  it('should refresh sensors', () => {
    service.refresh();
    httpTestingController.expectOne('/api/v1/sensors').flush(sensors);
  });
});
