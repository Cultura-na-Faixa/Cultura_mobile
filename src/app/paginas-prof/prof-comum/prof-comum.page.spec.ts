import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfComumPage } from './prof-comum.page';

describe('ProfComumPage', () => {
  let component: ProfComumPage;
  let fixture: ComponentFixture<ProfComumPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfComumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


