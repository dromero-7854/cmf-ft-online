import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFTDepositComponent } from './new-ft-deposit.component';

describe('NewFTDepositComponent', () => {
  let component: NewFTDepositComponent;
  let fixture: ComponentFixture<NewFTDepositComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewFTDepositComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFTDepositComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
