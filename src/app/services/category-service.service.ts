import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  apiUrl = 'http://localhost:3000/categories';
  constructor(private http : HttpClient) { }
  getcategoriesNames(){
    return this.http.get(`${this.apiUrl}/${name}`);
  }

  getCategoryById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`)
    .pipe(
    );
  }
}
