import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatoScreenComponent } from './contato-screen.component';

describe('ContatoScreenComponent', () => {
  let component: ContatoScreenComponent;
  let fixture: ComponentFixture<ContatoScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContatoScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContatoScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
