import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentFourthComponent } from './component-fourth.component';

describe('ComponentFourthComponent', () => {
  let component: ComponentFourthComponent;
  let fixture: ComponentFixture<ComponentFourthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentFourthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentFourthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
