import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutersComponent } from './routers.component';

describe('RoutersComponent', () => {
  let component: RoutersComponent;
  let fixture: ComponentFixture<RoutersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
