import { Routes } from '@angular/router';
import { ListProductComponent } from './list-product/list-product.component';
import { BookComponent } from './book/book.component';
import { BookCardComponent } from './book-card/book-card.component';
import { AuthorComponent } from './author/author.component';
import { AuthorCardComponent } from './author-card/author-card.component';
import { CardDetailsComponent } from './card-details/card-details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CategoriesComponent } from './categories/categories.component';
import { ShowCategoryBooksCardComponent } from './show-category-books-card/show-category-books-card.component';

export const routes: Routes = [
    {
        path:"",
        component: ListProductComponent,
        title:"listOfProducts"
    },
    {
        path:"categories",
        component:CategoriesComponent,
        title:"Categories"
    },
    {
        path:"categories/:id",
        component:ShowCategoryBooksCardComponent,
        title:"Categories"
    },
    {
        path:"authors",
        component:AuthorComponent,
        title:"Authors"
    },
    {
        path:"authors/:id",
        component:AuthorCardComponent,
        title:"Author Details"
    },
    {
        path:"books",
        component:BookComponent,
        title:"Books"
    },
    {
        path:"books/:id",
        component:BookCardComponent,
        title:"Book Details"
    },
    {
        path:"card_details/:id",
        component:CardDetailsComponent,
        title:"cardDetails"
    },
    {
        path:"**",
        component: NotFoundComponent,
        title:"notFound"
    },
];
