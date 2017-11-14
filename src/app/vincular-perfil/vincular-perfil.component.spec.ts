import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VincularPerfilComponent } from './vincular-perfil.component';

describe('VincularPerfilComponent', () => {
  let component: VincularPerfilComponent;
  let fixture: ComponentFixture<VincularPerfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VincularPerfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VincularPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
