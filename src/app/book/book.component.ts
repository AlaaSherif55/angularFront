import { Component } from '@angular/core';
import { Book } from '../interface/book';
import { BookService } from '../services/book.service';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-book',
  standalone: true,
  imports: [FormsModule,RouterLink,RouterLinkActive],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {
  books!: Array<Book>;
  currentPage: number = 1;
  constructor(private bookService: BookService){
   
  }
  ngOnInit(): void {
    const queryParams = { pageNum: 1 }; 
    const token =  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRXhpc3QiOnsiX2lkIjoiNjVkNTJmYmI0MWMzZDg4OWJlYjRmN2QyIiwidXNlcm5hbWUiOiJub3VyIiwiZmlyc3ROYW1lIjoiYWx4aSIsImxhc3ROYW1lIjoiVGFyZWtrIiwiZW1haWwiOiJhbHNra2lAZXhhbXBsZS5jb20iLCJyb2xlIjoidXNlciIsImNyZWF0ZWRBdCI6IjIwMjQtMDItMjBUMjM6MDM6MjMuMzA1WiIsInVwZGF0ZWRBdCI6IjIwMjQtMDItMjBUMjM6MDM6MjMuMzA1WiIsIl9fdiI6MH0sImlhdCI6MTcwODYyOTM2M30.48MxSfSnOy91SzUPPqICTl_EoASigAm75tNA7wR7FHg";
    this.bookService.getBooks(queryParams, token)
      .subscribe((data) => {
        this.books = data;
        console.log(this.books);
      }, (error) => {
        console.error('Error fetching books:', error);
      });
  }
  
navigateToPage(pageNumber: number) {
  if (pageNumber < 1 || pageNumber > 3) {
    return; // Prevent navigating to invalid pages
  }
  this.currentPage = pageNumber; // Update currentPage
  const queryParams = { pageNum: pageNumber }; 
  const token =  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRXhpc3QiOnsiX2lkIjoiNjVkNTJmYmI0MWMzZDg4OWJlYjRmN2QyIiwidXNlcm5hbWUiOiJub3VyIiwiZmlyc3ROYW1lIjoiYWx4aSIsImxhc3ROYW1lIjoiVGFyZWtrIiwiZW1haWwiOiJhbHNra2lAZXhhbXBsZS5jb20iLCJyb2xlIjoidXNlciIsImNyZWF0ZWRBdCI6IjIwMjQtMDItMjBUMjM6MDM6MjMuMzA1WiIsInVwZGF0ZWRBdCI6IjIwMjQtMDItMjBUMjM6MDM6MjMuMzA1WiIsIl9fdiI6MH0sImlhdCI6MTcwODYyOTM2M30.48MxSfSnOy91SzUPPqICTl_EoASigAm75tNA7wR7FHg";
  this.bookService.getBooks(queryParams, token)
    .subscribe(
      (data) => {
        this.books = data;
        console.log(this.books);
      },
      (error) => {
        console.error('Error fetching books:', error);
      }
    );
}
}
