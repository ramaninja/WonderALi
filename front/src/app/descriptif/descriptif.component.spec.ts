import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptifComponent } from './descriptif.component';

describe('DescriptifComponent', () => {
  let component: DescriptifComponent;
  let fixture: ComponentFixture<DescriptifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescriptifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
