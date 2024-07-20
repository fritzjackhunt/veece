import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeleteAccPage } from './delete-acc.page';

describe('DeleteAccPage', () => {
  let component: DeleteAccPage;
  let fixture: ComponentFixture<DeleteAccPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteAccPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
