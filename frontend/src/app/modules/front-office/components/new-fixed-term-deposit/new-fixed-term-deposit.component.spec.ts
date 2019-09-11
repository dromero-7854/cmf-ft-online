import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFixedTermDepositComponent } from './new-fixed-term-deposit.component';

describe('NewFixedTermDepositComponent', () => {
  let component: NewFixedTermDepositComponent;
  let fixture: ComponentFixture<NewFixedTermDepositComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewFixedTermDepositComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFixedTermDepositComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
