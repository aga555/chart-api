import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriversChartComponent } from './drivers-chart.component';

describe('BarChartComponent', () => {
  let component: DriversChartComponent;
  let fixture: ComponentFixture<DriversChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriversChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriversChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
