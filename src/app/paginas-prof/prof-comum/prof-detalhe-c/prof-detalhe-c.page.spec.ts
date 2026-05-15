import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfDetalheCPage } from './prof-detalhe-c.page';

describe('ProfDetalheCPage', () => {
  let component: ProfDetalheCPage;
  let fixture: ComponentFixture<ProfDetalheCPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfDetalheCPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
