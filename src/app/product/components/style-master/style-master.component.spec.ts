import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleMasterComponent } from './style-master.component';

describe('StyleMasterComponent', () => {
  let component: StyleMasterComponent;
  let fixture: ComponentFixture<StyleMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyleMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
