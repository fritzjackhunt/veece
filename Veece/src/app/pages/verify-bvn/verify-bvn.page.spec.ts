import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerifyBvnPage } from './verify-bvn.page';

describe('VerifyBvnPage', () => {
  let component: VerifyBvnPage;
  let fixture: ComponentFixture<VerifyBvnPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyBvnPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
