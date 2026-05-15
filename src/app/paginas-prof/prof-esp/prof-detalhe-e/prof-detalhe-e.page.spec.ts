import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfDetalheEPage } from './prof-detalhe-e.page';

describe('ProfDetalheEPage', () => {
  let component: ProfDetalheEPage;
  let fixture: ComponentFixture<ProfDetalheEPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfDetalheEPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
