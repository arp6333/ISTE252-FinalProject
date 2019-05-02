import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabOpenPage } from './tabOpen.page';

describe('TabOpenPage', () => {
  let component: TabOpenPage;
  let fixture: ComponentFixture<TabOpenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabOpenPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabOpenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
