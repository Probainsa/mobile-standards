import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FmdComponent } from './fmd.component';

describe('FmdComponent', () => {
  let component: FmdComponent;
  let fixture: ComponentFixture<FmdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FmdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FmdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
