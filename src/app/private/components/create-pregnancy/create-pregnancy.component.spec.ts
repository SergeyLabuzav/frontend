import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePregnancyComponent } from './create-pregnancy.component';

describe('CreatePregnancyComponent', () => {
  let component: CreatePregnancyComponent;
  let fixture: ComponentFixture<CreatePregnancyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePregnancyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePregnancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
