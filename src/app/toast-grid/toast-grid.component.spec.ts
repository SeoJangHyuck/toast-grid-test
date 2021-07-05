import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastGridComponent } from './toast-grid.component';

describe('ToastGridComponent', () => {
  let component: ToastGridComponent;
  let fixture: ComponentFixture<ToastGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToastGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToastGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
