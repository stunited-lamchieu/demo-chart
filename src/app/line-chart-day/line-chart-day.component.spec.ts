import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineChartDayComponent } from './line-chart-day.component';

describe('LineChartDayComponent', () => {
  let component: LineChartDayComponent;
  let fixture: ComponentFixture<LineChartDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineChartDayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LineChartDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
