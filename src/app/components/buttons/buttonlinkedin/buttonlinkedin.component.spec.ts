import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonlinkedinComponent } from './buttonlinkedin.component';

describe('ButtonlinkedinComponent', () => {
  let component: ButtonlinkedinComponent;
  let fixture: ComponentFixture<ButtonlinkedinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonlinkedinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonlinkedinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
