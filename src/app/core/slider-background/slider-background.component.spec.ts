import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderBackgroundComponent } from './slider-background.component';

describe('SliderBackgroundComponent', () => {
  let component: SliderBackgroundComponent;
  let fixture: ComponentFixture<SliderBackgroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderBackgroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
