import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewArticleBasketComponent } from './preview-article-basket.component';

describe('PreviewArticleBasketComponent', () => {
  let component: PreviewArticleBasketComponent;
  let fixture: ComponentFixture<PreviewArticleBasketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviewArticleBasketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewArticleBasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
