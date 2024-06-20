import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanoScreenComponent } from './plano-screen.component';

describe('PlanoScreenComponent', () => {
  let component: PlanoScreenComponent;
  let fixture: ComponentFixture<PlanoScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanoScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanoScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
