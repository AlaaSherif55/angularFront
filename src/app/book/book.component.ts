import { Component } from '@angular/core';
import { Book } from '../interface/book';
import { BookService } from '../services/book.service';
@Component({
  selector: 'app-book',
  standalone: true,
  imports: [],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {
  books!: Array<Book>;
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
  // ngOnInit() {
  //   this.bookService.getBooks().subscribe(
  //     (res:any) => this.products=res.products
  //   );
  //  }
}