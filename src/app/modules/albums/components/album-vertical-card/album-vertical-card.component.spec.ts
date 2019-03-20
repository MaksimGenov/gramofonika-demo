import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumVerticalCardComponent } from './album-vertical-card.component';

describe('AlbumVerticalCardComponent', () => {
  let component: AlbumVerticalCardComponent;
  let fixture: ComponentFixture<AlbumVerticalCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumVerticalCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumVerticalCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
