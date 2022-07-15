import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewContactModalComponent } from './view-contact-modal.component';

describe('ViewContactModalComponent', () => {
  let component: ViewContactModalComponent;
  let fixture: ComponentFixture<ViewContactModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewContactModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewContactModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
