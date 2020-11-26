import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberCostsComponent } from './member-costs.component';

describe('MemberCostsComponent', () => {
  let component: MemberCostsComponent;
  let fixture: ComponentFixture<MemberCostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberCostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberCostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
