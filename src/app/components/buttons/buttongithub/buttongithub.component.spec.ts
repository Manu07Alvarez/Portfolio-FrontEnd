import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtongithubComponent } from './buttongithub.component';

describe('ButtongithubComponent', () => {
  let component: ButtongithubComponent;
  let fixture: ComponentFixture<ButtongithubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtongithubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtongithubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
