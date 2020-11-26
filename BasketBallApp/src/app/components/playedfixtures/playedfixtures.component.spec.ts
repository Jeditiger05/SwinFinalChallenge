import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayedfixturesComponent } from './playedfixtures.component';

describe('PlayedfixturesComponent', () => {
  let component: PlayedfixturesComponent;
  let fixture: ComponentFixture<PlayedfixturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayedfixturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayedfixturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
