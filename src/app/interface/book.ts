import { Author } from "./author";
import { Category } from "./category";

export interface Book {
    id: number;
    title: string;
    description: string;
    author: Author;
    image: string;
    category: Category; 
    valueOfRating: number;
    countOfRating: number;
    reviews: string[];
    shelve: string;
}