import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ListProductComponent } from './list-product/list-product.component';
import { CardDetailsComponent } from './card-details/card-details.component';
import { BookCardComponent } from './book-card/book-card.component';
import { BookComponent } from './book/book.component';
import { AuthorComponent } from './author/author.component';
import { AuthorCardComponent } from './author-card/author-card.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryCardComponent } from './catergory-card/catergory-card.component';
import { ShowCategoryBooksCardComponent } from './show-category-books-card/show-category-books-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,ListProductComponent,CardDetailsComponent,BookCardComponent,BookComponent, AuthorComponent, AuthorCardComponent, CategoriesComponent, CategoryCardComponent, ShowCategoryBooksCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Lab2.1';
}
