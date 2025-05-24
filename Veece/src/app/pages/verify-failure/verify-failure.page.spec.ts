import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerifyFailurePage } from './verify-failure.page';

describe('VerifyFailurePage', () => {
  let component: VerifyFailurePage;
  let fixture: ComponentFixture<VerifyFailurePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyFailurePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
