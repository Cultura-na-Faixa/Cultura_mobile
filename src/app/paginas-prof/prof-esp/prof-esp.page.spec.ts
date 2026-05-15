import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfEspPage } from './prof-esp.page';

describe('ProfEspPage', () => {
  let component: ProfEspPage;
  let fixture: ComponentFixture<ProfEspPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfEspPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});