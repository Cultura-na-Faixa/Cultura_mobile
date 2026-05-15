import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfAlternativaPage } from './prof-alternativa.page';

describe('ProfAlternativaPage', () => {
  let component: ProfAlternativaPage;
  let fixture: ComponentFixture<ProfAlternativaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfAlternativaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
