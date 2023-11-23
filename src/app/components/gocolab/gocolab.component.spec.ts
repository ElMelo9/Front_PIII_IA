import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GocolabComponent } from './gocolab.component';

describe('GocolabComponent', () => {
  let component: GocolabComponent;
  let fixture: ComponentFixture<GocolabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GocolabComponent]
    });
    fixture = TestBed.createComponent(GocolabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
