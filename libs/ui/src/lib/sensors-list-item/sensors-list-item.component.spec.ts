import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SensorType } from '@skynjari/data-model';
import { MockComponent } from 'ng-mocks';
import SensorsListItemComponent from './sensors-list-item.component';
import SensorsListItemPowerMeterComponent from '../sensors-list-item-power-meter/sensors-list-item-power-meter.component';
import TimeagoPipe from '../timeago.pipe';

describe('SensorsListItemComponent', () => {
  let component: SensorsListItemComponent;
  let fixture: ComponentFixture<SensorsListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SensorsListItemComponent, MockComponent(SensorsListItemPowerMeterComponent), TimeagoPipe],
    }).compileComponents();

    fixture = TestBed.createComponent(SensorsListItemComponent);
    component = fixture.componentInstance;
    component.sensor = {
      name: 'Test', key: 'test', type: SensorType.POWER_METER, measurements: [],
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
