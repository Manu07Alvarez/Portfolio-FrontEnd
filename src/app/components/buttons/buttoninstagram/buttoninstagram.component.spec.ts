import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtoninstagramComponent } from './buttoninstagram.component';

describe('ButtoninstagramComponent', () => {
  let component: ButtoninstagramComponent;
  let fixture: ComponentFixture<ButtoninstagramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtoninstagramComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtoninstagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
