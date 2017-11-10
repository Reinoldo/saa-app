import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VincularMuniciComponent } from './vincular-munici.component';

describe('VincularMuniciComponent', () => {
  let component: VincularMuniciComponent;
  let fixture: ComponentFixture<VincularMuniciComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VincularMuniciComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VincularMuniciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
