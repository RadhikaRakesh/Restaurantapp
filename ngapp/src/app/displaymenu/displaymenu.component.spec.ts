import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaymenuComponent } from './displaymenu.component';

describe('DisplaymenuComponent', () => {
  let component: DisplaymenuComponent;
  let fixture: ComponentFixture<DisplaymenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaymenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaymenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
