import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlazorComponentComponent } from './blazor-component.component';

describe('BlazorComponentComponent', () => {
  let component: BlazorComponentComponent;
  let fixture: ComponentFixture<BlazorComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlazorComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlazorComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
