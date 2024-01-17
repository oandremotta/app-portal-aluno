import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoletinsPage } from './boletins.page';

describe('BoletinsPage', () => {
  let component: BoletinsPage;
  let fixture: ComponentFixture<BoletinsPage>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(BoletinsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
