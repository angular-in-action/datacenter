/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NodesRowComponent } from './nodes-row.component';

describe('NodesRowComponent', () => {
  let component: NodesRowComponent;
  let fixture: ComponentFixture<NodesRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NodesRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NodesRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
