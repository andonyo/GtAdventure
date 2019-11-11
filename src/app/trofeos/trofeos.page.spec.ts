import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrofeosPage } from './trofeos.page';

describe('TrofeosPage', () => {
  let component: TrofeosPage;
  let fixture: ComponentFixture<TrofeosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrofeosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrofeosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
