import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarErrosComponent } from './mostrar-erros.component';

describe('MostrarErrosComponent', () => {
  let component: MostrarErrosComponent;
  let fixture: ComponentFixture<MostrarErrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarErrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarErrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
