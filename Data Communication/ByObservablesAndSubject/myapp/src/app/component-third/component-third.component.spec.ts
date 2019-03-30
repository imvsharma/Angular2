import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentThirdComponent } from './component-third.component';

describe('ComponentThirdComponent', () => {
  let component: ComponentThirdComponent;
  let fixture: ComponentFixture<ComponentThirdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentThirdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentThirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
