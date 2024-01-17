import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorarioDeAulasPage } from './horario-de-aulas.page';

describe('HorarioDeAulasPage', () => {
  let component: HorarioDeAulasPage;
  let fixture: ComponentFixture<HorarioDeAulasPage>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(HorarioDeAulasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
