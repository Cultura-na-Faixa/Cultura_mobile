import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfDetalheAPage } from './prof-detalhe-a.page';

describe('ProfDetalheAPage', () => {
  let component: ProfDetalheAPage;
  let fixture: ComponentFixture<ProfDetalheAPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfDetalheAPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
