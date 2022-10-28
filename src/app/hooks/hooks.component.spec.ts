import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HooksComponent } from './hooks.component';

describe('HooksComponent', () => {
  let component: HooksComponent;
  let fixture: ComponentFixture<HooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
