import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMunicipioComponent } from './form-municipio.component';

describe('FormMunicipioComponent', () => {
  let component: FormMunicipioComponent;
  let fixture: ComponentFixture<FormMunicipioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormMunicipioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMunicipioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
