import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Average3Component } from './average3.component';

describe('Average3Component', () => {
  let component: Average3Component;
  let fixture: ComponentFixture<Average3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Average3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Average3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
