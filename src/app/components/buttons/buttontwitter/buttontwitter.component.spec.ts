import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtontwitterComponent } from './buttontwitter.component';

describe('ButtontwitterComponent', () => {
  let component: ButtontwitterComponent;
  let fixture: ComponentFixture<ButtontwitterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtontwitterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtontwitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
