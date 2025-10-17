import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private apiUrl = 'http://127.0.0.1:5055/generate'; // ton backend FastAPI

  constructor(private http: HttpClient) {}

  generateRecipes(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }
}
