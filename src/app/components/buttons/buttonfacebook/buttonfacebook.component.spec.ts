import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonfacebookComponent } from './buttonfacebook.component';

describe('ButtonfacebookComponent', () => {
  let component: ButtonfacebookComponent;
  let fixture: ComponentFixture<ButtonfacebookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonfacebookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonfacebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
