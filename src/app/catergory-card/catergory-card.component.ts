import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-catergory-card',
  standalone: true,
  imports: [NgIf, FormsModule,RouterLink,RouterLinkActive],
  templateUrl: './catergory-card.component.html',
  styleUrl: './catergory-card.component.css'
})
export class CategoryCardComponent {
  @Input() categoryItem: any;
  constructor(private router : Router){}

  redirectToDetails(id : string){
    this.router.navigate(['categories' , id])
    console.log(id);
    
 }

}
