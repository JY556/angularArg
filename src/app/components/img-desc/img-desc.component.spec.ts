import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgDescComponent } from './img-desc.component';

describe('ImgDescComponent', () => {
  let component: ImgDescComponent;
  let fixture: ComponentFixture<ImgDescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgDescComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
