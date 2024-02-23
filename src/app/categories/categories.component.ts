import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import {CategoryCardComponent } from '../catergory-card/catergory-card.component.js';
import { CategoryService } from '../services/category-service.service.js';
import { Category } from '../interface/category.js';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CategoryCardComponent ,NgIf],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  categories: Category[] = [];
  constructor(private categoryService: CategoryService) {}

  ngOnInit() {
    this.categoryService.getcategoriesNames().subscribe(
      (data: any) => {
        console.log('categories:', data);
        this.categories = data.categories;
      },
      (error) => {
        console.error('Error fetching categories:', error);
      }
    );
  }




}
  