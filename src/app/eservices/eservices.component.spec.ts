import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EServicesComponent } from './eservices.component';

describe('EServicesComponent', () => {
  let component: EServicesComponent;
  let fixture: ComponentFixture<EServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
