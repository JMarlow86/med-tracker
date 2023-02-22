import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickTimeComponent } from './click-time.component';

describe('ClickTimeComponent', () => {
  let component: ClickTimeComponent;
  let fixture: ComponentFixture<ClickTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClickTimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClickTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
