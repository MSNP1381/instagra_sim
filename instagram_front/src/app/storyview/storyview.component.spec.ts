import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryviewComponent } from './storyview.component';

describe('StoryviewComponent', () => {
  let component: StoryviewComponent;
  let fixture: ComponentFixture<StoryviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoryviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
