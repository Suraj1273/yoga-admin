import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkApplicationComponent } from './bulk-application.component';

describe('BulkApplicationComponent', () => {
  let component: BulkApplicationComponent;
  let fixture: ComponentFixture<BulkApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BulkApplicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
