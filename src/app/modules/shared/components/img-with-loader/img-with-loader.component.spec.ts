import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgWithLoaderComponent } from './img-with-loader.component';

describe('ImgWithLoaderComponent', () => {
  let component: ImgWithLoaderComponent;
  let fixture: ComponentFixture<ImgWithLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgWithLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgWithLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
