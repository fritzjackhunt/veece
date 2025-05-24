import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerifySuccessPage } from './verify-success.page';

describe('VerifySuccessPage', () => {
  let component: VerifySuccessPage;
  let fixture: ComponentFixture<VerifySuccessPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifySuccessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
