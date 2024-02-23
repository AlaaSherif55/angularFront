import { Component, Input } from '@angular/core';
import { ProductShareService } from '../services/product-share.service';
import { Product } from '../interface/product';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { BookService } from '../services/book.service';
import { Book } from '../interface/book';
@Component({
  selector: 'app-book-card',
  standalone: true,
  imports: [CurrencyPipe,FormsModule,RouterLink,RouterLinkActive],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.css'
})
export class BookCardComponent {
  userRating: number = 3; // Default rating is 3
  book!:Book;
  @Input() id:string="";

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    const queryParams = { pageNum: 1 }; 
    console.log(this.id);
    const token =  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRXhpc3QiOnsiX2lkIjoiNjVkNTJmYmI0MWMzZDg4OWJlYjRmN2QyIiwidXNlcm5hbWUiOiJub3VyIiwiZmlyc3ROYW1lIjoiYWx4aSIsImxhc3ROYW1lIjoiVGFyZWtrIiwiZW1haWwiOiJhbHNra2lAZXhhbXBsZS5jb20iLCJyb2xlIjoidXNlciIsImNyZWF0ZWRBdCI6IjIwMjQtMDItMjBUMjM6MDM6MjMuMzA1WiIsInVwZGF0ZWRBdCI6IjIwMjQtMDItMjBUMjM6MDM6MjMuMzA1WiIsIl9fdiI6MH0sImlhdCI6MTcwODYyOTM2M30.48MxSfSnOy91SzUPPqICTl_EoASigAm75tNA7wR7FHg";
    this.bookService.getBookById(this.id, token)
      .subscribe((data) => {
        this.book = data;
        console.log(this.book);
      }, (error) => {
        console.error('Error fetching books:', error);
      });
  }
  onDropdownItemClicked(value: string) {
    // update the sheleve in db 
      console.log('Selected value:', value);
      const data = {shelve: value};
      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRXhpc3QiOnsiX2lkIjoiNjVkNTJmYmI0MWMzZDg4OWJlYjRmN2QyIiwidXNlcm5hbWUiOiJub3VyIiwiZmlyc3ROYW1lIjoiYWx4aSIsImxhc3ROYW1lIjoiVGFyZWtrIiwiZW1haWwiOiJhbHNra2lAZXhhbXBsZS5jb20iLCJyb2xlIjoidXNlciIsImNyZWF0ZWRBdCI6IjIwMjQtMDItMjBUMjM6MDM6MjMuMzA1WiIsInVwZGF0ZWRBdCI6IjIwMjQtMDItMjBUMjM6MDM6MjMuMzA1WiIsIl9fdiI6MH0sImlhdCI6MTcwODYyOTM2M30.48MxSfSnOy91SzUPPqICTl_EoASigAm75tNA7wR7FHg";
      this.bookService.updateBook(this.id,data, token)
      .subscribe((data) => {
        console.log(data);
      }, (error) => {
        console.error('Error fetching books:', error);
      });
    }
  onRatingChange(rating: number) {
      this.userRating = rating;
      console.log(`the id ${this.id}`);
      console.log(this.userRating);
      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRXhpc3QiOnsiX2lkIjoiNjVkNTJmYmI0MWMzZDg4OWJlYjRmN2QyIiwidXNlcm5hbWUiOiJub3VyIiwiZmlyc3ROYW1lIjoiYWx4aSIsImxhc3ROYW1lIjoiVGFyZWtrIiwiZW1haWwiOiJhbHNra2lAZXhhbXBsZS5jb20iLCJyb2xlIjoidXNlciIsImNyZWF0ZWRBdCI6IjIwMjQtMDItMjBUMjM6MDM6MjMuMzA1WiIsInVwZGF0ZWRBdCI6IjIwMjQtMDItMjBUMjM6MDM6MjMuMzA1WiIsIl9fdiI6MH0sImlhdCI6MTcwODY4NTI0N30.RU6-lR7QAcLSv54pmO5IMwR5x5IcCtZ0eQDFCkhUBeE";
      this.bookService.updateBookRating(this.id,this.userRating, token)
      .subscribe((data) => {
        console.log(data);
      }, (error) => {
        console.error('Error fetching books:', error);
      });
     
    }
}
