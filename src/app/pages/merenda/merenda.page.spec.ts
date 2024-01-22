import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerendaPage } from './merenda.page';

describe('MerendaPage', () => {
  let component: MerendaPage;
  let fixture: ComponentFixture<MerendaPage>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(MerendaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
