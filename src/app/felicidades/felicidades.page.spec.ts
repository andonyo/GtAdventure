import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FelicidadesPage } from './felicidades.page';

describe('FelicidadesPage', () => {
  let component: FelicidadesPage;
  let fixture: ComponentFixture<FelicidadesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FelicidadesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FelicidadesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
