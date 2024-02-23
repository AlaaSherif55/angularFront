import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '../services/category-service.service';

@Component({
  selector: 'app-show-category-books-card',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './show-category-books-card.component.html',
  styleUrl: './show-category-books-card.component.css'
})
export class ShowCategoryBooksCardComponent {
  categories: any[] = [];
  @Input() id:string="";
  constructor(private categoryService: CategoryService) {}

  ngOnInit() {
    this.categoryService.getCategoryById(this.id).subscribe(
      (data: any) => {
        console.log('categories:on each', data);
        this.categories = data.categories;
      },
      (error) => {
        console.error('Error fetching categories:', error);
      }
    );
  }
}
