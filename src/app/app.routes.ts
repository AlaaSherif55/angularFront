import { Routes } from '@angular/router';
import { ListProductComponent } from './list-product/list-product.component';
import { BookComponent } from './book/book.component';
import { BookCardComponent } from './book-card/book-card.component';
import { AuthorComponent } from './author/author.component';
import { AuthorCardComponent } from './author-card/author-card.component';
import { CategoryComponent} from './category/category.component';
import { CategoryCardComponent } from './category-card/category-card.component';
import { CardDetailsComponent } from './card-details/card-details.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {
        path:"",
        component: ListProductComponent,
        title:"listOfProducts"
    },
    {
        path:"categories",
        component:CategoryComponent,
        title:"Categories"
    },
    {
        path:"categories/:id",
        component:CategoryCardComponent,
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
        title:"Authors"
    },
    {
        path:"books",
        component:BookComponent,
        title:"Books"
    },
    {
        path:"books/:id",
        component:BookCardComponent,
        title:"Books"
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
