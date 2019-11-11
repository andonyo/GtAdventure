import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TristePage } from './triste.page';

describe('TristePage', () => {
  let component: TristePage;
  let fixture: ComponentFixture<TristePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TristePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TristePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
