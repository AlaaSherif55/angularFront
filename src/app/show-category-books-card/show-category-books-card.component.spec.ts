import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCategoryBooksCardComponent } from './show-category-books-card.component';

describe('ShowCategoryBooksCardComponent', () => {
  let component: ShowCategoryBooksCardComponent;
  let fixture: ComponentFixture<ShowCategoryBooksCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowCategoryBooksCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowCategoryBooksCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
