import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewArticleCardComponent } from './preview-article-card.component';

describe('PreviewArticleCardComponent', () => {
  let component: PreviewArticleCardComponent;
  let fixture: ComponentFixture<PreviewArticleCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviewArticleCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewArticleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
