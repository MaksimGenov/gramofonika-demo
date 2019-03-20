import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentPostsPanelComponent } from './recent-posts-panel.component';

describe('RecentPostsPanelComponent', () => {
  let component: RecentPostsPanelComponent;
  let fixture: ComponentFixture<RecentPostsPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentPostsPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentPostsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
