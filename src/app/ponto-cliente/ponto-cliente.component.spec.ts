import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PontoClienteComponent } from './ponto-cliente.component';

describe('PontoClienteComponent', () => {
  let component: PontoClienteComponent;
  let fixture: ComponentFixture<PontoClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PontoClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PontoClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
