import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarChartDayComponent } from './bar-chart-day.component';

describe('BarChartDayComponent', () => {
  let component: BarChartDayComponent;
  let fixture: ComponentFixture<BarChartDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarChartDayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarChartDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
