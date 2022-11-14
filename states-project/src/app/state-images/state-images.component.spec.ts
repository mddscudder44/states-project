import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateImagesComponent } from './state-images.component';

describe('StateImagesComponent', () => {
  let component: StateImagesComponent;
  let fixture: ComponentFixture<StateImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StateImagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StateImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
