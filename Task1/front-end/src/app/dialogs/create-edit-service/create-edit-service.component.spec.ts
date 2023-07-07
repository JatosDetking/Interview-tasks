import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditServiceComponent } from './create-edit-service.component';

describe('CreateEditServiceComponent', () => {
  let component: CreateEditServiceComponent;
  let fixture: ComponentFixture<CreateEditServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateEditServiceComponent]
    });
    fixture = TestBed.createComponent(CreateEditServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
